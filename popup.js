// Popup script for trading interface
const statusEl = document.getElementById('status');
const authSection = document.getElementById('authSection');
const tradingSection = document.getElementById('tradingSection');
const connectBtn = document.getElementById('connectBtn');
const buyBtn = document.getElementById('buyBtn');
const sellBtn = document.getElementById('sellBtn');
const disconnectBtn = document.getElementById('disconnectBtn');
const symbolInput = document.getElementById('symbol');
const quantityInput = document.getElementById('quantity');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Info display elements
const balanceEl = document.getElementById('balance');
const positionEl = document.getElementById('position');
const pnlEl = document.getElementById('pnl');
const accountEl = document.getElementById('account');

// Keep track of connection state
let isConnected = false;
let accountInfo = null;

// Check connection status on load
chrome.runtime.sendMessage({ type: 'getStatus' }, (response) => {
  if (response && response.connected) {
    showTrading();
    updateDisplay(response.accountInfo);
  }
});

// Pre-fill test credentials for easy testing
usernameInput.value = 'quickstepshoes@traders_launch.com';
passwordInput.value = 'mQ1JRp8Ma1!';  // Pre-filled for testing

// Connect button handler
connectBtn.addEventListener('click', async () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (!username || !password) {
    alert('Please enter username and password');
    return;
  }
  
  connectBtn.disabled = true;
  connectBtn.textContent = 'Connecting...';
  
  try {
    const response = await chrome.runtime.sendMessage({
      type: 'connect',
      username,
      password
    });
    
    if (response.success) {
      showTrading();
    } else {
      alert('Connection failed: ' + response.error);
    }
  } catch (error) {
    alert('Connection error: ' + error.message);
  } finally {
    connectBtn.disabled = false;
    connectBtn.textContent = 'Connect';
  }
});

// Buy button handler
buyBtn.addEventListener('click', () => {
  sendOrder('BUY');
});

// Sell button handler
sellBtn.addEventListener('click', () => {
  sendOrder('SELL');
});

async function sendOrder(side) {
  const symbol = symbolInput.value.trim();
  const quantity = parseInt(quantityInput.value);
  
  if (!symbol || !quantity || quantity <= 0) {
    alert('Please enter valid symbol and quantity');
    return;
  }
  
  try {
    const response = await chrome.runtime.sendMessage({
      type: 'sendOrder',
      symbol,
      quantity,
      side
    });
    
    if (!response.success) {
      alert('Order failed: ' + response.error);
    }
  } catch (error) {
    alert('Order error: ' + error.message);
  }
}

function showTrading() {
  statusEl.textContent = 'Connected';
  statusEl.className = 'status connected';
  authSection.classList.add('hidden');
  tradingSection.classList.remove('hidden');
  isConnected = true;
}

function updateDisplay(info) {
  if (!info) return;
  
  accountInfo = info;
  
  if (info.accountNo) {
    accountEl.textContent = info.accountNo;
  }
  
  if (info.balance !== undefined) {
    balanceEl.textContent = `$${info.balance.toFixed(2)}`;
  }
  
  if (info.position !== undefined) {
    positionEl.textContent = info.position;
  }
  
  if (info.pnl !== undefined) {
    pnlEl.textContent = `$${info.pnl.toFixed(2)}`;
    pnlEl.style.color = info.pnl >= 0 ? '#28a745' : '#dc3545';
  }
}

// Disconnect button handler
disconnectBtn.addEventListener('click', async () => {
  if (confirm('Are you sure you want to disconnect?')) {
    chrome.runtime.sendMessage({ type: 'disconnect' });
    statusEl.textContent = 'Disconnected';
    statusEl.className = 'status disconnected';
    authSection.classList.remove('hidden');
    tradingSection.classList.add('hidden');
    isConnected = false;
    // Clear password field for security
    passwordInput.value = '';
  }
});

// Listen for updates from background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'accountUpdate') {
    updateDisplay(message.data);
  } else if (message.type === 'disconnected') {
    statusEl.textContent = 'Disconnected';
    statusEl.className = 'status disconnected';
    authSection.classList.remove('hidden');
    tradingSection.classList.add('hidden');
    isConnected = false;
  }
});

// Prevent form submission on enter
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});