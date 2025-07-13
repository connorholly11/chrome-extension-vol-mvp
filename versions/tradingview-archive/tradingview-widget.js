// TradingView widget functionality
let currentSymbol = 'AAPL';
let currentPrice = 210.56;
let orderSide = 'buy'; // 'buy' or 'sell'

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Request initial symbol/price from parent window
  window.parent.postMessage({ type: 'request-symbol' }, '*');
  
  // No tab switching needed - only Order tab exists
  
  // Get sell button
  const sellBtn = document.getElementById('sellBtn');
  
  // Handle sell button clicks
  sellBtn.addEventListener('click', async () => {
    orderSide = 'sell';
    handleOrder();
  });
  
  // Shares input
  const sharesInput = document.getElementById('sharesInput');
  const buyBtn = document.getElementById('buyBtn');
  
  sharesInput.addEventListener('input', updateOrderButtons);
  
  // Buy button
  buyBtn.addEventListener('click', async () => {
    orderSide = 'buy';
    handleOrder();
  });
  
  // Common order handling function
  async function handleOrder() {
    const shares = parseInt(sharesInput.value);
    if (!shares || shares <= 0) return;
    
    // First check if we're connected
    try {
      const statusResponse = await chrome.runtime.sendMessage({ type: 'getStatus' });
      if (!statusResponse.connected) {
        alert('Please connect to Volumetrica first using the Standard tab');
        return;
      }
    } catch (error) {
      console.error('Status check error:', error);
      alert('Extension error. Please reload the extension.');
      return;
    }
    
    const activeBtn = orderSide === 'buy' ? buyBtn : sellBtn;
    const originalText = activeBtn.innerHTML;
    
    activeBtn.disabled = true;
    sellBtn.disabled = true;
    buyBtn.disabled = true;
    activeBtn.textContent = 'Placing order...';
    
    try {
      // Send order to background script
      const response = await chrome.runtime.sendMessage({
        type: 'placeOrder',
        order: {
          symbol: currentSymbol,
          side: orderSide,
          quantity: shares,
          orderType: 'market',
          price: currentPrice
        }
      });
      
      if (response.success) {
        activeBtn.textContent = 'Order sent!';
        console.log('Order placed:', response.message);
        setTimeout(() => {
          activeBtn.innerHTML = originalText;
          updateOrderButtons();
          sellBtn.disabled = false;
          buyBtn.disabled = false;
        }, 2000);
      } else {
        throw new Error(response.error || 'Order failed');
      }
    } catch (error) {
      console.error('Order error:', error);
      activeBtn.textContent = 'Order failed';
      alert('Order failed: ' + error.message);
      setTimeout(() => {
        activeBtn.innerHTML = originalText;
        updateOrderButtons();
        sellBtn.disabled = false;
        buyBtn.disabled = false;
      }, 2000);
    }
  }
  
  // Listen for updates from TradingView page
  window.addEventListener('message', (event) => {
    if (event.data.type === 'price-update') {
      currentPrice = event.data.price;
      currentSymbol = event.data.symbol;
      updatePriceDisplay();
      updateOrderButtons();
    } else if (event.data.type === 'symbol-update') {
      currentSymbol = event.data.symbol;
      updateOrderButtons();
    }
  });
  
  // Check if we have initial data from URL params
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('symbol')) {
    currentSymbol = urlParams.get('symbol');
    updateOrderButtons();
  }
});

function updateOrderButtons() {
  const sharesInput = document.getElementById('sharesInput');
  const buyBtn = document.getElementById('buyBtn');
  const sellBtn = document.getElementById('sellBtn');
  const shares = sharesInput.value || 0;
  
  buyBtn.innerHTML = `BUY<br><span style="font-size: 12px; font-weight: normal;">${shares} ${currentSymbol}</span>`;
  sellBtn.innerHTML = `SELL<br><span style="font-size: 12px; font-weight: normal;">${shares} ${currentSymbol}</span>`;
}

function updatePriceDisplay() {
  const bidElement = document.querySelector('.bid');
  const askElement = document.querySelector('.ask');
  if (bidElement && askElement) {
    // Simple spread calculation
    const spread = 0.04;
    bidElement.textContent = (currentPrice - spread/2).toFixed(2);
    askElement.textContent = (currentPrice + spread/2).toFixed(2);
  }
}