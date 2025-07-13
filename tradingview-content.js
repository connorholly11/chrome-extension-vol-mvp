// TradingView content script for drawing order lines on charts
console.log('TradingView content script loaded');

// Helper function to get the active chart
function getChart() {
  // Check for TradingView widget in main window
  if (window.tvWidget && typeof window.tvWidget.activeChart === 'function') {
    return window.tvWidget.activeChart();
  }
  
  // Check for standalone chart
  if (window.TradingView && window.TradingView.activeChart) {
    return window.TradingView.activeChart();
  }
  
  // Check for chart in iframes
  const iframes = [...document.querySelectorAll('iframe')];
  for (const iframe of iframes) {
    try {
      const win = iframe.contentWindow;
      if (win?.TradingView?.widget) {
        return win.TradingView.widget.activeChart?.();
      }
      if (win?.tvWidget) {
        return win.tvWidget.activeChart?.();
      }
    } catch (e) {
      // Cross-origin iframe, skip
    }
  }
  
  return null;
}

// Store active orders and positions
const activeOrders = new Map();
const activePositions = new Map();

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('TradingView content script received message:', message.type);
  
  switch (message.type) {
    case 'drawLimitOrderLine':
      drawLimitOrder(message.symbol, message.price, message.side);
      sendResponse({ success: true });
      break;
      
    case 'updatePosition':
      updatePosition(message.symbol, message.quantity, message.avgPrice);
      sendResponse({ success: true });
      break;
      
    case 'positionsUpdate':
      overlayPositions(message.positions);
      sendResponse({ success: true });
      break;
      
    case 'ordersUpdate':
      overlayOrders(message.orders);
      sendResponse({ success: true });
      break;
      
    case 'removeOrder':
      removeOrder(message.orderId);
      sendResponse({ success: true });
      break;
      
    case 'clearAll':
      clearAllDrawings();
      sendResponse({ success: true });
      break;
      
    case 'setSymbol':
      setChartSymbol(message.symbol);
      sendResponse({ success: true });
      break;
      
    default:
      sendResponse({ success: false, error: 'Unknown message type' });
  }
});

// Draw a limit order line on the chart
function drawLimitOrder(symbol, price, side = 'BUY') {
  const chart = getChart();
  if (!chart) {
    console.warn('No active chart found');
    return;
  }
  
  // Check if chart symbol matches
  try {
    const chartSymbol = chart.symbol();
    if (!chartSymbol || !chartSymbol.includes(symbol)) {
      console.log(`Chart symbol ${chartSymbol} doesn't match order symbol ${symbol}`);
      return;
    }
  } catch (e) {
    console.warn('Unable to get chart symbol:', e);
  }
  
  const orderId = `order_${Date.now()}`;
  const color = side === 'BUY' ? '#14b8a6' : '#f87171';
  
  try {
    // Try to use the order line API if available
    if (typeof chart.createOrderLine === 'function') {
      const orderLine = chart.createOrderLine()
        .setText(`${side} LMT ${price}`)
        .setPrice(price)
        .setLineColor(color)
        .setLineStyle(0) // Solid line
        .setLineWidth(2)
        .setBodyBorderColor(color)
        .setBodyBackgroundColor(color)
        .setBodyTextColor('#ffffff')
        .setQuantity(1);
        
      activeOrders.set(orderId, orderLine);
      console.log(`Created order line for ${symbol} at ${price}`);
    } else if (typeof chart.createShape === 'function') {
      // Fallback to horizontal line
      const shape = chart.createShape(
        { time: Date.now() / 1000, price },
        {
          shape: 'horizontal_line',
          text: `${side} LMT ${price}`,
          disableSelection: false,
          disableSave: true,
          lock: false,
          overrides: {
            linewidth: 2,
            linecolor: color,
            linestyle: 0,
            showLabel: true,
            textcolor: '#ffffff',
            horzLabelsAlign: 'right'
          }
        }
      );
      
      activeOrders.set(orderId, shape);
      console.log(`Created horizontal line for ${symbol} at ${price}`);
    } else {
      console.warn('Chart API not available for drawing');
    }
  } catch (e) {
    console.error('Error drawing limit order:', e);
  }
}

// Update or create a position line
function updatePosition(symbol, quantity, avgPrice) {
  const chart = getChart();
  if (!chart) return;
  
  // Check if chart symbol matches
  try {
    const chartSymbol = chart.symbol();
    if (!chartSymbol || !chartSymbol.includes(symbol)) return;
  } catch (e) {
    return;
  }
  
  const positionId = `position_${symbol}`;
  const isLong = quantity > 0;
  const color = isLong ? '#10b981' : '#ef4444';
  
  // Remove existing position line
  if (activePositions.has(positionId)) {
    try {
      const existingLine = activePositions.get(positionId);
      if (existingLine && typeof existingLine.remove === 'function') {
        existingLine.remove();
      }
    } catch (e) {
      console.warn('Error removing existing position:', e);
    }
  }
  
  // Draw new position line if quantity is not zero
  if (quantity !== 0) {
    try {
      if (typeof chart.createPositionLine === 'function') {
        const positionLine = chart.createPositionLine()
          .setText(`${isLong ? 'LONG' : 'SHORT'} ${Math.abs(quantity)} @ ${avgPrice}`)
          .setPrice(avgPrice)
          .setLineColor(color)
          .setLineStyle(0)
          .setLineWidth(3)
          .setBodyBorderColor(color)
          .setBodyBackgroundColor(color)
          .setBodyTextColor('#ffffff')
          .setQuantity(Math.abs(quantity));
          
        activePositions.set(positionId, positionLine);
      } else if (typeof chart.createShape === 'function') {
        // Fallback to horizontal line
        const shape = chart.createShape(
          { time: Date.now() / 1000, price: avgPrice },
          {
            shape: 'horizontal_line',
            text: `${isLong ? 'LONG' : 'SHORT'} ${Math.abs(quantity)} @ ${avgPrice}`,
            disableSelection: false,
            disableSave: true,
            lock: false,
            overrides: {
              linewidth: 3,
              linecolor: color,
              linestyle: 0,
              showLabel: true,
              textcolor: '#ffffff',
              horzLabelsAlign: 'right',
              bold: true
            }
          }
        );
        
        activePositions.set(positionId, shape);
      }
    } catch (e) {
      console.error('Error drawing position:', e);
    }
  }
}

// Remove a specific order
function removeOrder(orderId) {
  if (activeOrders.has(orderId)) {
    try {
      const order = activeOrders.get(orderId);
      if (order && typeof order.remove === 'function') {
        order.remove();
      }
      activeOrders.delete(orderId);
    } catch (e) {
      console.warn('Error removing order:', e);
    }
  }
}

// Clear all drawings
function clearAllDrawings() {
  // Clear orders
  activeOrders.forEach((order, id) => {
    try {
      if (order && typeof order.remove === 'function') {
        order.remove();
      }
    } catch (e) {
      console.warn('Error removing order:', e);
    }
  });
  activeOrders.clear();
  
  // Clear positions
  activePositions.forEach((position, id) => {
    try {
      if (position && typeof position.remove === 'function') {
        position.remove();
      }
    } catch (e) {
      console.warn('Error removing position:', e);
    }
  });
  activePositions.clear();
}

// Bulk overlay functions
function overlayPositions(positions) {
  if (!positions || !Array.isArray(positions)) return;
  
  // Clear existing position markers
  activePositions.forEach((marker, id) => {
    try {
      if (marker && typeof marker.remove === 'function') {
        marker.remove();
      }
    } catch (e) {
      console.warn('Error removing position marker:', e);
    }
  });
  activePositions.clear();
  
  // Add new position markers
  positions.forEach(pos => {
    updatePosition(pos.symbol, pos.quantity, pos.avgPrice || pos.price);
  });
}

function overlayOrders(orders) {
  if (!orders || !Array.isArray(orders)) return;
  
  const chart = getChart();
  if (!chart) {
    console.warn('No active chart for orders overlay');
    return;
  }
  
  // Clear existing order markers
  activeOrders.forEach((marker, id) => {
    try {
      if (marker && typeof marker.remove === 'function') {
        marker.remove();
      }
    } catch (e) {
      console.warn('Error removing order marker:', e);
    }
  });
  activeOrders.clear();
  
  // Add new order markers
  orders.forEach(order => {
    if (order.orderType === 'LMT' || order.orderType === 'limit') {
      drawLimitOrder(order.symbol, order.price, order.side);
    }
  });
}

// Periodically check if we can access the chart (in case it loads late)
let retryCount = 0;
const maxRetries = 10;

function checkChartAvailability() {
  const chart = getChart();
  if (chart) {
    console.log('TradingView chart API available');
  } else if (retryCount < maxRetries) {
    retryCount++;
    setTimeout(checkChartAvailability, 2000);
  }
}

// Start checking after a delay
setTimeout(checkChartAvailability, 3000);

// Change symbol on the chart
function setChartSymbol(symbol) {
  const chart = getChart();
  if (!chart) {
    console.warn('No active chart found for symbol sync');
    return;
  }
  
  try {
    // Try various methods to set the symbol
    if (typeof chart.setSymbol === 'function') {
      chart.setSymbol(symbol.toUpperCase());
      console.log(`Changed TradingView chart to ${symbol}`);
    } else if (chart.symbolInterval && typeof chart.symbolInterval === 'function') {
      const currentInterval = chart.symbolInterval().interval;
      chart.setSymbolInterval(symbol.toUpperCase(), currentInterval);
      console.log(`Changed TradingView chart to ${symbol} with interval ${currentInterval}`);
    } else {
      console.warn('Chart API does not support symbol changes');
    }
  } catch (e) {
    console.error('Error changing chart symbol:', e);
  }
}