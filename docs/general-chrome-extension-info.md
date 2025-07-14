Below is a single, dense reference sheet—no tables—collecting the must-know details and edge-cases for Manifest V3 background service-workers and related APIs. Skim, cherry-pick, come back later.

---

### 1.  How the worker really lives and dies

* **Boot**: first qualifying event (runtime message, action click, tab event, etc.).
* **Idle shutdown**: 30 s of no events or API calls, or if one task runs > 5 min. ([Chrome for Developers][1])
* **Timer resets**: any extension-API call, message, WebSocket traffic, alarm fire, or FCM/native-messaging ping fully refreshes the 30 s clock (Chrome 110+). ([Chrome for Developers][1], [Chrome for Developers][2])
* **Version nuance**: Chrome 116 extended lifetime when a WebSocket stays open; Chrome 120 lets alarms fire every 30 s so you can align a heartbeat. ([Chrome for Developers][1], [Chrome for Developers][3])
* **Globals are volatile**—when the worker respawns you start from a blank JS context. Persist to `chrome.storage` or IndexedDB during each event. ([Chrome for Developers][1])

---

### 2.  Legit ways to wake or keep it awake

* **Message passing**: `runtime.sendMessage`, `tabs.sendMessage`, or a long-lived port (`runtime.connect`). Keep port open if you need a guaranteed path back from popup/side-panel.
* **User gestures**: toolbar click (`chrome.action.onClicked`), context-menu, commands.
* **Browser events**: `tabs.*`, `webNavigation.*`, storage changes, alarms, idle, webRequest, push/FCM.
* **WebSocket traffic**: any frame in/out extends lifetime automatically (Chrome 116+). ([Chrome for Developers][1])
* **Debugger attachment**: devtools “Inspect” keeps it alive; good for long debugging sessions. ([Chrome for Developers][1])

---

### 3.  The “inactive so I can’t log in” trap & modern auth patterns

* **Identity API**: call `chrome.identity.getAuthToken({interactive:true})` or `launchWebAuthFlow` from the worker when user clicks “Log in”. They present their own UI and are exempt from the 5-minute cap. ([Chrome for Developers][4], [Chrome for Developers][1])
* **Offscreen documents**: for DOM-heavy OAuth (PKCE, iframe dances) spin up a hidden doc via `chrome.offscreen.createDocument({reasons:['IFRAME_SCRIPTING'], justification:'OAuth'})`, then postMessage the result to the worker. Works since Chrome 109. ([Chrome for Developers][5])
* **Fail-safe heartbeat**: if you *must* detect expired tokens with no UI open, create an alarm every 0.5 min; if the alarm event can renew silently, do it, otherwise trigger a notification that lets the user re-authenticate. Needs `"alarms"` permission. ([Chrome for Developers][3])
* **Rule of thumb**: never launch an interactive auth flow on startup—Chrome may kill you mid-prompt, and users see a permission dialog with zero context. ([Chrome for Developers][4])

---

### 4.  Migration & policy landmines

* **MV2 sunset**: Stable Chrome disables MV2 extensions by default; by **31 Mar 2025** users lose the toggle to re-enable them. ([Chrome for Developers][6])
* **Remote code**: MV3 forbids executing JS fetched at runtime; bundle or use `dynamic import()` from web-accessible resources only if absolutely required. ([Chrome for Developers][7])
* **DeclarativeNetRequest**: dynamic rule quota jumped to 30 k “safe” rules (Chrome 121) and static rulesets limit raised to 50 enabled. ([Chrome for Developers][8])
* **Promise-first APIs**: as of Chrome 122 essentially every async method supports `await`, callbacks still work for back-compat. ([Chrome for Developers][9])
* **Alarms granularity**: min period now 30 s (Chrome 120); earlier Chrome will reject `periodInMinutes < 1`. Consider `minimum_chrome_version` if you rely on that. ([Chrome for Developers][3])

---

### 5.  Debugging fieldguide

* **chrome://extensions → “Service worker” → Inspect**: live DevTools, reload button, console preserved across restarts.
* **chrome://serviceworker-internals**: see last start, errors, registration IDs.
* **`chrome.runtime.getContext()`** in console tells you if you’re inside worker, popup, content-script, etc.
* **Performance panel** in DevTools shows WebSocket frames and worker tasks (Chrome 127 improvements). ([Chrome for Developers][10])
* **Puppeteer sample**: Google provides a script to test worker termination; handy for CI. ([Chrome for Developers][9])

---

### 6.  Patterns that age well

* **Event-driven over polling**: rely on push/FCM, websocket, or declarative rules rather than setInterval.
* **Chunk long work**: if you parse 20 MB of CSV, slice it into micro-tasks with `await new Promise(r=>setTimeout(r,0))` to avoid the 5-minute single-event limit.
* **Side-panel & popup coexistence**: since you already use the Side Panel API, remember its pages are **documents**—UI scripts run there, business logic belongs in the worker.
* **WebSocket “ping”**: sending a tiny frame every \~20 s keeps both the socket and the worker alive without violating power guidelines.
* **Persist before sleep**: write any pending outbound queue or auth refresh token to storage inside the same event that mutates it.

---

### 7.  Where your project stands & quick wins

* Your manifest only lists `"storage"` permission. If you adopt alarms or Identity, add `"alarms"` and `"identity"` (and possibly `"offscreen"`).
* Heartbeat interval in *background.js* is 15 s—good for UI updates, but that alone already resets the idle timer; no extra keep-alive hack is needed.
* You’re shipping ES-modules (`type:module`) and bundling with esbuild—fine. Make sure every event listener in the top level of *background.js* is *not* behind an `await` so messages sent during cold-start aren’t dropped.
* The proxy server for localhost dev correctly mirrors the `PltfKey` header; for production you can scrap it and rely on `host_permissions` plus `fetch` directly inside the worker—cross-origin fetches are legal in MV3 if the domain matches `host_permissions`.

---

### 8.  Rapid-fire “did you know?”

* WebGPU and OffscreenCanvas now work in extension workers (Chrome 124+).
* `action.openPopup()` is stable (Chrome 127) if you want a classic popup callable from code. ([Chrome for Developers][2])
* Native messaging and FCM ports totally cancel the idle timer—good for enterprise integrations.
* Alarms still fire while the device is asleep (Chrome 123); missed alarms coalesce to one on wake. ([Chrome for Developers][9])
* `sidePanel` pages can send `chrome.runtime.sendMessage` directly; the first call will wake the worker even if the panel was opened while it was asleep.
* DevTools “Pause on exceptions” in the worker finally respects async stack traces (Chrome 126).

---

### 9.  Mental checklist before shipping

1. Permissions: keep list minimal; many APIs like `tabs.*` work with *host\_permissions* only.
2. Manifest hygiene: no `"scripts"` key under `"background"`; specify `"minimum_chrome_version": "120"` if you rely on 30 s alarms.
3. Storage vs globals: everything the UI will need after a reload goes to `chrome.storage` or IndexedDB.
4. Login path: always triggered by user gesture, uses Identity or Offscreen doc where DOM is required.
5. Feature flags: detect API availability (`chrome.offscreen` in `chrome`) before calling.
6. Policy compliance: no remote code eval, no violation of content policies (e.g., crypto-mining).

---

### TL;DR

“Service-worker (inactive)” is Chrome politely napping. Architect your extension so every significant action—login, network heartbeat, WebSocket traffic, alarm, or UI click—counts as an event that can restart where it left off. Add the new APIs (alarms 0.5 min, offscreen docs, promise-based calls) as needed, and you’ll sail through 2025’s MV2 shutdown without surprises. Happy hacking! 🚀

[1]: https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle "The extension service worker lifecycle  |  Chrome Extensions  |  Chrome for Developers"
[2]: https://developer.chrome.com/docs/extensions/whats-new?utm_source=chatgpt.com "What's new in Chrome extensions"
[3]: https://developer.chrome.com/docs/extensions/reference/api/alarms "chrome.alarms  |  API  |  Chrome for Developers"
[4]: https://developer.chrome.com/docs/extensions/reference/api/identity "chrome.identity  |  API  |  Chrome for Developers"
[5]: https://developer.chrome.com/blog/Offscreen-Documents-in-Manifest-v3 "Offscreen Documents in Manifest V3  |  Blog  |  Chrome for Developers"
[6]: https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline?utm_source=chatgpt.com "Manifest V2 support timeline | Chrome Extensions"
[7]: https://developer.chrome.com/blog/extension-news-january-2024?utm_source=chatgpt.com "What's happening in Chrome Extensions? | Blog"
[8]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest?utm_source=chatgpt.com "chrome.declarativeNetRequest | API - Chrome for Developers"
[9]: https://developer.chrome.com/docs/extensions/whats-new "What's new in Chrome extensions  |  Chrome Extensions  |  Chrome for Developers"
[10]: https://developer.chrome.com/blog/new-in-devtools-77?utm_source=chatgpt.com "What's New In DevTools (Chrome 77) | Blog"
