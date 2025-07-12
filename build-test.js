import { copyFileSync, mkdirSync } from 'fs';

// Ensure dist directory exists
try {
  mkdirSync('dist', { recursive: true });
} catch (e) {}

// Copy test background script without bundling
copyFileSync('test-background.js', 'dist/background.js');

// Copy static files
const staticFiles = [
  'manifest.json',
  'popup.html',
  'icon-16.png',
  'icon-48.png',
  'icon-128.png'
];

for (const file of staticFiles) {
  try {
    copyFileSync(file, `dist/${file}`);
  } catch (e) {
    console.warn(`Warning: Could not copy ${file}:`, e.message);
  }
}

// Also copy a minimal popup.js
const minimalPopup = `
// Minimal popup for testing
document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  if (status) {
    status.textContent = 'Testing service worker...';
    
    // Send test message to background
    chrome.runtime.sendMessage({ type: 'test' }, (response) => {
      if (chrome.runtime.lastError) {
        status.textContent = 'Error: ' + chrome.runtime.lastError.message;
      } else {
        status.textContent = response.message || 'Service worker responded!';
      }
    });
  }
});
`;

import { writeFileSync } from 'fs';
writeFileSync('dist/popup.js', minimalPopup);

console.log('Test build complete! Load the dist/ folder as an unpacked extension.');