// State management
let state = {
  connected: false,
  accountInfo: {
    accountNo: null,
    balance: 0,
    position: 0,
    pnl: 0
  },
  activeTab: 'positions',
  positions: [],
  orders: [],
  fills: [],
  dailyLoss: 0,
  dailyLimit: 5000
};

// Mock data for demo
const mockPositions = [
  { symbol: 'ES', quantity: 5, avgPrice: 5294.75, currentPrice: 5298.25, pnl: 875.00, pnlPercent: 0.66 },
  { symbol: 'NQ', quantity: -2, avgPrice: 18245.50, currentPrice: 18198.75, pnl: 935.00, pnlPercent: 1.28 }
];

const mockOrders = [
  { id: '1', symbol: 'ES', side: 'BUY', quantity: 2, orderType: 'LMT', price: 5290.00, status: 'PENDING' }
];

const mockFills = [
  { id: '1', symbol: 'ES', side: 'BUY', quantity: 5, price: 5294.75, timestamp: new Date(Date.now() - 3600000) }
];

// DOM Elements
const loginView = document.getElementById('loginView');
const tradingView = document.getElementById('tradingView');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const connectBtn = document.getElementById('connectBtn');
const disconnectBtn = document.getElementById('disconnectBtn');

// Trading elements
const symbolInput = document.getElementById('symbolInput');
const quantityInput = document.getElementById('quantityInput');
const orderTypeSelect = document.getElementById('orderTypeSelect');
const priceGroup = document.getElementById('priceGroup');
const priceInput = document.getElementById('priceInput');
const buyBtn = document.getElementById('buyBtn');
const sellBtn = document.getElementById('sellBtn');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');

// Account elements
const accountBalance = document.getElementById('accountBalance');
const accountButton = document.getElementById('accountButton');

// Risk banner elements
const riskBanner = document.getElementById('riskBanner');
const riskRemaining = document.getElementById('riskRemaining');
const riskDetails = document.getElementById('riskDetails');
const riskProgressBar = document.getElementById('riskProgressBar');

// Tab elements
const tabButtons = document.querySelectorAll('.tab-button');
const positionsCount = document.getElementById('positionsCount');
const ordersCount = document.getElementById('ordersCount');
const fillsCount = document.getElementById('fillsCount');
const positionsTab = document.getElementById('positionsTab');
const ordersTab = document.getElementById('ordersTab');
const fillsTab = document.getElementById('fillsTab');

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  // Check connection status on load
  const response = await chrome.runtime.sendMessage({ type: 'getStatus' });
  if (response && response.connected) {
    state.connected = true;
    state.accountInfo = response.accountInfo || state.accountInfo;
    showTradingView();
  }
  
  setupEventListeners();
  setupDragHandle();
  updateUI();
});

// Setup event listeners
function setupEventListeners() {
  // Login form
  loginForm.addEventListener('submit', handleConnect);
  
  // Disconnect button
  disconnectBtn.addEventListener('click', handleDisconnect);
  
  // Quantity controls
  qtyMinus.addEventListener('click', () => {
    const current = parseInt(quantityInput.value) || 1;
    quantityInput.value = Math.max(1, current - 1);
  });
  
  qtyPlus.addEventListener('click', () => {
    const current = parseInt(quantityInput.value) || 1;
    quantityInput.value = current + 1;
  });
  
  // Order type change
  orderTypeSelect.addEventListener('change', (e) => {
    if (e.target.value === 'LMT') {
      priceGroup.classList.remove('hidden');
    } else {
      priceGroup.classList.add('hidden');
    }
  });
  
  // Buy/Sell buttons
  buyBtn.addEventListener('click', () => handleOrder('BUY'));
  sellBtn.addEventListener('click', () => handleOrder('SELL'));
  
  // Tab switching
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');
      switchTab(tab);
    });
  });
  
  // Listen for account updates from background
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'accountUpdate') {
      state.accountInfo = message.data;
      updateAccountDisplay();
      updateRiskBanner();
    } else if (message.type === 'disconnected') {
      state.connected = false;
      showLoginView();
    } else if (message.type === 'networkHeartbeat') {
      // Update connection indicator if needed
      const statusIndicator = document.querySelector('.status-indicator');
      if (statusIndicator) {
        if (message.ok) {
          statusIndicator.classList.add('live');
        } else {
          statusIndicator.classList.remove('live');
        }
      }
    }
  });
}

// Handle connection
async function handleConnect(e) {
  e.preventDefault();
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (!username || !password) {
    showError('Please enter both username and password');
    return;
  }
  
  connectBtn.disabled = true;
  connectBtn.textContent = 'Connecting...';
  loginError.classList.add('hidden');
  
  try {
    const response = await chrome.runtime.sendMessage({
      type: 'connect',
      username,
      password
    });
    
    if (response.success) {
      state.connected = true;
      showTradingView();
      
      // Get initial status
      const statusResponse = await chrome.runtime.sendMessage({ type: 'getStatus' });
      if (statusResponse) {
        state.accountInfo = statusResponse.accountInfo || state.accountInfo;
        updateAccountDisplay();
      }
    } else {
      showError(response.error || 'Connection failed');
    }
  } catch (error) {
    showError('Failed to connect: ' + error.message);
  } finally {
    connectBtn.disabled = false;
    connectBtn.textContent = 'Connect';
  }
}

// Handle disconnect
async function handleDisconnect() {
  try {
    await chrome.runtime.sendMessage({ type: 'disconnect' });
    state.connected = false;
    state.accountInfo = {
      accountNo: null,
      balance: 0,
      position: 0,
      pnl: 0
    };
    showLoginView();
  } catch (error) {
    console.error('Disconnect error:', error);
  }
}

// Handle order submission
async function handleOrder(side) {
  const symbol = symbolInput.value.trim();
  const quantity = parseInt(quantityInput.value) || 1;
  const orderType = orderTypeSelect.value;
  const price = orderType === 'LMT' ? parseFloat(priceInput.value) : null;
  
  if (!symbol) {
    alert('Please enter a symbol');
    return;
  }
  
  if (orderType === 'LMT' && !price) {
    alert('Please enter a limit price');
    return;
  }
  
  const button = side === 'BUY' ? buyBtn : sellBtn;
  button.disabled = true;
  button.textContent = 'Placing...';
  
  try {
    const response = await chrome.runtime.sendMessage({
      type: 'sendOrder',
      symbol,
      quantity,
      side
    });
    
    if (response.success) {
      button.textContent = 'Sent!';
      setTimeout(() => {
        button.textContent = side;
        button.disabled = false;
      }, 2000);
      
      // Add mock order to demonstrate
      const newOrder = {
        id: Date.now().toString(),
        symbol,
        side,
        quantity,
        orderType,
        price,
        status: 'PENDING',
        timestamp: new Date()
      };
      state.orders.push(newOrder);
      updateOrdersDisplay();
    } else {
      alert('Order failed: ' + (response.error || 'Unknown error'));
      button.textContent = side;
      button.disabled = false;
    }
  } catch (error) {
    alert('Order error: ' + error.message);
    button.textContent = side;
    button.disabled = false;
  }
}

// UI Functions
function showLoginView() {
  loginView.style.display = 'block';
  tradingView.style.display = 'none';
}

function showTradingView() {
  loginView.style.display = 'none';
  tradingView.style.display = 'flex';
  updateUI();
}

function showError(message) {
  loginError.textContent = message;
  loginError.classList.remove('hidden');
}

function switchTab(tab) {
  state.activeTab = tab;
  
  // Update tab buttons
  tabButtons.forEach(button => {
    if (button.getAttribute('data-tab') === tab) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  
  // Update tab content
  const tabs = { positions: positionsTab, orders: ordersTab, fills: fillsTab };
  Object.entries(tabs).forEach(([key, element]) => {
    if (key === tab) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });
}

function updateUI() {
  updateAccountDisplay();
  updateRiskBanner();
  updatePositionsDisplay();
  updateOrdersDisplay();
  updateFillsDisplay();
}

function updateAccountDisplay() {
  const balance = state.accountInfo.balance || 0;
  accountBalance.textContent = `$${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
}

function updateRiskBanner() {
  const loss = Math.abs(state.dailyLoss);
  const remaining = state.dailyLimit - loss;
  const percentage = loss / state.dailyLimit;
  
  riskRemaining.textContent = `$${remaining.toLocaleString('en-US', { minimumFractionDigits: 2 })} remaining`;
  riskDetails.textContent = `Loss: $${loss.toLocaleString('en-US', { minimumFractionDigits: 2 })} / $${state.dailyLimit.toLocaleString()}`;
  riskProgressBar.style.width = `${Math.min(percentage * 100, 100)}%`;
  
  // Update banner color based on risk level
  riskBanner.classList.remove('warning', 'danger');
  if (percentage > 0.9) {
    riskBanner.classList.add('danger');
  } else if (percentage > 0.7) {
    riskBanner.classList.add('warning');
  }
}

function updatePositionsDisplay() {
  // Use mock data for demo
  state.positions = state.connected ? mockPositions : [];
  positionsCount.textContent = state.positions.length;
  
  const positionsList = document.getElementById('positionsList');
  const emptyState = positionsTab.querySelector('.empty-state');
  
  if (state.positions.length === 0) {
    positionsList.classList.add('hidden');
    emptyState.classList.remove('hidden');
  } else {
    positionsList.classList.remove('hidden');
    emptyState.classList.add('hidden');
    
    positionsList.innerHTML = state.positions.map(position => `
      <div class="position-item">
        <div class="position-info">
          <div class="position-symbol">${position.symbol}</div>
          <div class="position-details">${position.quantity} @ ${position.avgPrice.toFixed(2)}</div>
        </div>
        <div class="position-pnl">
          <div class="pnl-value ${position.pnl >= 0 ? 'positive' : 'negative'}">
            ${position.pnl >= 0 ? '+' : ''}$${Math.abs(position.pnl).toFixed(2)}
          </div>
          <div class="pnl-percent ${position.pnl >= 0 ? 'positive' : 'negative'}">
            ${position.pnlPercent >= 0 ? '+' : ''}${position.pnlPercent.toFixed(2)}%
          </div>
        </div>
      </div>
    `).join('');
  }
}

function updateOrdersDisplay() {
  // Use mock data for demo
  state.orders = state.connected ? mockOrders : [];
  ordersCount.textContent = state.orders.length;
  
  const ordersList = document.getElementById('ordersList');
  const emptyState = ordersTab.querySelector('.empty-state');
  
  if (state.orders.length === 0) {
    ordersList.classList.add('hidden');
    emptyState.classList.remove('hidden');
  } else {
    ordersList.classList.remove('hidden');
    emptyState.classList.add('hidden');
    
    ordersList.innerHTML = state.orders.map(order => `
      <div class="order-item">
        <div class="order-info">
          <div class="order-header">
            <span class="order-side ${order.side.toLowerCase()}">${order.side}</span>
            <span class="order-symbol">${order.symbol}</span>
          </div>
          <div class="order-details">
            ${order.quantity} @ ${order.orderType === 'LMT' ? order.price.toFixed(2) : 'MKT'} • ${order.status}
          </div>
        </div>
        <div class="order-actions">
          <button class="btn-icon" title="Cancel order">✕</button>
        </div>
      </div>
    `).join('');
  }
}

function updateFillsDisplay() {
  // Use mock data for demo
  state.fills = state.connected ? mockFills : [];
  fillsCount.textContent = state.fills.length;
  
  const fillsList = document.getElementById('fillsList');
  const emptyState = fillsTab.querySelector('.empty-state');
  
  if (state.fills.length === 0) {
    fillsList.classList.add('hidden');
    emptyState.classList.remove('hidden');
  } else {
    fillsList.classList.remove('hidden');
    emptyState.classList.add('hidden');
    
    fillsList.innerHTML = state.fills.map(fill => {
      const time = new Date(fill.timestamp).toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      
      return `
        <div class="order-item">
          <div class="order-info">
            <div class="order-header">
              <span class="order-side ${fill.side.toLowerCase()}">${fill.side}</span>
              <span class="order-symbol">${fill.symbol}</span>
            </div>
            <div class="order-details">
              ${fill.quantity} @ ${fill.price.toFixed(2)} • ${time}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Setup drag handle for resizing
function setupDragHandle() {
  const dragHandle = document.getElementById('dragHandle');
  const orderSection = document.querySelector('.order-section');
  const tabsContainer = document.querySelector('.tabs-container');
  const contentContainer = document.querySelector('.content-container');
  
  if (!dragHandle || !orderSection || !tabsContainer || !contentContainer) return;
  
  let isDragging = false;
  let startY = 0;
  let startOrderHeight = 0;
  let startTabsHeight = 0;
  
  // Get the current computed heights
  function getCurrentHeights() {
    const orderHeight = orderSection.offsetHeight;
    const tabsHeight = tabsContainer.offsetHeight;
    return { orderHeight, tabsHeight };
  }
  
  dragHandle.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    const heights = getCurrentHeights();
    startOrderHeight = heights.orderHeight;
    startTabsHeight = heights.tabsHeight;
    
    // Add dragging styles
    document.body.style.cursor = 'ns-resize';
    document.body.style.userSelect = 'none';
    dragHandle.style.background = '#d1d5db';
    
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - startY;
    const containerHeight = contentContainer.offsetHeight;
    
    // Calculate new heights
    let newOrderHeight = startOrderHeight + deltaY;
    let newTabsHeight = startTabsHeight - deltaY;
    
    // Set minimum heights
    const minHeight = 150;
    if (newOrderHeight < minHeight) {
      newOrderHeight = minHeight;
      newTabsHeight = containerHeight - minHeight - dragHandle.offsetHeight;
    }
    if (newTabsHeight < minHeight) {
      newTabsHeight = minHeight;
      newOrderHeight = containerHeight - minHeight - dragHandle.offsetHeight;
    }
    
    // Apply new heights using flex-basis
    orderSection.style.flexBasis = `${newOrderHeight}px`;
    tabsContainer.style.flexBasis = `${newTabsHeight}px`;
  });
  
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      dragHandle.style.background = '';
    }
  });
}