// Clean background service worker for Traders Launch Trading Extension
console.log('=== BACKGROUND SERVICE WORKER STARTING ===');

import { ProtoMinimal } from './proto-minimal.js';

// Configuration
const API_URL = 'https://authdxfeed.volumetricatrading.com/api/v2/auth/token';
const PLT_KEY = 'URAp7b9wbmUCr0J7IieMaUoIe60ixtgchejOWjFJeQi7jrAlSfQNuyaDebgloot5';

// Contract ID mapping (will be stored in chrome.storage)
const DEFAULT_CONTRACTS = {
  'ES': 12345,   // E-mini S&P 500 (TODO: Get real ID)
  'NQ': 12346,   // E-mini NASDAQ (TODO: Get real ID)
  'MNQ': 589106,  // Micro E-mini NASDAQ (from position data)
  'YM': 12347,   // E-mini Dow (TODO: Get real ID)
  'RTY': 12348   // E-mini Russell (TODO: Get real ID)
};

// State
let wsEndpoint = null;
let wsToken = null;
let ws = null;
let isConnected = false;
let heartbeatInterval = null;
let balanceLogged = false;
let positionUpdateCount = 0;
let orderUpdateCount = 0;

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
        accountInfo: currentAccountNo ? { accountNo: currentAccountNo } : null
      });
      break;
      
    case 'disconnect':
      disconnect();
      sendResponse({ success: true });
      break;
      
    case 'placeOrder':
      // Handle order placement from UI
      // Use account from request or default
      const accountNo = request.accountNo || currentAccountNo;
      handlePlaceOrder(request.order, accountNo)
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
let accountNumbers = []; // Store all account numbers
let accountMapping = {}; // Map internal account numbers to external IDs (e.g., 3316 -> "TDL01658")

async function handlePlaceOrder(order, accountNo) {
  console.log('Placing order:', order, 'on account:', accountNo);
  
  if (!isConnected || !ws) {
    console.error('Not connected to trading platform', { isConnected, ws: !!ws });
    throw new Error('Not connected to trading platform');
  }
  
  // Get contract ID for symbol
  console.log('Getting contract ID for symbol:', order.symbol);
  const contracts = await chrome.storage.local.get('contracts');
  console.log('Available contracts:', contracts.contracts);
  const contractId = contracts.contracts?.[order.symbol];
  
  if (!contractId) {
    console.error(`No contract ID found for ${order.symbol}. Available:`, Object.keys(contracts.contracts || {}));
    throw new Error(`No contract ID found for ${order.symbol}`);
  }
  console.log('Found contract ID:', contractId);
  
  try {
    // Log the account number being used
    console.log(`Using account number: ${accountNo} for order placement`);
    console.log(`Available account mapping:`, accountMapping);
    
    const orderMsg = {
      Order: [{
        OrderInsert: {
          ContractId: contractId,
          SeqClientId: nextSeqId++,
          Quantity: order.side === 'sell' ? -Math.abs(order.quantity) : Math.abs(order.quantity),
          Price: order.price || 0,
          OrderType: order.orderType === 'limit' ? 1 : 0, // 0=Market, 1=Limit
          AccNumber: accountNo || currentAccountNo || 0, // Use the numeric account ID
          Source: 0 // Manual
        }
      }]
    };
    
    console.log('Encoding order message...');
    const buffer = ProtoMinimal.encodeClientRequest(orderMsg);
    console.log('Sending order to WebSocket...');
    ws.send(buffer);
    
    console.log('Order sent to Volumetrica:', JSON.stringify(orderMsg, null, 2));
    
    return {
      success: true,
      orderId: 'ORD-' + (nextSeqId - 1),
      message: `${String(order.side).toUpperCase()} ${order.quantity} ${order.symbol} @ ${String(order.orderType).toUpperCase()}`
    };
  } catch (err) {
    console.error('Order placement error:', err);
    console.error('Error stack:', err.stack);
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
      try {
        const msg = ProtoMinimal.decodeServerResponse(event.data);
        
        // Skip logging for balance updates and trade info spam
        const skipLogging = (msg.messageType === 'BalanceInfo' && balanceLogged) || 
                           msg.messageType === 'TradeInfo' ||
                           (msg.messageType === 'PositionInfo' && positionUpdateCount++ > 5) ||
                           (msg.messageType === 'OrderInfo' && orderUpdateCount++ > 5);
                           
        if (skipLogging) {
          // Still process the message, just don't log it
        } else {
          console.log('WebSocket message received, size:', event.data.byteLength);
          
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
        }
        
        if (msg.LoginResp) {
          console.log('Login successful!');
          isConnected = true;
          startHeartbeat();
          
          // Request initial account data
          requestInitialData();
          
          resolve();
        } else if (msg.InfoResp) {
          console.log('Account/Position data response received, length:', msg.InfoResp.length);
          
          // Log large responses differently
          if (msg.InfoResp.length > 10000) {
            console.log('Large InfoResp received, likely contains historical data');
          }
          
          // Check if we have account data
          if (msg.InfoResp.accounts && msg.InfoResp.accounts.length > 0) {
            console.log('Accounts found in InfoResp:', msg.InfoResp.accounts);
            
            // Build account mapping
            msg.InfoResp.accounts.forEach(acc => {
              if (acc.accountNumber && acc.accountHeader) {
                accountMapping[acc.accountNumber] = acc.accountHeader;
                console.log(`Account mapping: ${acc.accountNumber} -> ${acc.accountHeader}`);
              }
            });
            
            // Store accounts for UI
            const accounts = msg.InfoResp.accounts.map(acc => ({
              id: acc.accountNumber,
              name: acc.accountHeader || `Account ${acc.accountNumber}`,
              balance: 0, // Will be updated from BalanceInfo
              platform: 'Volumetrica',
              accountNo: acc.accountNumber,
              externalId: acc.accountHeader, // Store the external ID
              isEnabled: acc.isEnabled,
              isTradingEnabled: acc.isTradingEnabled
            }));
            
            chrome.storage.local.set({ volumetricaAccounts: accounts });
          }
          
          // Check if we have position data
          if (msg.InfoResp.positions && msg.InfoResp.positions.length > 0) {
            console.log('Positions found:', msg.InfoResp.positions);
            
            // Transform position data to UI format
            const positions = msg.InfoResp.positions.map(pos => {
              console.log('Raw position data:', pos);
              
              // The Micro NASDAQ symbol needs to be simplified for UI
              let displaySymbol = pos.symbol || 'Unknown';
              if (displaySymbol.includes('MNQU')) {
                displaySymbol = 'MNQ'; // Micro NASDAQ
              }
              
              return {
                symbol: displaySymbol,
                contractId: pos.contractId,
                quantity: pos.accountNo || 1, // accountNo field seems to contain quantity
                side: pos.quantity > 0 ? 'LONG' : 'SHORT', // quantity field has the side
                accountNo: pos.side || currentAccountNo, // side field has account number
                avgPrice: pos.value1 || 0, // value1 seems to be the price
                currentPrice: pos.value1 || 0, // For now, use same price
                pnl: 0, // Calculate later
                pnlPercent: 0
              };
            });
            
            // Store positions for UI
            chrome.storage.local.set({ volumetricaPositions: positions });
            console.log('Parsed positions:', positions);
          }
          
          // Check if we have order data
          if (msg.InfoResp.orders && msg.InfoResp.orders.length > 0) {
            console.log(`Found ${msg.InfoResp.orders.length} orders in InfoResp`);
            
            // Log first few orders to understand status codes
            console.log('First 5 orders with status:', msg.InfoResp.orders.slice(0, 5).map(o => ({
              status: o.status,
              price: o.price,
              quantity: o.quantity,
              side: o.side,
              orderId: o.orderId
            })));
            
            // Log a few more orders to see status pattern
            console.log('Orders 5-10 status:', msg.InfoResp.orders.slice(5, 10).map(o => o.status));
            
            // Look for orders with futures prices
            const futuresOrders = msg.InfoResp.orders.filter(o => o.price > 10000);
            console.log(`Found ${futuresOrders.length} orders with price > 10000 (futures)`);
            if (futuresOrders.length > 0) {
              console.log('Futures orders:', futuresOrders);
              // Store these as the real orders
              chrome.storage.local.set({ volumetricaOrders: futuresOrders });
            }
            
            // Also log order count by status
            const statusCounts = {};
            msg.InfoResp.orders.forEach(o => {
              statusCounts[o.status] = (statusCounts[o.status] || 0) + 1;
            });
            console.log('Order count by status:', statusCounts);
            
            // Filter for active orders only (not filled/cancelled)
            // Status codes seen: 2, 4, 6, 8, 10, 12, 14...
            // Let's include status 10 which might be limit orders
            const activeOrders = msg.InfoResp.orders.filter(o => {
              return o.status && o.status <= 10; // Changed from < 10 to <= 10
            });
            
            if (activeOrders.length > 0) {
              console.log('Active orders:', activeOrders);
              
              // Also check what statuses 12, 14, etc mean
              const status12Orders = msg.InfoResp.orders.filter(o => o.status === 12 || o.status === 14);
              if (status12Orders.length > 0) {
                console.log('Status 12/14 orders (might be limit orders):', status12Orders.slice(0, 3));
              }
              chrome.storage.local.set({ volumetricaOrders: activeOrders });
            } else {
              console.log('No active orders found - check status filter!');
              // Store all orders for now so UI can display them
              chrome.storage.local.set({ volumetricaOrders: msg.InfoResp.orders.slice(0, 10) });
            }
          }
        } else if (msg.BalanceInfo) {
          // Only log first balance update to reduce spam
          if (!balanceLogged) {
            console.log('Balance update received:', msg.BalanceInfo);
            msg.BalanceInfo.forEach((bal, i) => {
              console.log(`Account ${i}: accountNo=${bal.accountNo}, balance=${bal.balance}`);
            });
            balanceLogged = true;
          }
          
          // Transform Volumetrica balance data to UI format
          const accounts = msg.BalanceInfo.map((bal, index) => ({
            id: `vol-${bal.accountNo}`,
            name: accountMapping[bal.accountNo] || `Account ${bal.accountNo}`, // Use external ID if available
            balance: bal.balance,
            isLive: true,
            platform: 'Traders Launch',
            accountNo: bal.accountNo, // Keep original account number for order placement
            externalId: accountMapping[bal.accountNo] // Store the external ID if available
          }));
          
          // Store account numbers for order placement
          accountNumbers = msg.BalanceInfo.map(bal => bal.accountNo);
          if (!currentAccountNo && accountNumbers.length > 0) {
            currentAccountNo = accountNumbers[0]; // Default to first account
            console.log('Set default account for orders:', currentAccountNo);
          }
          
          // Store accounts for later retrieval
          chrome.storage.local.set({ volumetricaAccounts: accounts });
        } else if (msg.OrderInfo) {
          console.log('🎯 Order update received:', msg.OrderInfo);
          console.log('Raw order data:', JSON.stringify(msg.OrderInfo, null, 2));
          
          // Store orders for UI
          if (msg.OrderInfo && msg.OrderInfo.length > 0) {
            // Parse order status and add timestamp
            const ordersWithTimestamp = msg.OrderInfo.map(order => {
              const state = order.OrderState === 0 ? 'Submitted' : order.OrderState === 1 ? 'Canceled' : order.OrderState === 2 ? 'Error' : 'Unknown';
              console.log(`Order ${order.OrgClientId}: State=${state}, Pending=${order.PendingQty}, Filled=${order.FilledQty}, AccNumber=${order.AccNumber}`);
              
              if (order.OrderState === 2 && order.InfoText) {
                console.error('❌ Order Error:', order.InfoText);
                console.error('   Account used:', order.AccNumber || currentAccountNo);
                console.error('   Available mappings:', accountMapping);
              }
              
              return {
                ...order,
                timestamp: new Date(),
                status: state
              };
            });
            
            chrome.storage.local.set({ volumetricaOrders: ordersWithTimestamp });
          }
        } else if (msg.OrderInfoMsg) {
          console.log('🎯 OrderInfoMsg received:', msg.OrderInfoMsg);
        } else if (msg.PositionInfo) {
          console.log('Position update received:', msg.PositionInfo);
          console.log('Raw position data:', JSON.stringify(msg.PositionInfo, null, 2));
          // TODO: Parse and forward to UI
        } else if (msg.PositionUpdMsg) {
          console.log('Position update message received:', msg.PositionUpdMsg);
          // TODO: Parse and forward to UI
        } else if (msg.Pong) {
          console.log('Pong received');
        } else if (msg.TradeInfo) {
          console.log('Trade/Fill info received:', msg.TradeInfo);
          // This might be market data or fills, not our pending orders
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
        SubscriptionEnabled: true // Get live updates
      }
    };
    
    const buffer = ProtoMinimal.encodeClientRequest(accountMsg);
    ws.send(buffer);
    console.log('Account request sent');
    
    // Then request positions/orders after a short delay
    setTimeout(() => {
      const posMsg = {
        InfoReq: {
          Modes: [2, 3, 4], // OrdAndPos, Positions, Orders
          RequestId: 2,
          SubscriptionEnabled: true // Get live updates
        }
      };
      
      const posBuffer = ProtoMinimal.encodeClientRequest(posMsg);
      ws.send(posBuffer);
      console.log('Position/Order request sent');
      
      // Also try requesting active orders only
      setTimeout(() => {
        const orderMsg = {
          InfoReq: {
            Modes: [5], // Active orders only
            RequestId: 3,
            SubscriptionEnabled: true
          }
        };
        
        const orderBuffer = ProtoMinimal.encodeClientRequest(orderMsg);
        ws.send(orderBuffer);
        console.log('Active orders request sent (mode 5)');
      }, 500);
      
      // Request just positions to get latest
      setTimeout(() => {
        const posOnlyMsg = {
          InfoReq: {
            Modes: [3], // Just positions
            RequestId: 4,
            SubscriptionEnabled: true
          }
        };
        
        const posOnlyBuffer = ProtoMinimal.encodeClientRequest(posOnlyMsg);
        ws.send(posOnlyBuffer);
        console.log('Position-only request sent (mode 3)');
      }, 1000);
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

// Seed contract IDs on startup
chrome.storage.local.get('contracts', (result) => {
  // Always update to include MNQ if it's missing
  const existingContracts = result.contracts || {};
  if (!existingContracts.MNQ) {
    const updatedContracts = { ...existingContracts, ...DEFAULT_CONTRACTS };
    chrome.storage.local.set({ contracts: updatedContracts });
    console.log('Updated contract IDs, added MNQ');
  }
});

