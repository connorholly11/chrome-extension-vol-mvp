# Volumetrica MVP Integration – Lean-to-Prod Checklist

> **🔴 BLOCKER: Orders fail with "Trading account not found" - Need to map account 3316 → TDL01658**

> **Goal: Replace every mock with live Volumetrica data, place real orders, ship.**  
> **Scope cuts:** No FINRA archiving, no elaborate security vaults, no copy-trading polish. Just make it work.

## 🎯 Quick Status (2025-07-15)
- **Working**: Auth ✅, Positions ✅, Balances ✅, WebSocket ✅
- **Blocked**: Order placement - account ID format mismatch
- **Next Step**: Find where API provides external account ID (TDL01658)

## 📊 Current Progress
- ✅ **Step 0: Pre-flight** - COMPLETE
- ✅ **Step 1: WebSocket & Auth** - COMPLETE ✨
- ✅ **Step 2: Live Data Feed** - MOSTLY COMPLETE! 🎉
  - ✅ BalanceInfo parsing - showing real account balances
  - ✅ Account switching in UI  
  - ✅ Removed ALL mock data
  - ✅ Chrome storage for data persistence
  - ✅ Positions parsing - MNQ position shows in UI!
  - ⚠️ Orders parsing - Found but status filtering issue
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

### 4. Key Message Type Mappings (CRITICAL!)
```
Field 3: InfoResp - Contains positions/orders/account data
Field 4: BalanceInfo - Account balances (repeated)
Field 7: OrderInfo - Expected orders here but was wrong!
Field 11: TradeInfo - Market trades (spam, disabled logging)
Field 13: PositionInfo - Position updates
Field 20: AccountHeaderMsg
Field 50: PositionUpdMsg
Field 51: OrderInfoMsg

Inside InfoResp:
- Field 4: Position data (working!)
- Field 6: Order data (NOT field 7!)
- Field 7: Unknown (logged but unused)
```

### 5. Where Key Code Lives
- **proto-minimal.js**: Custom protobuf parser
  - Line 287: Order parsing (field 6)
  - Line 234-276: Position parsing (field 4)
  - Line 313-359: Balance parsing
- **background.js**:
  - Line 262-287: WebSocket message handler
  - Line 341-343: Order status filtering (NEEDS FIX!)
  - Line 409-453: Data request modes
- **sidepanel.js**:
  - Line 758-771: Loading data from storage
  - Line 495: Position display update

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

## 🔍 CRITICAL FINDINGS - Account ID Mismatch

### The Main Blocker (2025-07-15)
**Orders are rejected with: "Trading account not found"**

Why? Account ID format mismatch:
- **What we have**: 3316 (from BalanceInfo)
- **What Volumetrica expects**: TDL01658 (shown in their UI)
- **Result**: All orders fail

### Order Parsing Issues
1. **Found 20,482 orders** but they're not futures orders
2. **Prices are wrong**: 0.5, 1, 2 (should be ~23,000 for futures)
3. **Status distribution**: Exactly 2 orders for each status (suspicious)
4. **Mode 5 (active orders)** returns empty

### What's Actually Working
- Order structure is correct (we see the rejection message)
- Contract ID is correct (589106 for MNQ)
- WebSocket communication perfect
- Just need the right account format!

## 🎯 EXACT Next Steps - Account ID Investigation

### 1. Find External Account ID (CRITICAL 🔥) ✅ FOUND!
The order fails because we're sending `3316` but need `TDL01658`. 

**🎉 SOLUTION FOUND**: AccountHeaderMsg in InfoResp (when mode 1 is requested) contains:
- `accountNumber` (field 1): The internal ID (3316)
- `accountHeader` (field 2): The external ID ("TDL01658")

**Current Status**:
- ✅ Parsing AccountHeaderMsg in InfoResp field 1
- ✅ Storing account mapping: `accountMapping[3316] = "TDL01658"`
- ✅ Fixed OrderInfo AccNumber field (14, not 16)
- ✅ Added timestamp to orders for UI
- ✅ Enhanced error logging

**Still Need To Test**:
- Whether Volumetrica accepts the numeric account ID (3316)
- Or if we need to send the string ID ("TDL01658") in a different field

### 2. Temporary Workaround to Test
```javascript
// In handlePlaceOrder, try hardcoding:
AccNumber: "TDL01658" // Instead of 3316

// Or try sending as string in a different field
// Check if there's an AccCode or AccString field
```

### 3. Debug Account Data
```javascript
// Add to BalanceInfo parsing:
console.log('Full balance message:', msg.BalanceInfo);
// Look for any field that contains "TDL"

// Add to InfoResp account parsing:
if (msg.InfoResp.accounts) {
  console.log('Account details:', msg.InfoResp.accounts);
}
```

### 4. Check Proto Files Again
Look for:
- AccountCode vs AccountNumber
- ExternalId vs InternalId
- Any field that might map 3316 → TDL01658

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

### Orders in Wrong Field
- **Problem**: Expected orders in field 7, actually in field 6
- **Solution**: Changed parsing in proto-minimal.js line 287

### Mode 5 Returns Empty
- **Problem**: InfoReq mode 5 (active orders) returns empty
- **Solution**: Parse mode 4 response but need correct status filtering

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

## 📊 Session Progress Log (2025-07-15)

### Started With
- Successful WebSocket connection
- Mock data still in UI
- Basic protobuf parsing

### Accomplished
1. ✅ Removed ALL mock data
2. ✅ Fixed protobuf field parsing (doubles vs varints)
3. ✅ Live position updates working
4. ✅ Real account balances showing
5. ✅ Order placement reaches server
6. ✅ Removed all TradingView integration
7. ✅ Added real-time UI updates

### Discovered Issues
1. **Account ID Format** - 3316 vs TDL01658 (blocker!)
2. **Order Data Strange** - 20,482 orders with tiny prices
3. **Contract IDs** - Only MNQ (589106) is real, others are placeholders

### Time Spent
- ~3 hours debugging order placement
- ~1 hour removing TradingView
- ~2 hours on protobuf parsing

### Recommendation for Next Session
**Start with AccountHeaderMsg parsing** - This likely contains the mapping between internal (3316) and external (TDL01658) account identifiers. Once you have the right account format, orders should work immediately since everything else is correct!

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

---

## 🚨 SUMMARY FOR NEXT DEVELOPER (Updated 2025-07-15)

### What's Working ✅
1. **Authentication** - Connects to Volumetrica successfully
2. **Accounts** - Real balances showing correctly
3. **Positions** - Live position updates working (MNQ shows in UI)
4. **WebSocket** - Binary protobuf communication with subscriptions
5. **UI Updates** - Real-time data flow via Chrome storage listeners
6. **Order Placement** - Message structure correct, orders reach Volumetrica
7. **Protobuf Parsing** - Custom proto-minimal.js handles all message types
8. **TradingView Integration** - Completely removed, no more errors

### What's NOT Working ❌
1. **Account Number Mismatch** 🚨 CRITICAL ISSUE!
   - API returns: 3316, 4530 (internal account numbers)
   - Volumetrica expects: TDL01658 (external account code)
   - Orders fail with: "Trading account not found"
2. **Orders Display** - 20,482 orders with weird data (prices 0.5, 1, 2)
3. **Order Filtering** - Can't find user's actual futures orders

### 🔥 THE Critical Discovery
When placing orders, we get **"Trading account not found"** because:
- BalanceInfo gives us account number `3316`
- But Volumetrica UI shows `TDL01658`
- The API expects the TDL format for order placement!

### What We Fixed This Session
1. **Fixed field names**: `OrdType` → `OrderType` (must match proto exactly)
2. **Added subscription support**: `SubscriptionEnabled: true` for live updates
3. **Fixed order parsing**: Price/quantity are doubles, not varints
4. **Added OrderInfo parsing**: Now we see error messages
5. **Removed all TradingView code**: No more console errors
6. **Added MNQ contract**: ID 589106 (from position data)

### Next Steps (Priority Order)
1. **Find External Account ID** 🎯
   - Check AccountHeaderMsg (field 20)
   - Look for account metadata in InfoResp
   - Try different InfoReq modes
   - Search for "TDL" prefix in any message

2. **Test with Different Account Fields**
   ```javascript
   // Current (failing):
   AccNumber: 3316
   
   // Need to find where to get:
   AccNumber: "TDL01658"
   ```

3. **Parse Real Orders**
   - Current orders have prices like 0.5, 1, 2 (not futures)
   - Need to find where real limit orders are
   - Status filtering might need adjustment

### Code Locations
- **Account parsing**: background.js:411-432
- **Order placement**: background.js:171-220
- **Order response**: background.js:438-450
- **Protobuf decoder**: proto-minimal.js

### Test Flow
1. Login → See balances → See position
2. Place order → Get "Trading account not found"
3. Need to map 3316 → TDL01658 somehow

Good luck! You're VERY close - just need the right account format!