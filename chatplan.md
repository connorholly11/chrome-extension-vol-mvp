### Ultra-lean prototype: what you **actually** need (and nothing you don’t)

| Layer                                 | What you build                                                                                                                                                                                                                                                                                                  | Key calls / messages   | Effort                                                                                                                                                 |       |       |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- | ----- |
| **1. Auth**                           | A single “Connect” button in the popup. When clicked it performs:<br>1. `POST /user/generateTradingToken` (with the firm-supplied `x-api-key`, username & password) to grab `tradingWssEndpoint` + one-shot `tradingWssToken` <br>2. Save both in `chrome.storage.local` (unencrypted is fine for a dev build). | REST                   | \~1 h                                                                                                                                                  |       |       |
| **2. WebSocket session**              | Background service-worker opens the returned `tradingWssEndpoint`, immediately sends a `LoginRequestMsg` carrying the `tradingWssToken`                                                                                                                                                                         | WS (protobuf)          | \~1 h                                                                                                                                                  |       |       |
| **3. Account bootstrap**              | After `LoginOK`, send one `InfoReqMsg` with modes 1                                                                                                                                                                                                                                                             | 2                      | 3 to pull:<br>• account list (stores `accountNo`)<br>• snapshot of positions / orders<br>• live subscriptions for balance, order, and position pushes  | WS    | \~1 h |
| **4. Popup UI (React or plain HTML)** | Minimal panel that shows:<br>• *Symbol* (fed by a content-script that polls `TradingView`’s JS API)<br>• *Qty* input (defaults to `1`)<br>• **BUY MKT** / **SELL MKT** buttons<br>• Text read-outs: Balance, Pos size/PnL                                                                                       | Message-passing        | \~2 h                                                                                                                                                  |       |       |
| **5. Order route**                    | On button click send an `InsertOrderMsg` through the open socket:<br>\`{ accountNo, contractId, qty, side: BUY                                                                                                                                                                                                  | SELL, type: MARKET }\` | WS                                                                                                                                                     | \~1 h |       |
| **6. Live table**                     | Listen for `OrderInfoMsg`, `PositionInfoMsg`, `BalanceInfoMsg` pushes and patch the popup state so the user sees fills & P/L update in real-time                                                                                                                                                                | WS                     | \~1 h                                                                                                                                                  |       |       |
| **7. Build & load**                   | Run `pnpm build`, zip `dist/`, load “unpacked” in Chrome.                                                                                                                                                                                                                                                       | —                      | \~30 min                                                                                                                                               |       |       |

Total hands-on time: **≈ 7–8 hours** if you already have basic MV3 chops.
Everything else—limit orders, stops, multi-account fan-out, fancy risk checks—can wait for sprint 2.

---

#### File-level calls you’ll copy-paste

```ts
// AUTH (background.ts)
const res = await fetch('https://api.volumetricafx.com/api/v2/user/generateTradingToken', {
  method: 'POST',
  headers: { 'x-api-key': API_KEY, 'content-type': 'application/json' },
  body: JSON.stringify({ login, password, version: 3, environment: 0, platform: 10000, connectOnlyTrading: true })
})
const { tradingWssEndpoint, tradingWssToken } = (await res.json()).data
chrome.storage.local.set({ wssUrl: tradingWssEndpoint, wssTok: tradingWssToken })
```

```ts
// ORDER (background.ts)
function sendMarket(side: 'BUY' | 'SELL', symbol: string, qty: number) {
  socket.send(encodeInsertOrderMsg({ accountNo, contractId: lookup(symbol), qty, side }))
}
```

No Sentry, no crash telemetry, no back-end—just enough to click **BUY** and see the trade hit Volumetrica.
