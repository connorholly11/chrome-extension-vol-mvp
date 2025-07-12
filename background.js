// Background service worker for WebSocket and API management
import { encodeMessage, decodeMessage } from './proto-wrapper.js';
import { getEnv } from './config.js';

// Configuration
const IS_STAGING = false; // prod => environment = 0
const USE_PROXY = false;  // Direct calls work - no CORS issues!

// Get environment configuration
const CURRENT = getEnv('FUTURES', IS_STAGING ? 'staging' : 'prod');
const API_BASE_URL = USE_PROXY ? 'http://localhost:3001' : CURRENT.REST;
const API_KEY = CURRENT.API_KEY;

// Log configuration for debugging
console.log('=== EXTENSION CONFIGURATION ===');
console.log('Environment:', IS_STAGING ? 'STAGING' : 'PRODUCTION');
console.log('Stack: FUTURES');
console.log('Using proxy:', USE_PROXY);
console.log('API Base URL:', API_BASE_URL);
console.log('API Key:', API_KEY.substring(0, 20) + '...');
console.log('REST Host:', CURRENT.REST);
console.log('Platform ID:', CURRENT.PLATFORM_ID);
console.log('==============================');

// WebSocket state
let ws = null;
let wsEndpoint = null;
let wsToken = null;
let isConnected = false;
let pingInterval = null;
let accountNo = null;
let contractCache = new Map(); // symbol -> contractId

// Account state
let accountInfo = {
  accountNo: null,
  balance: 0,
  positions: new Map(), // contractId -> position data
  orders: new Map(), // orderId -> order data
  pnl: 0
};

// Message handlers from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  handleMessage(request, sendResponse);
  return true; // Keep the message channel open for async response
});

async function handleMessage(request, sendResponse) {
  switch (request.type) {
    case 'connect':
      await handleConnect(request.username, request.password, sendResponse);
      break;
      
    case 'getStatus':
      sendResponse({
        connected: isConnected,
        accountInfo: getAccountSummary()
      });
      break;
      
    case 'sendOrder':
      await handleSendOrder(request.symbol, request.quantity, request.side, sendResponse);
      break;
      
    case 'disconnect':
      disconnect();
      sendResponse({ success: true });
      break;
      
    default:
      sendResponse({ success: false, error: 'Unknown message type' });
  }
}

async function handleConnect(username, password, sendResponse) {
  try {
    // Step 1: Generate trading token
    console.log('\n=== AUTHENTICATION ATTEMPT ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Username:', username);
    console.log('Password:', password.substring(0, 3) + '*'.repeat(password.length - 3));
    console.log('Environment:', IS_STAGING ? 'STAGING' : 'PRODUCTION');
    
    const url = `${API_BASE_URL}/api/v2/auth/token`;
    console.log('Full URL:', url);
    console.log('API Key being used:', API_KEY.substring(0, 20) + '...');
    console.log('Headers:', {
      'Content-Type': 'application/json',
      'PltfKey': API_KEY.substring(0, 20) + '...'
    });
    
    const requestBody = {
      login: username,
      password: password,
      version: 3,
      platform: 0,  // 0 = VOLUMETRICA_TRADING according to API docs
      environment: IS_STAGING ? 1 : 0,  // 0 = prod, 1 = staging
      connectOnlyTrading: true  // Required for futures trading
    };
    console.log('Request body:', JSON.stringify(requestBody, null, 2));
    console.log('\n=== SENDING REQUEST ===');
    console.log('About to fetch:', url);
    console.log('If proxy is running, you should see logs there NOW...');
    
    const tokenResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'PltfKey': API_KEY
      },
      body: JSON.stringify(requestBody)
    });
    console.log('\n=== RESPONSE RECEIVED ===');
    console.log('Status:', tokenResponse.status);
    console.log('Status Text:', tokenResponse.statusText);
    console.log('Headers:', Object.fromEntries(tokenResponse.headers.entries()));
    
    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Auth failed. Status:', tokenResponse.status, 'Response:', errorText);
      throw new Error(`Auth failed: ${tokenResponse.status} - ${errorText}`);
    }
    
    // First check if response is JSON
    const contentType = tokenResponse.headers.get('content-type');
    console.log('\n=== PARSING RESPONSE ===');
    console.log('Content-Type:', contentType);
    
    const responseText = await tokenResponse.text();
    console.log('Response length:', responseText.length, 'chars');
    console.log('First 500 chars:', responseText.substring(0, 500));
    
    let tokenData;
    try {
      tokenData = JSON.parse(responseText);
    } catch (e) {
      console.error('Response is not valid JSON. Got HTML or other format.');
      throw new Error('Invalid response format from API - expected JSON but got: ' + responseText.substring(0, 100));
    }
    
    console.log('\n=== TOKEN RESPONSE DATA ===');
    console.log('Full response:', JSON.stringify(tokenData, null, 2));
    console.log('Token:', tokenData.token ? tokenData.token.substring(0, 30) + '...' : 'NOT FOUND');
    console.log('Trading URI:', tokenData.tradingUri || tokenData.data?.tradingWssEndpoint || 'NOT FOUND');
    
    // Check for the response format we just saw in testing
    if (tokenData.success && tokenData.data) {
      if (tokenData.data.tradingWssEndpoint && tokenData.data.tradingWssToken) {
        wsEndpoint = tokenData.data.tradingWssEndpoint;
        wsToken = tokenData.data.tradingWssToken;
        console.log('Found WebSocket endpoint in data object');
      } else {
        console.error('Missing WebSocket fields in data:', tokenData.data);
        throw new Error('Invalid auth response - missing tradingWssEndpoint or tradingWssToken');
      }
    }
    // Fallback to direct fields
    else if (tokenData.token && tokenData.tradingUri) {
      wsEndpoint = tokenData.tradingUri;
      wsToken = tokenData.token;
      console.log('Found WebSocket endpoint in root object');
    } 
    else {
      console.error('Invalid auth response structure:', tokenData);
      throw new Error('Invalid auth response structure');
    }
    
    // Save to storage
    await chrome.storage.local.set({ wsEndpoint, wsToken });
    
    // Step 2: Connect WebSocket
    await connectWebSocket();
    
    sendResponse({ success: true });
  } catch (error) {
    console.error('Connection error:', error);
    sendResponse({ success: false, error: error.message });
  }
}

async function connectWebSocket() {
  return new Promise((resolve, reject) => {
    console.log('Connecting to WebSocket:', wsEndpoint);
    ws = new WebSocket(wsEndpoint);
    ws.binaryType = 'arraybuffer';
    
    ws.onopen = async () => {
      console.log('WebSocket connected');
      
      // Send login message
      const loginMsg = {
        LoginReq: {
          Token: wsToken,
          AccountSubscriptionMode: 3 // ExistingAndNew
        }
      };
      
      console.log('Sending login message with token:', wsToken);
      await sendMessage(loginMsg);
    };
    
    ws.onmessage = async (event) => {
      try {
        console.log('\n=== RAW MESSAGE RECEIVED ===');
        console.log('Data size:', event.data.byteLength, 'bytes');
        console.log('Timestamp:', new Date().toISOString());
        
        const message = await decodeMessage(event.data);
        await handleServerMessage(message);
      } catch (error) {
        console.error('\n=== MESSAGE DECODE ERROR ===');
        console.error('Error:', error.message);
        console.error('Stack:', error.stack);
        console.error('==============================\n');
      }
    };
    
    ws.onerror = (error) => {
      console.error('\n=== WEBSOCKET ERROR ===');
      console.error('Error:', error);
      console.error('Type:', error.type);
      console.error('Timestamp:', new Date().toISOString());
      console.error('==============================\n');
      reject(error);
    };
    
    ws.onclose = (event) => {
      console.log('\n=== WEBSOCKET CLOSED ===');
      console.log('Code:', event.code);
      console.log('Reason:', event.reason || 'No reason provided');
      console.log('Clean:', event.wasClean);
      console.log('Timestamp:', new Date().toISOString());
      console.log('==============================\n');
      disconnect();
    };
    
    // Set up timeout for connection
    setTimeout(() => {
      if (!isConnected) {
        console.error('\n=== CONNECTION TIMEOUT ===');
        console.error('WebSocket failed to connect within 10 seconds');
        console.error('==============================\n');
        ws.close();
        reject(new Error('Connection timeout'));
      }
    }, 10000);
  });
}

async function handleServerMessage(message) {
  console.log('\n=== PROCESSING SERVER MESSAGE ===');
  console.log('Message type:', Object.keys(message)[0]);
  console.log('Full message:', JSON.stringify(message, null, 2));
  
  // Handle login response
  if (message.LoginMsg) {
    if (message.LoginMsg.Success) {
      console.log('Login successful');
      isConnected = true;
      
      // Start ping interval
      startPingInterval();
      
      // Request account info
      await sendMessage({
        InfoReq: {
          Mode: [1, 2] // Account + OrdAndPos
        }
      });
    } else {
      console.error('Login failed:', message.LoginMsg.Reason);
      ws.close();
    }
  }
  
  // Handle pong
  if (message.Pong) {
    console.log('Received pong');
  }
  
  // Handle account info
  if (message.InfoMsg) {
    if (message.InfoMsg.AccountHeaders && message.InfoMsg.AccountHeaders.length > 0) {
      const account = message.InfoMsg.AccountHeaders[0];
      accountNo = account.AccountNumber;
      accountInfo.accountNo = accountNo;
      console.log('Account number:', accountNo);
    }
    
    // Process initial orders/positions snapshot
    if (message.InfoMsg.OrderList) {
      for (const order of message.InfoMsg.OrderList) {
        processOrderUpdate(order);
      }
    }
  }
  
  // Handle balance updates
  if (message.BalanceInfo) {
    for (const balance of message.BalanceInfo) {
      if (balance.AccNumber === accountNo) {
        accountInfo.balance = balance.CurrentBalance || 0;
        updatePopup();
      }
    }
  }
  
  // Handle order updates
  if (message.OrderInfo) {
    for (const order of message.OrderInfo) {
      processOrderUpdate(order);
    }
  }
  
  // Handle position updates
  if (message.PositionInfo) {
    for (const position of message.PositionInfo) {
      processPositionUpdate(position);
    }
  }
  
  // Handle contract response
  if (message.ContractMsg) {
    if (message.ContractMsg.ContractId && message.ContractMsg.FeedSymbol) {
      contractCache.set(message.ContractMsg.FeedSymbol, message.ContractMsg.ContractId);
    }
  }
  
  // Handle logged off
  if (message.LoggedOff) {
    console.log('Logged off:', message.LoggedOff.Reason);
    disconnect();
  }
}

function processOrderUpdate(order) {
  if (order.AccNumber !== accountNo) return;
  
  accountInfo.orders.set(order.OrgServerId, order);
  updatePopup();
}

function processPositionUpdate(position) {
  if (position.AccNumber !== accountNo) return;
  
  accountInfo.positions.set(position.ContractId, position);
  
  // Calculate total P&L
  let totalPnl = 0;
  for (const pos of accountInfo.positions.values()) {
    totalPnl += pos.RealizedPl || 0;
    totalPnl += pos.UnrealizedPl || 0;
  }
  accountInfo.pnl = totalPnl;
  
  updatePopup();
}

async function handleSendOrder(symbol, quantity, side, sendResponse) {
  try {
    if (!isConnected || !accountNo) {
      throw new Error('Not connected');
    }
    
    // Get contract ID for symbol
    let contractId = contractCache.get(symbol);
    
    if (!contractId) {
      // Request contract info
      await sendMessage({
        ContractReq: {
          FeedSymbol: symbol,
          RequestId: Date.now()
        }
      });
      
      // Wait a bit for response
      await new Promise(resolve => setTimeout(resolve, 1000));
      contractId = contractCache.get(symbol);
      
      if (!contractId) {
        throw new Error('Unknown symbol');
      }
    }
    
    // Send order
    const orderQty = side === 'SELL' ? -quantity : quantity;
    
    // Create order insert message
    const orderInsert = {
      ContractId: contractId,
      Quantity: orderQty,
      OrderType: 0, // Market
      AccNumber: accountNo,
      SeqClientId: Date.now() % 100000,
      Source: 1 // Manual
    };
    
    await sendMessage({
      Order: [orderInsert]
    });
    
    sendResponse({ success: true });
  } catch (error) {
    console.error('Order error:', error);
    sendResponse({ success: false, error: error.message });
  }
}

async function sendMessage(payload) {
  if (!ws || ws.readyState !== WebSocket.OPEN) {
    throw new Error('WebSocket not connected');
  }
  
  const message = {
    ClientRequestMsg: payload
  };
  
  const encoded = await encodeMessage(message);
  ws.send(encoded);
}

function startPingInterval() {
  // Send ping every 45 seconds
  pingInterval = setInterval(async () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      await sendMessage({
        Ping: {
          Connected: true,
          AckValue: Date.now()
        }
      });
    }
  }, 45000);
}


function getAccountSummary() {
  // Get first position quantity as main position
  let mainPosition = 0;
  if (accountInfo.positions.size > 0) {
    const firstPos = accountInfo.positions.values().next().value;
    mainPosition = firstPos.NetQuantity || 0;
  }
  
  return {
    accountNo: accountInfo.accountNo,
    balance: accountInfo.balance,
    position: mainPosition,
    pnl: accountInfo.pnl
  };
}

function updatePopup() {
  chrome.runtime.sendMessage({
    type: 'accountUpdate',
    data: getAccountSummary()
  }).catch(() => {
    // Popup might not be open
  });
}


function disconnect() {
  // Close WebSocket
  if (ws) {
    ws.close();
    ws = null;
  }
  
  // Clear ping interval
  if (pingInterval) {
    clearInterval(pingInterval);
    pingInterval = null;
  }
  
  // Reset state
  isConnected = false;
  wsEndpoint = null;
  wsToken = null;
  accountNo = null;
  contractCache.clear();
  
  // Reset account info
  accountInfo = {
    accountNo: null,
    balance: 0,
    positions: new Map(),
    orders: new Map(),
    pnl: 0
  };
  
  // Clear storage
  chrome.storage.local.remove(['wsEndpoint', 'wsToken']);
  
  // Notify popup
  chrome.runtime.sendMessage({ type: 'disconnected' }).catch(() => {});
}

// Try to restore connection on startup
chrome.storage.local.get(['wsEndpoint', 'wsToken'], async (result) => {
  if (result.wsEndpoint && result.wsToken) {
    wsEndpoint = result.wsEndpoint;
    wsToken = result.wsToken;
    
    try {
      await connectWebSocket();
    } catch (error) {
      console.error('Auto-reconnect failed:', error);
    }
  }
});