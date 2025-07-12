// Clean background service worker for Volumetrica Trading Extension
console.log('=== BACKGROUND SERVICE WORKER STARTING ===');

// Configuration
const API_URL = 'https://authdxfeed.volumetricatrading.com/api/v2/auth/token';
const PLT_KEY = 'URAp7b9wbmUCr0J7IieMaUoIe60ixtgchejOWjFJeQi7jrAlSfQNuyaDebgloot5';

// State
let wsEndpoint = null;
let wsToken = null;
let ws = null;
let isConnected = false;

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
      
      // For now, just mark as connected without WebSocket
      // TODO: Implement WebSocket connection with protobuf
      isConnected = true;
      
      return { success: true };
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
}

async function handlePlaceOrder(order) {
  console.log('Placing order:', order);
  
  if (!isConnected) {
    throw new Error('Not connected to trading platform');
  }
  
  // TODO: Implement actual order placement via WebSocket
  // For now, just simulate success
  console.log('Order details:', {
    symbol: order.symbol,
    side: order.side,
    quantity: order.quantity,
    type: order.orderType,
    price: order.price
  });
  
  // Simulate order placement delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    success: true,
    orderId: 'SIM-' + Date.now(),
    message: `${order.side.toUpperCase()} ${order.quantity} ${order.symbol} @ MARKET`
  };
}

console.log('Background service worker ready');