// Content script for TradingView integration
console.log('Volumetrica TradingView content script loaded');

// Listen for messages from extension at top level
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'show-widget') {
    showWidget();
    sendResponse({ success: true });
  } else if (request.type === 'toggle-widget') {
    toggleWidget();
    sendResponse({ success: true });
  }
  return true;
});


let widgetFrame = null;
let isDragging = false;
let dragOffset = { x: 0, y: 0 };

// Global functions for widget control
let widgetContainer = null;

// Function to show widget
function showWidget() {
  if (!widgetContainer) return;
  widgetContainer.style.display = 'block';
  setTimeout(() => {
    widgetContainer.style.transform = 'translateX(0)';
    const widgetWidth = parseInt(widgetContainer.style.width) || 320;
    adjustPageLayout(widgetWidth);
    updateWidgetSymbol();
  }, 10);
}

// Function to hide widget
function hideWidget() {
  if (!widgetContainer) return;
  widgetContainer.style.transform = 'translateX(100%)';
  adjustPageLayout(0);
  setTimeout(() => {
    widgetContainer.style.display = 'none';
  }, 300);
}

// Toggle widget
function toggleWidget() {
  if (widgetContainer && widgetContainer.style.transform === 'translateX(0)') {
    hideWidget();
  } else {
    showWidget();
  }
}

// Function to adjust page layout when widget is shown/hidden
function adjustPageLayout(widgetWidth) {
  const body = document.body;
  const app = document.querySelector('#onetradingview-app') || body;
  const floatingBtn = document.getElementById('volumetrica-floating-btn');
  
  if (widgetWidth > 0) {
    // Push page content to the left
    body.style.marginRight = `${widgetWidth}px`;
    body.style.transition = 'margin-right 0.3s ease';
    app.style.width = `calc(100% - ${widgetWidth}px)`;
    app.style.transition = 'width 0.3s ease';
    
    // Move floating button to the left of the widget
    if (floatingBtn) {
      floatingBtn.style.right = `${widgetWidth + 20}px`;
    }
  } else {
    // Restore full width
    body.style.marginRight = '0';
    app.style.width = '100%';
    
    // Move floating button back to original position
    if (floatingBtn) {
      floatingBtn.style.right = '20px';
    }
  }
}

// Function to create floating button
function createFloatingButton() {
  // Check if button already exists
  if (document.getElementById('volumetrica-floating-btn')) {
    return;
  }
  
  const floatingBtn = document.createElement('button');
  floatingBtn.id = 'volumetrica-floating-btn';
  floatingBtn.innerHTML = '📊';
  floatingBtn.title = 'Open Volumetrica Trading Panel (Ctrl+B)';
  floatingBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2962ff;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 9998;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
  `;
  
  floatingBtn.addEventListener('mouseenter', () => {
    floatingBtn.style.transform = 'scale(1.1)';
  });
  
  floatingBtn.addEventListener('mouseleave', () => {
    floatingBtn.style.transform = 'scale(1)';
  });
  
  floatingBtn.addEventListener('click', () => {
    if (typeof toggleWidget === 'function') {
      toggleWidget();
    } else {
      // If toggleWidget isn't defined yet, try to show the widget directly
      const widget = document.getElementById('volumetrica-widget');
      if (widget && typeof showWidget === 'function') {
        showWidget();
      }
    }
  });
  
  document.body.appendChild(floatingBtn);
}

// Function to create and inject the trading widget
function createTradingWidget() {
  // Check if widget already exists
  if (document.getElementById('volumetrica-widget')) {
    console.log('Widget already exists');
    // Make sure global functions are still accessible
    widgetContainer = document.getElementById('volumetrica-widget');
    return;
  }
  
  // Create widget container
  widgetContainer = document.createElement('div');
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
        // Adjust page layout while resizing
        if (widgetContainer.style.transform === 'translateX(0)') {
          adjustPageLayout(newWidth);
        }
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
      hideWidget();
    } else if (event.data.type === 'request-symbol') {
      // Widget is requesting initial symbol/price
      updateWidgetSymbol();
    }
  });
  
  // Make functions globally accessible
  window.showWidget = showWidget;
  window.hideWidget = hideWidget;
  window.toggleWidget = toggleWidget;
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
  let lastPrice = null;
  let lastUpdateTime = 0;
  const UPDATE_THROTTLE = 200; // Throttle updates to every 200ms
  
  // Create a mutation observer to watch for price changes
  const observer = new MutationObserver(() => {
    const now = Date.now();
    if (now - lastUpdateTime < UPDATE_THROTTLE) return;
    
    if (widgetFrame && document.getElementById('volumetrica-widget').style.display !== 'none') {
      // More robust price selectors
      const priceElement = document.querySelector('[data-last-price]') ||
                          document.querySelector('[class*="lastPrice"]') || 
                          document.querySelector('[class*="price-last"]') ||
                          document.querySelector('[data-qa-name="last-price"]');
      
      if (priceElement) {
        const price = parseFloat(priceElement.textContent.replace(/[^0-9.-]/g, ''));
        if (!isNaN(price) && price !== lastPrice) {
          lastPrice = price;
          lastUpdateTime = now;
          widgetFrame.contentWindow.postMessage({
            type: 'price-update',
            price: price,
            symbol: getCurrentSymbol()
          }, '*');
        }
      }
    }
  });
  
  // Start observing with more targeted approach
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['data-last-price']
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    createTradingWidget();
    createFloatingButton();
    monitorPriceUpdates();
  });
} else {
  createTradingWidget();
  createFloatingButton();
  monitorPriceUpdates();
}

// Add keyboard shortcut to toggle widget (Ctrl/Cmd + B)
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Z') {
    e.preventDefault();
    if (toggleWidget) {
      toggleWidget();
    }
  }
});