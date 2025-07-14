// Clean background service worker for Traders Launch Trading Extension
console.log('=== BACKGROUND SERVICE WORKER STARTING ===');

import { ProtoMinimal } from './proto-minimal.js';

// Configuration
const API_URL = 'https://authdxfeed.volumetricatrading.com/api/v2/auth/token';
const PLT_KEY = 'URAp7b9wbmUCr0J7IieMaUoIe60ixtgchejOWjFJeQi7jrAlSfQNuyaDebgloot5';

// Contract ID mapping (will be stored in chrome.storage)
const DEFAULT_CONTRACTS = {
  'ES': 12345,   // E-mini S&P 500
  'NQ': 12346,   // E-mini NASDAQ
  'YM': 12347,   // E-mini Dow
  'RTY': 12348   // E-mini Russell
};

// State
let wsEndpoint = null;
let wsToken = null;
let ws = null;
let isConnected = false;
let heartbeatInterval = null;

// Message handler
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received:', request.type);
  
  switch (request.type) {
    case 'connect':
      handleConnect(request.username, request.password)
        .then(result => sendResponse(result))
        .catch(error => sendResponse({ success: false, error: error.message }));
      return true; // Keep channel open for async response
      
    case 'getStatus':
      sendResponse({
        connected: isConnected,
        accountInfo: { accountNo: 'TEST123', balance: 0, position: 0, pnl: 0 }
      });
      break;
      
    case 'disconnect':
      disconnect();
      sendResponse({ success: true });
      break;
      
    case 'placeOrder':
      // Handle order placement from TradingView widget
      handlePlaceOrder(request.order)
        .then(result => sendResponse(result))
        .catch(error => sendResponse({ success: false, error: error.message }));
      return true; // Keep channel open for async response
      
    case 'sendOrder':
      // Handle order from standard UI (legacy)
      const order = {
        symbol: request.symbol,
        side: request.side === 'BUY' ? 'buy' : 'sell',
        quantity: request.quantity,
        orderType: 'market'
      };
      handlePlaceOrder(order)
        .then(result => sendResponse(result))
        .catch(error => sendResponse({ success: false, error: error.message }));
      return true; // Keep channel open for async response
      
    default:
      sendResponse({ success: false, error: 'Unknown message type' });
  }
});

async function handleConnect(username, password) {
  try {
    console.log('Authenticating user:', username);
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'PltfKey': PLT_KEY
      },
      body: JSON.stringify({
        login: username,
        password: password,
        version: 3,
        platform: 0,
        environment: 0,
        connectOnlyTrading: true
      })
    });
    
    console.log('Auth response status:', response.status);
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Authentication failed: ${response.status} - ${error}`);
    }
    
    const data = await response.json();
    console.log('Auth successful, got data:', data.success);
    
    if (data.success && data.data) {
      wsEndpoint = data.data.tradingWssEndpoint;
      wsToken = data.data.tradingWssToken;
      
      console.log('Got WebSocket endpoint:', wsEndpoint);
      console.log('Got WebSocket token:', wsToken ? 'Yes' : 'No');
      
      // Store credentials for reconnection
      await chrome.storage.local.set({ wsEndpoint, wsToken });
      
      // Try to connect WebSocket
      try {
        await connectWebSocket(wsEndpoint, wsToken);
        return { success: true };
      } catch (wsError) {
        console.error('WebSocket connection failed:', wsError);
        // Still return success for auth, but note WS failed
        return { success: true, warning: 'Auth successful but WebSocket connection failed' };
      }
    } else {
      throw new Error('Invalid auth response structure');
    }
  } catch (error) {
    console.error('Connect error:', error);
    throw error;
  }
}

function disconnect() {
  console.log('Disconnecting...');
  if (ws) {
    ws.close();
    ws = null;
  }
  isConnected = false;
  wsEndpoint = null;
  wsToken = null;
  stopHeartbeat();
  chrome.runtime.sendMessage({ type: 'disconnected' }).catch(() => {});
}

// Heartbeat functionality
function startHeartbeat() {
  stopHeartbeat(); // Clear any existing interval
  
  // Send ping every 45 seconds to keep connection alive
  heartbeatInterval = setInterval(() => {
    sendHeartbeat();
  }, 45000);
}

function stopHeartbeat() {
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;
  }
}

let nextSeqId = 1;
let currentAccountNo = null;

async function handlePlaceOrder(order) {
  console.log('Placing order:', order);
  
  if (!isConnected || !ws) {
    throw new Error('Not connected to trading platform');
  }
  
  // Get contract ID for symbol
  const contracts = await chrome.storage.local.get('contracts');
  const contractId = contracts.contracts?.[order.symbol];
  
  if (!contractId) {
    throw new Error(`No contract ID found for ${order.symbol}`);
  }
  
  try {
    const orderMsg = {
      Order: [{
        OrderInsert: {
          ContractId: contractId,
          SeqClientId: nextSeqId++,
          Quantity: order.side === 'sell' ? -Math.abs(order.quantity) : Math.abs(order.quantity),
          Price: order.price || 0,
          OrdType: order.orderType === 'limit' ? 1 : 0, // 0=Market, 1=Limit
          AccNumber: currentAccountNo || 0,
          Source: 0 // Manual
        }
      }]
    };
    
    const buffer = ProtoMinimal.encodeClientRequest(orderMsg);
    ws.send(buffer);
    
    console.log('Order sent to Volumetrica:', orderMsg);
    
    return {
      success: true,
      orderId: 'ORD-' + (nextSeqId - 1),
      message: `${order.side.toUpperCase()} ${order.quantity} ${order.symbol} @ ${order.orderType.toUpperCase()}`
    };
  } catch (err) {
    console.error('Order placement error:', err);
    throw err;
  }
}

// Simple WebSocket connection for order management
async function connectWebSocket(endpoint, token) {
  return new Promise((resolve, reject) => {
    console.log('Connecting to Volumetrica WebSocket...');
    
    ws = new WebSocket(endpoint);
    ws.binaryType = 'arraybuffer';
    
    ws.onopen = () => {
      console.log('WebSocket connected!');
      
      // Send login message
      try {
        const loginMsg = {
          LoginReq: {
            Token: token,
            AccountSubscriptionMode: 2 // ExistingAndNew
          }
        };
        
        const buffer = ProtoMinimal.encodeClientRequest(loginMsg);
        ws.send(buffer);
        console.log('Login message sent');
        
        // Wait for login response
        setTimeout(() => {
          if (!isConnected) {
            console.log('No login response, closing connection');
            ws.close();
            reject(new Error('Login timeout'));
          }
        }, 5000);
        
      } catch (err) {
        console.error('Failed to send login:', err);
        reject(err);
      }
    };
    
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      isConnected = false;
      reject(error);
    };
    
    ws.onclose = () => {
      console.log('WebSocket closed');
      isConnected = false;
      ws = null;
    };
    
    ws.onmessage = (event) => {
      console.log('WebSocket message received, size:', event.data.byteLength);
      
      try {
        const msg = ProtoMinimal.decodeServerResponse(event.data);
        
        if (msg.messageType) {
          console.log(`Message type: ${msg.messageType}`, msg);
        } else {
          console.log('Unknown message format:', msg);
          // Log first few bytes for debugging
          const view = new DataView(event.data);
          const bytes = [];
          for (let i = 0; i < Math.min(10, event.data.byteLength); i++) {
            bytes.push(view.getUint8(i).toString(16).padStart(2, '0'));
          }
          console.log('First bytes:', bytes.join(' '));
        }
        
        if (msg.LoginResp) {
          console.log('Login successful!');
          isConnected = true;
          startHeartbeat();
          
          // Request initial account data
          requestInitialData();
          
          resolve();
        } else if (msg.InfoResp) {
          console.log('Account/Position data response received');
          // For now, let's see if we get more messages after this
          // The InfoResp might be followed by actual account data
        } else if (msg.BalanceInfo) {
          console.log('Balance update received:', msg.BalanceInfo);
          
          // Transform Volumetrica balance data to UI format
          const accounts = msg.BalanceInfo.map((bal, index) => ({
            id: `vol-${bal.accountNo}`,
            name: `Account ${bal.accountNo}`,
            balance: bal.balance,
            isLive: true,
            platform: 'Traders Launch',
            accountNo: bal.accountNo // Keep original account number for order placement
          }));
          
          // Forward to UI
          chrome.runtime.sendMessage({
            type: 'accounts:update',
            accounts: accounts
          }).catch(() => {});
          
          // If we have accounts but no selected account, select the first one
          if (accounts.length > 0 && !currentAccountNo) {
            currentAccountNo = accounts[0].accountNo;
          }
        } else if (msg.OrderInfo) {
          console.log('Order update received:', msg.OrderInfo);
          // TODO: Forward to UI
        } else if (msg.PositionInfo) {
          console.log('Position update received:', msg.PositionInfo);
          // TODO: Forward to UI
        } else if (msg.Pong) {
          console.log('Pong received');
        }
      } catch (err) {
        console.error('Failed to decode message:', err);
      }
    };
  });
}


// Request initial account data
function requestInitialData() {
  if (!ws || ws.readyState !== WebSocket.OPEN) return;
  
  console.log('Requesting initial account data...');
  
  try {
    // First, request just accounts (mode 1)
    const accountMsg = {
      InfoReq: {
        Modes: [1], // Just Account first
        RequestId: 1,
        SubscriptionEnabled: true
      }
    };
    
    const buffer = ProtoMinimal.encodeClientRequest(accountMsg);
    ws.send(buffer);
    console.log('Account request sent');
    
    // Then request positions/orders after a short delay
    setTimeout(() => {
      const posMsg = {
        InfoReq: {
          Modes: [2, 3], // OrdAndPos, Positions
          RequestId: 2,
          SubscriptionEnabled: true
        }
      };
      
      const posBuffer = ProtoMinimal.encodeClientRequest(posMsg);
      ws.send(posBuffer);
      console.log('Position/Order request sent');
    }, 1000);
    
  } catch (err) {
    console.error('Failed to request initial data:', err);
  }
}

// Send heartbeat ping
function sendHeartbeat() {
  if (!ws || ws.readyState !== WebSocket.OPEN) return;
  
  try {
    const pingMsg = { Ping: {} };
    const buffer = ProtoMinimal.encodeClientRequest(pingMsg);
    ws.send(buffer);
    console.log('Ping sent');
  } catch (err) {
    console.error('Failed to send ping:', err);
  }
}

console.log('Background service worker ready');

// Set up side panel behavior on install AND on startup
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error('Failed to set panel behavior:', error));
});

// Also set it on startup in case it was cleared
chrome.runtime.onStartup.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error('Failed to set panel behavior:', error));
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  console.log('Extension icon clicked, opening side panel...');
  chrome.sidePanel.open({ tabId: tab.id })
    .catch((error) => console.error('Failed to open side panel:', error));
});

// Seed contract IDs on startup if not already stored
chrome.storage.local.get('contracts', (result) => {
  if (!result.contracts) {
    chrome.storage.local.set({ contracts: DEFAULT_CONTRACTS });
    console.log('Seeded default contract IDs');
  }
});

