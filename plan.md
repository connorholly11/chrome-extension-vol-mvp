# Volumetrica MVP Integration – Lean-to-Prod Checklist

> **Goal: Replace every mock with live Volumetrica data, place real orders, ship.**  
> **Scope cuts:** No FINRA archiving, no elaborate security vaults, no copy-trading polish. Just make it work.

## 📊 Current Progress
- ✅ **Step 0: Pre-flight** - COMPLETE
- ✅ **Step 1: WebSocket & Auth** - COMPLETE ✨
- ✅ **Step 2: Live Data Feed** - Account data working! 🎉
  - ✅ BalanceInfo parsing - showing real account balances
  - ✅ Account switching in UI
  - ✅ Removed ALL mock data
  - ✅ Chrome storage for data persistence
  - ⏳ Positions parsing
  - ⏳ Orders parsing
- ⬜ **Step 3: Order Placement**
- ⬜ **Step 4: Minimal Resilience**
- ⬜ **Step 5: QA & Ship**

## 📝 What We've Done So Far

### 1. Authentication & WebSocket Connection ✅
- Connected to Volumetrica's trading API using the prop firm's PLT_KEY
- Implemented binary WebSocket with protobuf encoding
- Custom minimal protobuf parser (proto-minimal.js) to avoid service worker issues
- Proper login flow with token-based auth

### 2. Account Data Integration ✅
- Successfully parsing BalanceInfo messages (field 4, wire type 2)
- Accounts show real-time balances from Volumetrica
- Account switching works in the UI
- Using Chrome storage to persist account data between sidepanel and background

### 3. Clean Architecture ✅
- Removed ALL mock data from the extension
- Data flow: Volumetrica → Background → Chrome Storage → Sidepanel
- Disabled subscriptions for testing (cleaner console output)

## 🚀 Next Steps

### Immediate: Parse Positions & Orders
1. **Identify Position Message Structure**
   - Currently seeing 138-byte InfoResp after position request
   - Need to parse field numbers and data types
   - Test with open position to see data structure

2. **Update proto-minimal.js**
   - Add position parser similar to BalanceInfo
   - Parse contract ID, quantity, avg price, P&L
   - Handle both PositionInfo and PositionUpdMsg

3. **Forward to UI**
   - Store positions in Chrome storage
   - Update sidepanel to display real positions
   - Remove "No positions" placeholder

### Then: Order Placement
1. Map UI symbols (ES, NQ) to Volumetrica contract IDs
2. Use real account numbers from BalanceInfo
3. Implement order confirmation flow

### Finally: Production Ready
1. Re-enable subscriptions for real-time updates
2. Add reconnection logic
3. Error handling and user feedback

## 🔧 Troubleshooting / Known Issues

### Service Worker Crashes
- **Problem**: Full protobuf.js library crashes service workers
- **Solution**: Created proto-minimal.js with custom encoder/decoder

### Message Passing Between Background and Sidepanel
- **Problem**: chrome.runtime.sendMessage doesn't work from background to sidepanel
- **Solution**: Use chrome.storage.local as intermediary

### Balance Update Spam
- **Problem**: With SubscriptionEnabled: true, getting balance updates every few ms
- **Solution**: Set SubscriptionEnabled: false for testing, or limit logging

### Finding Field Numbers
- **Method**: Log raw bytes, check field number (tag >> 3) and wire type (tag & 7)
- **Example**: BalanceInfo uses field 1 for balance (double), field 2 for accountNo (varint)

---

## 0. Pre-flight (½ day) ✅ COMPLETE

- [x] `npm i protobufjs` (runtime + CLI)
- [x] Run `npm run proto` → commit generated `proto.js / .d.ts`
- [x] Add `MODE = 'prod' | 'staging'` flag in `config.js` (default **prod**)
- [x] Review existing proto import in background.js (already there but using placeholder)

---

## 1. WebSocket & Auth (1–2 days) ✅ COMPLETE

### 1.1 Auth Enhancement ✅
Background.js already fetches `tradingWssEndpoint` + `tradingWssToken`.  
Return `{endpoint, token}` to new `connectWebSocket()`.

### 1.2 Simple WS Wrapper ✅
```javascript
class VSocket {
  constructor(url) { 
    this.ws = new WebSocket(url); 
    this.ws.binaryType = 'arraybuffer';
    this.ws.onclose = reconnect; // Auto-reconnect on close
    this.heartbeatTimer = null;
  }
  
  send(obj) { 
    this.ws.send(Proto.ClientRequestMsg.encode(obj).finish()); 
  }
  
  on(cb) { 
    this.ws.onmessage = e => {
      clearInterval(reconnectTimer); // Clear reconnect on any message
      cb(Proto.ServerResponseMsg.decode(new Uint8Array(e.data)));
    };
  }
  
  startHeartbeat() {
    this.heartbeatTimer = setInterval(() => this.send({ Ping: {} }), 45000);
  }
  
  stopHeartbeat() {
    clearInterval(this.heartbeatTimer);
  }
}
```
*Binary only; minimal reconnection built-in.*

### 1.3 Login Flow ✅
- Send `LoginReqMsg` with token on `onopen`: ✅
  ```javascript
  vSocket.send({
    LoginReq: {
      Token: wsToken,
      AccountSubscriptionMode: 2 // ExistingAndNew
    }
  });
  ```
- Await `LoginRespMsg` success before marking `isConnected=true` ✅
- Call `vSocket.startHeartbeat()` immediately after login success ✅
- **Note**: Heartbeat should be 45 seconds per proto docs (not 25) ✅

---

## 2. Live Data Feed (2–3 days)

### What to Replace & How

| Mock Data | Implementation |
|-----------|----------------|
| **Accounts** | After login, send `InfoReqMsg {Modes:[1]}`. Populate `state.accounts`, `state.selectedAccount`. |
| **Positions** | Send `InfoReqMsg {Modes:[2,3]}` once, then listen for `PositionUpdMsg`. |
| **Orders** | Listen for `OrderInfoMsg` (insert/update). Ditch `mockOrders`. |
| ~~**Fills**~~ | ~~Not needed - users only care about positions, orders, and account info~~ |

*All handlers live in **background.js** and forward compact JSON over `chrome.runtime.sendMessage` (same shapes the UI already expects).*

### Message Handler Structure
```javascript
function handleServerMessage(msg) {
  if (msg.LoginResp) {
    if (msg.LoginResp.success) {
      isConnected = true;
      requestInitialData();
    }
  } else if (msg.AccountHeaderMsg) {
    // Forward account data to UI with verb-based naming
    chrome.runtime.sendMessage({
      type: 'accounts:update',
      accounts: msg.AccountHeaderMsg.accounts
    });
  } else if (msg.PositionInfo) {
    chrome.runtime.sendMessage({
      type: 'positions:update',
      position: msg.PositionInfo
    });
  } else if (msg.OrderInfo) {
    chrome.runtime.sendMessage({
      type: 'orders:update',
      order: msg.OrderInfo
    });
  } else if (msg.FillInfo) {
    chrome.runtime.sendMessage({
      type: 'fills:update',
      fill: msg.FillInfo
    });
  }
}
```

---

## 3. Order Placement (1 day)

### 3.1 Message Flow
1. Side-panel → background sends `{type:'placeOrder', order}`
2. Background builds order with proper structure:
   ```javascript
   vSocket.send({
     Order: [{
       OrderInsert: {
         ContractId: contractId,
         SeqClientId: nextSeqId++,  // Unique per session
         Quantity: side === 'sell' ? -qty : qty,  // Negative for sell!
         Price: price,
         OrderType: 1,  // 0=Market, 1=Limit
         AccNumber: accountNo,
         Source: 0  // 0=Manual
       }
     }]
   });
   ```
3. On server echo / `OrderInfoMsg`, UI updates status badge

### 3.2 Contract ID Mapping
Store in chrome.storage.local with hard-coded defaults:
```javascript
// On startup, seed if missing
chrome.storage.local.get('contracts', (result) => {
  if (!result.contracts) {
    chrome.storage.local.set({
      contracts: {
        'ES': 12345,   // E-mini S&P 500
        'NQ': 12346,   // E-mini NASDAQ
        'YM': 12347,   // E-mini Dow
        'RTY': 12348   // E-mini Russell
      }
    });
  }
});

// Usage: const contracts = await chrome.storage.local.get('contracts');
```
*Hot-patchable via DevTools without rebuild.*

**Note**: For dynamic contract lookup, use format like "/ESZ22.XCME" in `ContractReqMsg`

---

## 4. Minimal Resilience (1 day)

*Skip fancy back-off; do the bare minimum.*

| Case | Behavior |
|------|----------|
| **WS drops** | Try `ws = new WebSocket(url)` once every 10s until success |
| **Token expires** | Force UI back to login view |
| **Background restarts** | Persist `endpoint/token` & `selectedAccount` to `chrome.storage.local`; on `onStartup` immediately reconnect |

Simple reconnect logic:
```javascript
function reconnect() {
  if (reconnectTimer) return;
  reconnectTimer = setInterval(() => {
    connectWebSocket(wsEndpoint, wsToken)
      .then(() => {
        clearInterval(reconnectTimer);
        reconnectTimer = null;
      });
  }, 10000);
}

// Also clear on successful connection
ws.onopen = () => {
  clearInterval(reconnectTimer);
  reconnectTimer = null;
  // Send login...
};
```

---

## 5. QA & Ship (2–3 days)

### Testing Checklist
- [ ] Login, see real balance
- [ ] Position opens in another platform → extension shows it within 1s
- [ ] Place market/limit orders; status flows **PENDING → FILLED**
- [ ] Side-panel closes/re-opens: state rehydrates
- [ ] Chrome sleep/wake: WS reconnects

### Deployment
1. Pack `dist/` and load unpacked in Prod Chrome
2. Once green-lit, zip and send to Chrome Web Store (private listing first)

---

## Current Mock Data Locations

1. **Account Data** (sidepanel.js:9-44)
   - Mock accounts array with hardcoded balances
   - Selected account state

2. **Positions Data** (sidepanel.js:60-65)
   - Mock positions with fake prices and P&L

3. **Orders Data** (sidepanel.js:67-71)
   - Mock pending/partial orders

4. **Fills Data** (sidepanel.js:73-76)
   - Mock execution history

5. **Account Info** (background.js:29)
   - Hardcoded TEST123 account number

---

## Critical Proto Details (from docs review)

### Must-Have Fields
- **SeqClientId**: Track each order with unique ID per session
- **Quantity Sign**: NEGATIVE for sell orders, positive for buy
- **Contract Lookup**: Can't use symbols directly - need ContractId first
- **Ping Interval**: 45 seconds (not 25 as previously attempted)
- **AccountSubscriptionMode**: Set to 2 (ExistingAndNew) on login

### Message Wrapper
All requests MUST be wrapped in `ClientRequestMsg`:
```javascript
// WRONG: vSocket.send({ LoginReq: {...} })
// RIGHT: Already handled by VSocket.send() wrapper
```

---

## Timeline Reality Check

- **Pre-flight + WS/Auth**: ~1 day if proto compile goes smoothly
- **Live data**: 2-3 days realistic *only if* server message shapes match expectations
  - Budget extra ½ day for "why is `PositionUpdMsg.accountNo` undefined?"
- **Orders**: 1 day if contract IDs are static; double it if REST lookup needed
- **Resilience + QA**: 2 days (mostly "sleep laptop, wake it, lost state" debugging)

**Total: ~1 focused work week** ✓

---

## Parking Lot (Post-MVP)

- Copy-trading fan-out
- Contract search API
- Nicer error toasts
- Staging environment toggle
- Duplicate message dedupe
- Proper reconnection with exponential backoff
- Order modification/cancellation
- Historical data via Report API

---

**That's it.** Stick to the tasks above, ignore long-term compliance for now, and you'll have a functional production extension in roughly **one business week** of focused work.