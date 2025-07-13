// State management
let state = {
  connected: false,
  theme: 'dark', // Default to dark theme
  headerCollapsed: false,
  accountDropdownOpen: false,
  syncEnabled: true, // NEW - panel dictates TradingView symbol
  copyTradingEnabled: false, // Copy trading across all live accounts
  selectedAccount: {
    id: 'acc-001',
    name: 'Trading Account',
    balance: 125430.50,
    isLive: true
  },
  accounts: [
    {
      id: 'acc-001',
      name: 'Trading Account',
      balance: 125430.50,
      isLive: true,
      platform: 'Traders Launch'
    },
    {
      id: 'acc-002',
      name: 'Paper Trading',
      balance: 100000.00,
      isLive: false,
      platform: 'Traders Launch'
    },
    {
      id: 'acc-003',
      name: 'Live Account 2',
      balance: 75250.00,
      isLive: true,
      platform: 'Traders Launch'
    },
    {
      id: 'acc-004',
      name: 'Live Account 3',
      balance: 200000.00,
      isLive: true,
      platform: 'Traders Launch'
    }
  ],
  orderForm: {
    symbol: 'ES',
    quantity: 1,
    orderType: 'MKT',
    price: '',
    timeInForce: 'DAY',
    isPriceLocked: false
  },
  activeTab: 'positions',
  positions: [],
  orders: [],
  fills: []
};

// Mock data
const mockPositions = [
  { symbol: 'ES', quantity: 5, avgPrice: 5294.75, currentPrice: 5298.25, pnl: 875.00, pnlPercent: 0.66 },
  { symbol: 'NQ', quantity: -2, avgPrice: 18245.50, currentPrice: 18198.75, pnl: 935.00, pnlPercent: 1.28 },
  { symbol: 'YM', quantity: 3, avgPrice: 42850.00, currentPrice: 42798.00, pnl: -156.00, pnlPercent: -0.12 },
  { symbol: 'RTY', quantity: 1, avgPrice: 2245.80, currentPrice: 2251.40, pnl: 280.00, pnlPercent: 0.25 }
];

const mockOrders = [
  { id: '1', symbol: 'ES', side: 'BUY', quantity: 2, orderType: 'LMT', price: 5290.00, status: 'PENDING', timestamp: new Date() },
  { id: '2', symbol: 'NQ', side: 'SELL', quantity: 1, orderType: 'LMT', price: 18250.00, status: 'PARTIAL', timestamp: new Date() }
];

const mockFills = [
  { id: '1', symbol: 'ES', side: 'BUY', quantity: 5, price: 5294.75, timestamp: new Date(Date.now() - 3600000) },
  { id: '2', symbol: 'NQ', side: 'SELL', quantity: 2, price: 18245.50, timestamp: new Date(Date.now() - 7200000) }
];

// DOM Elements
const elements = {};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initializeElements();
  setupEventListeners();
  setupKeyboardShortcuts();
  loadTheme();
  checkConnectionStatus();
});

function initializeElements() {
  // View elements
  elements.loginView = document.getElementById('loginView');
  elements.tradingView = document.getElementById('tradingView');
  
  // Login elements
  elements.loginForm = document.getElementById('loginForm');
  elements.loginError = document.getElementById('loginError');
  elements.platformSelect = document.getElementById('platform');
  elements.usernameInput = document.getElementById('username');
  elements.passwordInput = document.getElementById('password');
  elements.connectBtn = document.getElementById('connectBtn');
  
  // Header elements
  elements.themeToggle = document.getElementById('themeToggle');
  elements.popoutBtn = document.getElementById('popoutBtn');
  elements.collapseBtn = document.getElementById('collapseBtn');
  elements.syncToggle = document.getElementById('syncToggle');
  elements.disconnectBtn = document.getElementById('disconnectBtn');
  elements.accountSection = document.getElementById('accountSection');
  
  // Account elements
  elements.accountButton = document.getElementById('accountButton');
  elements.accountName = document.getElementById('accountName');
  elements.accountBalance = document.getElementById('accountBalance');
  elements.accountChevron = document.getElementById('accountChevron');
  elements.accountDropdown = document.getElementById('accountDropdown');
  elements.dropdownBackdrop = document.getElementById('dropdownBackdrop');
  elements.addAccountOption = document.getElementById('addAccountOption');
  
  // Copy trading elements
  elements.copyTradingSection = document.getElementById('copyTradingSection');
  elements.copyTradingInfo = document.getElementById('copyTradingInfo');
  elements.copyToggle = document.getElementById('copyToggle');
  
  // Order form elements
  elements.symbolInput = document.getElementById('symbolInput');
  elements.quantityInput = document.getElementById('quantityInput');
  elements.qtyMinus = document.getElementById('qtyMinus');
  elements.qtyPlus = document.getElementById('qtyPlus');
  elements.orderTypeSelect = document.getElementById('orderTypeSelect');
  elements.priceGroup = document.getElementById('priceGroup');
  elements.priceInput = document.getElementById('priceInput');
  elements.priceLock = document.getElementById('priceLock');
  elements.buyBtn = document.getElementById('buyBtn');
  elements.sellBtn = document.getElementById('sellBtn');
  elements.closeBtn = document.getElementById('closeBtn');
  
  // Tab elements
  elements.tabButtons = document.querySelectorAll('.tab-button');
  elements.positionsTab = document.getElementById('positionsTab');
  elements.ordersTab = document.getElementById('ordersTab');
  elements.fillsTab = document.getElementById('fillsTab');
  elements.positionsCount = document.getElementById('positionsCount');
  elements.ordersCount = document.getElementById('ordersCount');
  elements.fillsCount = document.getElementById('fillsCount');
  elements.positionsList = document.getElementById('positionsList');
  elements.ordersList = document.getElementById('ordersList');
  elements.fillsList = document.getElementById('fillsList');
  elements.positionsEmpty = document.getElementById('positionsEmpty');
  elements.ordersEmpty = document.getElementById('ordersEmpty');
  elements.fillsEmpty = document.getElementById('fillsEmpty');
}

function setupEventListeners() {
  // Login form
  elements.loginForm.addEventListener('submit', handleLogin);
  
  // Theme toggle
  elements.themeToggle?.addEventListener('click', toggleTheme);
  
  // Header actions
  elements.popoutBtn?.addEventListener('click', handlePopout);
  elements.collapseBtn?.addEventListener('click', toggleHeaderCollapse);
  elements.syncToggle?.addEventListener('click', () => {
    state.syncEnabled = !state.syncEnabled;
    updateSyncUI();
    if (state.syncEnabled) broadcastSymbol();
  });
  elements.disconnectBtn?.addEventListener('click', handleDisconnect);
  
  // Account selector
  elements.accountButton?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleAccountDropdown();
  });
  
  // Account options - use event delegation for better handling
  elements.accountDropdown?.addEventListener('click', (e) => {
    e.stopPropagation();
    const option = e.target.closest('.account-option');
    if (option) {
      if (option.id === 'addAccountOption') {
        alert('Account onboarding coming soon 🤝');
        closeAccountDropdown();
      } else {
        selectAccount(option);
      }
    }
  });
  
  // Close dropdown when clicking outside or on backdrop
  document.addEventListener('click', (e) => {
    if (!elements.accountButton.contains(e.target) && !elements.accountDropdown.contains(e.target)) {
      closeAccountDropdown();
    }
  });
  
  // Close dropdown when clicking backdrop
  elements.dropdownBackdrop?.addEventListener('click', closeAccountDropdown);
  
  // Copy trading toggle
  elements.copyToggle?.addEventListener('click', () => {
    state.copyTradingEnabled = !state.copyTradingEnabled;
    updateCopyTradingUI();
  });
  
  // Order form
  elements.symbolInput.addEventListener('input', (e) => {
    state.orderForm.symbol = e.target.value.toUpperCase();
    e.target.value = state.orderForm.symbol;
    broadcastSymbol();
  });
  
  elements.quantityInput.addEventListener('input', (e) => {
    state.orderForm.quantity = Math.max(1, parseInt(e.target.value) || 1);
  });
  
  elements.qtyMinus.addEventListener('click', () => changeQuantity(-1));
  elements.qtyPlus.addEventListener('click', () => changeQuantity(1));
  
  elements.orderTypeSelect.addEventListener('change', (e) => {
    state.orderForm.orderType = e.target.value;
    updateOrderTypeUI();
  });
  
  elements.priceInput.addEventListener('input', (e) => {
    state.orderForm.price = e.target.value;
  });
  
  elements.priceLock.addEventListener('click', togglePriceLock);
  
  elements.buyBtn.addEventListener('click', () => handleOrder('BUY'));
  elements.sellBtn.addEventListener('click', () => handleOrder('SELL'));
  elements.closeBtn.addEventListener('click', handleClosePosition);
  
  // Tabs
  elements.tabButtons.forEach(button => {
    button.addEventListener('click', () => switchTab(button.getAttribute('data-tab')));
  });
  
  // Listen for messages from background
  chrome.runtime.onMessage.addListener(handleBackgroundMessage);
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Alt+B for Buy
    if (e.altKey && e.key === 'b') {
      e.preventDefault();
      handleOrder('BUY');
    }
    // Alt+S for Sell
    else if (e.altKey && e.key === 's') {
      e.preventDefault();
      handleOrder('SELL');
    }
    // Cmd/Ctrl+Enter for submit
    else if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      // Submit current order based on focus or last action
    }
  });
}

// Theme management
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
  state.theme = savedTheme;
  updateThemeUI();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', state.theme);
  updateThemeUI();
}

function updateThemeUI() {
  const themeIcon = document.getElementById('themeIcon');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  
  if (state.theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    elements.themeToggle?.classList.remove('light');
    if (themeIcon) themeIcon.className = 'icon-moon';
    if (metaThemeColor) metaThemeColor.content = '#0a0a0a';
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    elements.themeToggle?.classList.add('light');
    if (themeIcon) themeIcon.className = 'icon-sun';
    if (metaThemeColor) metaThemeColor.content = '#ffffff';
  }
}

// Header actions
function handlePopout() {
  // Create a new window with the extension
  chrome.windows.create({
    url: chrome.runtime.getURL('sidepanel.html'),
    type: 'popup',
    width: 400,
    height: 800
  });
}

function toggleHeaderCollapse() {
  state.headerCollapsed = !state.headerCollapsed;
  
  if (state.headerCollapsed) {
    elements.accountSection.classList.add('collapsed');
    elements.collapseBtn.innerHTML = '<span class="icon-chevron-down"></span>';
  } else {
    elements.accountSection.classList.remove('collapsed');
    elements.collapseBtn.innerHTML = '<span class="icon-chevron-up"></span>';
  }
}

// Account management
function toggleAccountDropdown() {
  state.accountDropdownOpen = !state.accountDropdownOpen;
  
  if (state.accountDropdownOpen) {
    elements.accountDropdown.classList.add('open');
    elements.accountChevron.classList.add('open');
    elements.dropdownBackdrop.classList.add('active');
  } else {
    closeAccountDropdown();
  }
}

function closeAccountDropdown() {
  state.accountDropdownOpen = false;
  elements.accountDropdown.classList.remove('open');
  elements.accountChevron.classList.remove('open');
  elements.dropdownBackdrop.classList.remove('active');
}

function selectAccount(optionElement) {
  const accountId = optionElement.getAttribute('data-account-id');
  const account = state.accounts.find(a => a.id === accountId);
  
  if (account) {
    state.selectedAccount = account;
    updateAccountUI();
    closeAccountDropdown();
  }
}

function updateAccountUI() {
  elements.accountName.textContent = state.selectedAccount.name;
  elements.accountBalance.textContent = `$${state.selectedAccount.balance.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
  
  // Update live status
  const statusDot = elements.accountButton.querySelector('.status-dot');
  if (state.selectedAccount.isLive) {
    statusDot.classList.add('live');
  } else {
    statusDot.classList.remove('live');
  }
}


// Order form
function changeQuantity(delta) {
  state.orderForm.quantity = Math.max(1, state.orderForm.quantity + delta);
  elements.quantityInput.value = state.orderForm.quantity;
}

function updateOrderTypeUI() {
  if (state.orderForm.orderType === 'LMT') {
    elements.priceGroup.classList.remove('hidden');
  } else {
    elements.priceGroup.classList.add('hidden');
  }
}

function togglePriceLock() {
  state.orderForm.isPriceLocked = !state.orderForm.isPriceLocked;
  
  if (state.orderForm.isPriceLocked) {
    elements.priceInput.disabled = true;
    elements.priceLock.innerHTML = '<span class="icon-lock"></span>';
  } else {
    elements.priceInput.disabled = false;
    elements.priceLock.innerHTML = '<span class="icon-unlock"></span>';
  }
}

async function handleOrder(side) {
  if (!state.orderForm.symbol) {
    alert('Please enter a symbol');
    return;
  }
  
  if (state.orderForm.orderType === 'LMT' && !state.orderForm.price) {
    alert('Please enter a limit price');
    return;
  }
  
  const button = side === 'BUY' ? elements.buyBtn : elements.sellBtn;
  button.disabled = true;
  button.textContent = 'Placing...';
  
  try {
    // Determine which accounts to trade on
    let accountsToTrade = [state.selectedAccount];
    
    if (state.copyTradingEnabled) {
      // Get all live accounts for copy trading
      accountsToTrade = state.accounts.filter(acc => acc.isLive);
      button.textContent = `Placing ${accountsToTrade.length}...`;
    }
    
    // Place orders on all selected accounts
    const orderPromises = accountsToTrade.map(account => {
      return chrome.runtime.sendMessage({
        type: 'placeOrder',
        accountId: account.id,
        accountName: account.name,
        order: {
          symbol: state.orderForm.symbol,
          side: side.toLowerCase(),
          quantity: state.orderForm.quantity,
          orderType: state.orderForm.orderType.toLowerCase(),
          price: state.orderForm.orderType === 'LMT' ? parseFloat(state.orderForm.price) : null
        }
      });
    });
    
    const responses = await Promise.allSettled(orderPromises);
    
    // Count successful orders
    let successCount = 0;
    let failedAccounts = [];
    
    responses.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value.success) {
        successCount++;
        
        // Add to orders list
        const newOrder = {
          id: result.value.orderId,
          accountId: accountsToTrade[index].id,
          accountName: accountsToTrade[index].name,
          symbol: state.orderForm.symbol,
          side: side,
          quantity: state.orderForm.quantity,
          orderType: state.orderForm.orderType,
          price: state.orderForm.orderType === 'LMT' ? parseFloat(state.orderForm.price) : null,
          status: 'PENDING',
          timestamp: new Date()
        };
        state.orders.push(newOrder);
      } else {
        failedAccounts.push(accountsToTrade[index].name);
      }
    });
    
    updateOrdersDisplay();
    
    // Show result
    if (successCount === accountsToTrade.length) {
      button.textContent = state.copyTradingEnabled ? `${successCount} Sent!` : 'Sent!';
    } else if (successCount > 0) {
      button.textContent = `${successCount}/${accountsToTrade.length} Sent`;
      if (failedAccounts.length > 0) {
        console.warn('Failed accounts:', failedAccounts.join(', '));
      }
    } else {
      alert('All orders failed');
    }
    
    // Draw limit order line on TradingView chart
    if (state.orderForm.orderType === 'LMT' && successCount > 0) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length && tabs[0].url.includes('tradingview.com')) {
          chrome.tabs.sendMessage(tabs[0].id, {
            type: 'drawLimitOrderLine',
            symbol: state.orderForm.symbol,
            price: parseFloat(state.orderForm.price),
            side: side
          }).catch(err => {
            console.log('Could not send to TradingView:', err);
          });
        }
      });
    }
    
    setTimeout(() => {
      button.textContent = side;
      button.disabled = false;
    }, 2000);
    
  } catch (error) {
    alert('Order error: ' + error.message);
    button.textContent = side;
    button.disabled = false;
  }
}

function handleClosePosition() {
  console.log('Close position for:', state.orderForm.symbol);
  // TODO: Implement close position logic
}

// Tab management
function switchTab(tabName) {
  state.activeTab = tabName;
  
  // Update tab buttons
  elements.tabButtons.forEach(button => {
    if (button.getAttribute('data-tab') === tabName) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  
  // Update tab content
  const tabs = {
    positions: elements.positionsTab,
    orders: elements.ordersTab,
    fills: elements.fillsTab
  };
  
  Object.entries(tabs).forEach(([key, element]) => {
    if (key === tabName) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

// Display updates
function updatePositionsDisplay() {
  // Use mock data when connected
  state.positions = state.connected ? mockPositions : [];
  elements.positionsCount.textContent = state.positions.length;
  
  if (state.positions.length === 0) {
    elements.positionsEmpty.style.display = 'block';
    elements.positionsList.style.display = 'none';
  } else {
    elements.positionsEmpty.style.display = 'none';
    elements.positionsList.style.display = 'block';
    
    // Send position updates to TradingView
    state.positions.forEach(position => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length && tabs[0].url.includes('tradingview.com')) {
          chrome.tabs.sendMessage(tabs[0].id, {
            type: 'updatePosition',
            symbol: position.symbol,
            quantity: position.quantity,
            avgPrice: position.avgPrice
          }).catch(err => {
            console.log('Could not update position on TradingView:', err);
          });
        }
      });
    });
    
    elements.positionsList.innerHTML = state.positions.map(position => `
      <div class="position-item">
        <div class="position-header">
          <div>
            <span class="position-symbol">${position.symbol}</span>
            <span class="position-quantity">${position.quantity > 0 ? '+' : ''}${position.quantity}</span>
          </div>
          <div class="position-pnl">
            <div class="pnl-value ${position.pnl >= 0 ? 'positive' : 'negative'}">
              ${position.pnl >= 0 ? '+' : ''}$${Math.abs(position.pnl).toFixed(0)}
            </div>
            <div class="pnl-percent ${position.pnlPercent >= 0 ? 'positive' : 'negative'}">
              ${position.pnlPercent >= 0 ? '+' : ''}${position.pnlPercent.toFixed(2)}%
            </div>
          </div>
        </div>
        <div class="position-details">
          <span>Avg: $${position.avgPrice.toFixed(2)}</span>
          <span>Now: $${position.currentPrice.toFixed(2)}</span>
        </div>
      </div>
    `).join('');
  }
}

function updateOrdersDisplay() {
  // Use mock data when connected
  if (state.connected && state.orders.length === 0) {
    state.orders = mockOrders;
  }
  
  elements.ordersCount.textContent = state.orders.length;
  
  if (state.orders.length === 0) {
    elements.ordersEmpty.style.display = 'block';
    elements.ordersList.style.display = 'none';
  } else {
    elements.ordersEmpty.style.display = 'none';
    elements.ordersList.style.display = 'block';
    
    elements.ordersList.innerHTML = state.orders.map(order => {
      const statusIcon = getStatusIcon(order.status);
      
      return `
        <div class="order-item">
          <div class="order-header">
            <div style="display: flex; align-items: center; gap: 6px;">
              ${statusIcon}
              <span class="order-symbol">${order.symbol}</span>
              <span class="order-side ${order.side.toLowerCase()}">${order.side}</span>
            </div>
            <div class="order-actions">
              <button class="btn-mini" onclick="editOrder('${order.id}')">
                <span class="icon-edit"></span>
              </button>
              <button class="btn-mini" onclick="cancelOrder('${order.id}')">
                <span class="icon-x"></span>
              </button>
            </div>
          </div>
          <div class="order-details">
            <span>${order.quantity} @ ${order.orderType}</span>
            ${order.price ? `<span>$${order.price.toFixed(2)}</span>` : ''}
          </div>
          <div class="order-details" style="margin-top: 2px;">
            <span>${order.timestamp.toLocaleTimeString()}</span>
            ${order.accountName ? `<span style="color: var(--muted-foreground);"> • ${order.accountName}</span>` : ''}
          </div>
        </div>
      `;
    }).join('');
  }
}

function updateFillsDisplay() {
  // Use mock data when connected
  state.fills = state.connected ? mockFills : [];
  elements.fillsCount.textContent = state.fills.length;
  
  if (state.fills.length === 0) {
    elements.fillsEmpty.style.display = 'block';
    elements.fillsList.style.display = 'none';
  } else {
    elements.fillsEmpty.style.display = 'none';
    elements.fillsList.style.display = 'block';
    
    elements.fillsList.innerHTML = state.fills.map(fill => {
      const icon = fill.side === 'BUY' ? 
        '<span class="icon-trending-up" style="color: var(--teal);"></span>' : 
        '<span class="icon-trending-down" style="color: var(--red);"></span>';
      
      return `
        <div class="fill-item">
          <div class="fill-header">
            <div style="display: flex; align-items: center; gap: 6px;">
              ${icon}
              <span class="fill-symbol">${fill.symbol}</span>
              <span class="fill-side ${fill.side.toLowerCase()}">${fill.side}</span>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 12px; font-weight: 600;">$${fill.price.toFixed(2)}</div>
              <div style="font-size: 12px; color: var(--muted-foreground);">${fill.quantity} contracts</div>
            </div>
          </div>
          <div class="fill-details">
            <span>${fill.timestamp.toLocaleString()}</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

function getStatusIcon(status) {
  switch (status) {
    case 'PENDING':
      return '<span class="icon-clock" style="color: var(--yellow);"></span>';
    case 'PARTIAL':
      return '<span class="icon-alert" style="color: var(--orange);"></span>';
    case 'FILLED':
      return '<span class="icon-check" style="color: var(--green);"></span>';
    case 'CANCELLED':
      return '<span class="icon-x" style="color: var(--muted-foreground);"></span>';
    default:
      return '';
  }
}

// Login handling
async function handleLogin(e) {
  e.preventDefault();
  
  const platform = elements.platformSelect.value;
  const username = elements.usernameInput.value.trim();
  const password = elements.passwordInput.value.trim();
  
  if (!username || !password) {
    showLoginError('Please enter both username and password');
    return;
  }
  
  // Only Volumetrica is supported for now
  if (platform !== 'volumetrica') {
    showLoginError('This platform is coming soon!');
    return;
  }
  
  elements.connectBtn.disabled = true;
  elements.connectBtn.textContent = 'Connecting...';
  elements.loginError.classList.add('hidden');
  
  try {
    const response = await chrome.runtime.sendMessage({
      type: 'connect',
      username,
      password
    });
    
    if (response && response.success) {
      state.connected = true;
      showTradingView();
      
      // Get initial account status
      const statusResponse = await chrome.runtime.sendMessage({ type: 'getStatus' });
      if (statusResponse && statusResponse.accountInfo) {
        state.selectedAccount.balance = statusResponse.accountInfo.balance || state.selectedAccount.balance;
        updateAccountUI();
      }
      
      updateUI();
    } else {
      showLoginError(response?.error || 'Connection failed');
    }
  } catch (error) {
    showLoginError('Failed to connect: ' + error.message);
  } finally {
    elements.connectBtn.disabled = false;
    elements.connectBtn.textContent = 'Connect';
  }
}

function showLoginError(message) {
  elements.loginError.textContent = message;
  elements.loginError.classList.remove('hidden');
}

function showLoginView() {
  elements.loginView.classList.remove('hidden');
  elements.tradingView.classList.add('hidden');
}

function showTradingView() {
  elements.loginView.classList.add('hidden');
  elements.tradingView.classList.remove('hidden');
}

// Connection management
async function checkConnectionStatus() {
  try {
    const response = await chrome.runtime.sendMessage({ type: 'getStatus' });
    if (response && response.connected) {
      state.connected = true;
      if (response.accountInfo) {
        // Update account info from real data
        state.selectedAccount.balance = response.accountInfo.balance || state.selectedAccount.balance;
      }
      showTradingView();
      updateUI();
    } else {
      showLoginView();
    }
  } catch (error) {
    console.error('Failed to check connection status:', error);
    showLoginView();
  }
}

// Handle disconnect
async function handleDisconnect() {
  try {
    await chrome.runtime.sendMessage({ type: 'disconnect' });
    state.connected = false;
    showLoginView();
  } catch (error) {
    console.error('Disconnect error:', error);
  }
}

function handleBackgroundMessage(message) {
  switch (message.type) {
    case 'accountUpdate':
      if (message.data) {
        state.selectedAccount.balance = message.data.balance || state.selectedAccount.balance;
        updateAccountUI();
      }
      break;
      
    case 'disconnected':
      state.connected = false;
      showLoginView();
      break;
      
    case 'networkHeartbeat':
      // Update connection status indicator if needed
      break;
      
    case 'positionUpdate':
      // Update positions
      break;
      
    case 'orderUpdate':
      // Update orders
      break;
      
    case 'fillUpdate':
      // Update fills
      break;
  }
}

// Main UI update
function updateUI() {
  updateAccountUI();
  updateCopyTradingUI();
  updatePositionsDisplay();
  updateOrdersDisplay();
  updateFillsDisplay();
}

// Global functions for order actions
window.editOrder = (orderId) => {
  console.log('Edit order:', orderId);
  // TODO: Implement edit order
};

window.cancelOrder = (orderId) => {
  console.log('Cancel order:', orderId);
  // TODO: Implement cancel order
};

// Chart sync functions
function updateSyncUI() {
  elements.syncToggle.classList.toggle('active', state.syncEnabled);
}

function broadcastSymbol() {
  if (!state.syncEnabled || !state.orderForm.symbol) return;
  
  chrome.tabs.query({ url: '*://*.tradingview.com/*' }, (tabs) => {
    tabs.forEach(tab => {
      chrome.tabs.sendMessage(tab.id, {
        type: 'setSymbol',
        symbol: state.orderForm.symbol
      }).catch(err => {
        // Tab might not have content script loaded yet
        console.log('Could not send symbol to TradingView tab:', err);
      });
    });
  });
}

// Copy trading functions
function updateCopyTradingUI() {
  elements.copyToggle.classList.toggle('active', state.copyTradingEnabled);
  
  // Update info text
  const liveAccounts = state.accounts.filter(acc => acc.isLive);
  const accountText = liveAccounts.length === 1 ? '1 live account' : `${liveAccounts.length} live accounts`;
  elements.copyTradingInfo.textContent = state.copyTradingEnabled 
    ? `Trading on all ${accountText}` 
    : `Trade on ${accountText}`;
    
  // Update button colors based on state
  if (state.copyTradingEnabled) {
    elements.buyBtn.style.background = '#059669'; // Darker green for copy mode
    elements.sellBtn.style.background = '#dc2626'; // Darker red for copy mode
  } else {
    elements.buyBtn.style.background = '';
    elements.sellBtn.style.background = '';
  }
}