// Minimal test service worker to verify activation
console.log('Service worker starting...');

// Simple message handler
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Received message:', request);
  sendResponse({ success: true, message: 'Service worker is active!' });
  return true;
});

// Log when installed
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed/updated');
});

// Keep service worker alive
chrome.runtime.onStartup.addListener(() => {
  console.log('Browser started');
});

console.log('Service worker loaded successfully');

// Export to make it a valid ES module
export {};