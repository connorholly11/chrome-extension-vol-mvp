# Volumetrica Trading Chrome Extension MVP

Ultra-lean Chrome extension for trading via Volumetrica API.

## Features
- Chrome Manifest V3 extension
- WebSocket connection with auth flow
- Simple Buy/Sell market order interface
- Real-time balance and position updates
- Protobuf message encoding/decoding

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Build the extension:
```bash
npm run build
```

3. Load in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist/` folder

## Usage

1. Click the extension icon in Chrome toolbar
2. Enter your Traders Launch username and password
3. Click "Connect"
4. Once connected, you can:
   - Enter a symbol (e.g., `/ESZ24.XCME`)
   - Enter quantity
   - Click BUY MKT or SELL MKT to place market orders
5. To switch accounts:
   - Click "Disconnect"
   - Enter different credentials
   - Click "Connect" again

## Important Notes

- **Multi-User Support**: Any user with valid Traders Launch credentials can use this extension
- **API Key**: The extension uses a shared API key to identify itself as a Traders Launch application
- **Credentials**: Each user logs in with their own username/password via the popup
- **Security**: Credentials are temporarily stored locally for auto-reconnection only
- **Symbols**: Use full symbol format like `/ESZ24.XCME`
- **WebSocket**: Maintains persistent connection with 45-second ping interval

## Production Improvements Needed

1. **Proper Protobuf Implementation**: 
   - Currently using a simplified JSON encoding
   - Run `npm run proto` to compile actual .proto files
   - Replace proto.js with the compiled version

2. **Error Handling**: 
   - Add retry logic for failed connections
   - Better error messages for users

3. **Security**:
   - Encrypt stored credentials
   - Add session timeout
   - Validate all inputs

4. **Features**:
   - Add limit orders
   - Add stop orders
   - Multiple account support
   - Order history
   - More detailed position info

## File Structure
```
├── manifest.json       # Chrome extension manifest
├── background.js       # Service worker for WebSocket
├── popup.html         # Trading interface UI
├── popup.js           # Popup script
├── proto-wrapper.js   # Protobuf encoding/decoding
├── proto.js           # Simplified protobuf (replace with compiled version)
├── build.js           # Build script
└── dist/              # Built extension (after npm run build)
```

## Development Notes

- The WebSocket connection is managed in the background service worker
- Account info and positions are tracked in memory
- The extension will attempt to auto-reconnect on startup if credentials are saved