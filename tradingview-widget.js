// TradingView widget functionality
let currentSymbol = 'AAPL';
let currentPrice = 210.56;
let orderSide = 'buy'; // 'buy' or 'sell'

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Tab switching
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // TODO: Switch content based on tab
    });
  });
  
  // Close button
  document.getElementById('closeBtn').addEventListener('click', () => {
    if (window.parent !== window) {
      // We're in an iframe, send message to parent
      window.parent.postMessage({ type: 'close-widget' }, '*');
    } else {
      window.close();
    }
  });
  
  // Shares input
  const sharesInput = document.getElementById('sharesInput');
  const buyBtn = document.getElementById('buyBtn');
  
  sharesInput.addEventListener('input', updateOrderButton);
  
  // Buy button
  buyBtn.addEventListener('click', async () => {
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
    
    buyBtn.disabled = true;
    buyBtn.textContent = 'Placing order...';
    
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
        buyBtn.textContent = 'Order sent!';
        console.log('Order placed:', response.message);
        setTimeout(() => {
          updateOrderButton();
          buyBtn.disabled = false;
        }, 2000);
      } else {
        throw new Error(response.error || 'Order failed');
      }
    } catch (error) {
      console.error('Order error:', error);
      buyBtn.textContent = 'Order failed';
      alert('Order failed: ' + error.message);
      setTimeout(() => {
        updateOrderButton();
        buyBtn.disabled = false;
      }, 2000);
    }
  });
  
  // Listen for price updates from TradingView page
  window.addEventListener('message', (event) => {
    if (event.data.type === 'price-update') {
      currentPrice = event.data.price;
      currentSymbol = event.data.symbol;
      updatePriceDisplay();
    }
  });
  
  // Check if we have initial data from URL params
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('symbol')) {
    currentSymbol = urlParams.get('symbol');
    document.querySelector('.header-title').textContent = `${currentSymbol}, Paper Trading`;
    updateOrderButton();
  }
});

function updateOrderButton() {
  const sharesInput = document.getElementById('sharesInput');
  const buyBtn = document.getElementById('buyBtn');
  const shares = sharesInput.value || 0;
  
  if (orderSide === 'buy') {
    buyBtn.className = 'buy-button';
    buyBtn.innerHTML = `Buy<br>${shares} ${currentSymbol} MKT`;
  } else {
    buyBtn.className = 'buy-button sell-button';
    buyBtn.innerHTML = `Sell<br>${shares} ${currentSymbol} MKT`;
  }
}

function updatePriceDisplay() {
  const priceElement = document.querySelector('.price-value');
  if (priceElement) {
    priceElement.textContent = currentPrice.toFixed(2);
  }
}