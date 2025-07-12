# TradersLaunch Chrome Extension - Context

## Project Overview
We are a prop trading firm partnered with Volumetrica. This Chrome extension allows our individual traders to connect to Volumetrica's order system under our firm's master account.

## Architecture
- **Master Account**: TradersLaunch has an overlaying account with Volumetrica
- **Individual Users**: Each prop firm trader has their own login credentials
- **Trading Stack**: FUTURES (not crypto)
- **Environment**: Production (with staging for testing)

## Current Goal
Test if a user can successfully authenticate and connect to Volumetrica's futures trading system.

## Authentication Flow
1. User enters credentials in Chrome extension popup
2. Extension calls Volumetrica's auth endpoint with:
   - User's login/password
   - Our firm's PLT_KEY (platform key)
3. Receive trading token and WebSocket endpoint
4. Connect to WebSocket for real-time trading

## Key API Details
- **Auth Endpoint**: `https://authdxfeed.volumetricatrading.com/api/v2/auth/token`
- **Header**: `PltfKey: <PLT_KEY_PROD or PLT_KEY_STAGING>`
- **Body**: `{ login, password, version: 3, environment: 0|1, connectOnlyTrading: true }`
- **Response**: Contains `tradingWssEndpoint` and `tradingWssToken`

## Test Credentials
- Username: `quickstepshoes@gmail.com`
- Password: `mHeeegW32!#`

## Platform Keys
- Production: `URAp7b9wbmUCr0J7IieMaUoIe60ixtgchejOWjFJeQi7jrAlSfQNuyaDebgloot5`
- Staging: `OZMcinvrYlv!ZYgCIuIrIH!kbWNp6yV0YN5tW7@XcQ#EbG@YsRv82`