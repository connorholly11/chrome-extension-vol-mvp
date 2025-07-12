// Content script for TradingView integration
console.log('Volumetrica TradingView content script loaded');

// Add a visual indicator that our extension is active
setTimeout(() => {
  console.log('Checking for Volumetrica widget...');
  const widget = document.getElementById('volumetrica-widget');
  if (widget) {
    console.log('Volumetrica widget found and should be visible');
  } else {
    console.log('Widget not found, creating now...');
    createTradingWidget();
  }
  
  // Try to hijack TradingView's Trade button
  hijackTradeButton();
}, 1000);

// Function to replace TradingView's trade button functionality
function hijackTradeButton() {
  // Watch for trade button clicks
  document.addEventListener('click', (e) => {
    // Check if clicked element is a trade button
    const target = e.target;
    const isTradeButton = 
      target.textContent?.includes('Trade') ||
      target.getAttribute('data-name')?.includes('trade') ||
      target.closest('[data-name*="trade"]') ||
      target.closest('button')?.textContent?.includes('Trade');
    
    if (isTradeButton) {
      console.log('Trade button clicked, showing Volumetrica widget');
      e.preventDefault();
      e.stopPropagation();
      
      // Show our widget instead
      const widget = document.getElementById('volumetrica-widget');
      if (widget) {
        if (widget.style.transform === 'translateX(0)') {
          hideWidget();
        } else {
          showWidget();
        }
      }
    }
  }, true); // Use capture phase
}

// Also monitor for TradingView's native panel
setInterval(() => {
  // Hide TradingView's native trading panel if it appears
  const nativePanels = document.querySelectorAll('[data-name="trading-panel"], [class*="tradingPanel"], [class*="broker-widget"]');
  nativePanels.forEach(panel => {
    if (panel && !panel.hasAttribute('data-hidden-by-volumetrica')) {
      panel.style.display = 'none';
      panel.setAttribute('data-hidden-by-volumetrica', 'true');
      console.log('Hidden native TradingView panel');
    }
  });
}, 1000);

let widgetFrame = null;
let isDragging = false;
let dragOffset = { x: 0, y: 0 };

// Declare functions before they're used
let showWidget, hideWidget;

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
    top: 0;
    right: 0;
    width: 320px;
    height: 100vh;
    z-index: 9999;
    background: #131722;
    border-left: 1px solid #2a2e39;
    overflow: hidden;
    display: none;
    transition: transform 0.3s ease;
    transform: translateX(100%);
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
  
  // Create resize handle
  const resizeHandle = document.createElement('div');
  resizeHandle.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    cursor: ew-resize;
    background: transparent;
    z-index: 10;
  `;
  
  resizeHandle.addEventListener('mouseenter', () => {
    resizeHandle.style.background = '#2962ff';
  });
  
  resizeHandle.addEventListener('mouseleave', () => {
    resizeHandle.style.background = 'transparent';
  });
  
  // Resize functionality
  let isResizing = false;
  resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isResizing) {
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth >= 240 && newWidth <= 600) {
        widgetContainer.style.width = newWidth + 'px';
      }
    }
  });
  
  document.addEventListener('mouseup', () => {
    isResizing = false;
  });
  
  widgetContainer.appendChild(resizeHandle);
  widgetContainer.appendChild(iframe);
  document.body.appendChild(widgetContainer);
  
  // Listen for messages from iframe
  window.addEventListener('message', (event) => {
    if (event.source !== widgetFrame.contentWindow) return;
    
    if (event.data.type === 'close-widget') {
      widgetContainer.style.display = 'none';
    }
  });
  
  // Function to show widget
  showWidget = function() {
    widgetContainer.style.display = 'block';
    setTimeout(() => {
      widgetContainer.style.transform = 'translateX(0)';
      adjustChartWidth();
      updateWidgetSymbol();
    }, 10);
  }
  
  // Function to hide widget
  hideWidget = function() {
    widgetContainer.style.transform = 'translateX(100%)';
    setTimeout(() => {
      widgetContainer.style.display = 'none';
      resetChartWidth();
    }, 300);
  }
  
  // Adjust chart width when widget opens
  function adjustChartWidth() {
    const chart = document.querySelector('.chart-container, [class*="chart"], #main-content');
    if (chart) {
      chart.style.marginRight = widgetContainer.style.width;
      chart.style.transition = 'margin-right 0.3s ease';
    }
  }
  
  // Reset chart width when widget closes
  function resetChartWidth() {
    const chart = document.querySelector('.chart-container, [class*="chart"], #main-content');
    if (chart) {
      chart.style.marginRight = '0';
    }
  }
  
  // Listen for messages from extension
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'toggle-widget' || request.type === 'show-widget') {
      if (widgetContainer.style.transform === 'translateX(100%)' || widgetContainer.style.display === 'none') {
        showWidget();
      } else {
        hideWidget();
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