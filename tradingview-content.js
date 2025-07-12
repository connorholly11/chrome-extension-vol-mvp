// Content script for TradingView integration
console.log('TradingView content script loaded');

let widgetFrame = null;
let isDragging = false;
let dragOffset = { x: 0, y: 0 };

// Function to create and inject the trading widget
function createTradingWidget() {
  // Check if widget already exists
  if (document.getElementById('volumetrica-widget')) {
    return;
  }
  
  // Create widget container
  const widgetContainer = document.createElement('div');
  widgetContainer.id = 'volumetrica-widget';
  widgetContainer.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    width: 240px;
    height: 600px;
    z-index: 10000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    border-radius: 4px;
    overflow: hidden;
    display: none;
  `;
  
  // Create iframe for the widget
  const iframe = document.createElement('iframe');
  iframe.src = chrome.runtime.getURL('tradingview-widget.html');
  iframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
  `;
  widgetFrame = iframe;
  
  // Create drag handle
  const dragHandle = document.createElement('div');
  dragHandle.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    cursor: move;
    z-index: 1;
  `;
  
  // Drag functionality
  dragHandle.addEventListener('mousedown', (e) => {
    isDragging = true;
    const rect = widgetContainer.getBoundingClientRect();
    dragOffset.x = e.clientX - rect.left;
    dragOffset.y = e.clientY - rect.top;
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      widgetContainer.style.left = (e.clientX - dragOffset.x) + 'px';
      widgetContainer.style.top = (e.clientY - dragOffset.y) + 'px';
      widgetContainer.style.right = 'auto';
    }
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
  
  widgetContainer.appendChild(dragHandle);
  widgetContainer.appendChild(iframe);
  document.body.appendChild(widgetContainer);
  
  // Listen for messages from iframe
  window.addEventListener('message', (event) => {
    if (event.source !== widgetFrame.contentWindow) return;
    
    if (event.data.type === 'close-widget') {
      widgetContainer.style.display = 'none';
    }
  });
  
  // Listen for messages from extension
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'toggle-widget') {
      if (widgetContainer.style.display === 'none') {
        widgetContainer.style.display = 'block';
        updateWidgetSymbol();
      } else {
        widgetContainer.style.display = 'none';
      }
    }
  });
}

// Function to get current symbol from TradingView
function getCurrentSymbol() {
  // Try multiple selectors that TradingView might use
  const selectors = [
    '[data-symbol-short]',
    '.tv-symbol-header__short-title',
    '.tv-symbol-header__text',
    '[class*="symbolName"]',
    '[class*="symbol-title"]'
  ];
  
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (element) {
      const symbol = element.getAttribute('data-symbol-short') || element.textContent.trim();
      if (symbol) return symbol;
    }
  }
  
  // Fallback: try to parse from URL
  const match = window.location.href.match(/symbol\/([^\/\?]+)/);
  return match ? match[1] : 'Unknown';
}

// Function to update widget with current symbol
function updateWidgetSymbol() {
  if (!widgetFrame) return;
  
  const symbol = getCurrentSymbol();
  
  // Send symbol to widget
  widgetFrame.contentWindow.postMessage({
    type: 'symbol-update',
    symbol: symbol
  }, '*');
}

// Function to monitor for price updates
function monitorPriceUpdates() {
  // Create a mutation observer to watch for price changes
  const observer = new MutationObserver(() => {
    if (widgetFrame && document.getElementById('volumetrica-widget').style.display !== 'none') {
      const priceElement = document.querySelector('[class*="lastPrice"]') || 
                          document.querySelector('[class*="price-last"]');
      if (priceElement) {
        const price = parseFloat(priceElement.textContent.replace(/[^0-9.-]/g, ''));
        if (!isNaN(price)) {
          widgetFrame.contentWindow.postMessage({
            type: 'price-update',
            price: price,
            symbol: getCurrentSymbol()
          }, '*');
        }
      }
    }
  });
  
  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    createTradingWidget();
    monitorPriceUpdates();
  });
} else {
  createTradingWidget();
  monitorPriceUpdates();
}

// Add keyboard shortcut to toggle widget (Ctrl/Cmd + Shift + V)
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'V') {
    const widget = document.getElementById('volumetrica-widget');
    if (widget) {
      if (widget.style.display === 'none') {
        widget.style.display = 'block';
        updateWidgetSymbol();
      } else {
        widget.style.display = 'none';
      }
    }
  }
});