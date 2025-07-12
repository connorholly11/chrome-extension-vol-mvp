import { build } from 'esbuild';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

// Ensure dist directory exists
try {
  mkdirSync('dist', { recursive: true });
} catch (e) {}

// Build background script with proper ES module handling
await build({
  entryPoints: ['background-fixed.js'],
  bundle: true,
  format: 'esm',
  outfile: 'dist/background.js',
  platform: 'browser',
  target: 'chrome90',
  // Don't bundle these - let Chrome handle ES module imports
  external: ['./config.js', './proto-wrapper.js'],
  // Ensure proper ES module output
  splitting: false,
  minify: false,
  sourcemap: false,
  // Handle global references
  define: {
    'global': 'globalThis',
  }
});

// Copy config.js separately (it's imported as ES module)
try {
  copyFileSync('config.js', 'dist/config.js');
  console.log('Copied config.js');
} catch (e) {
  console.warn('Warning: Could not copy config.js:', e.message);
}

// Build popup script
await build({
  entryPoints: ['popup.js'],
  bundle: true,
  format: 'iife',
  outfile: 'dist/popup.js',
  platform: 'browser',
  target: 'chrome90',
  minify: false
});

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
    console.log(`Copied ${file}`);
  } catch (e) {
    console.warn(`Warning: Could not copy ${file}:`, e.message);
  }
}

console.log('\n=== Build Complete ===');
console.log('1. Load the dist/ folder as an unpacked extension in Chrome');
console.log('2. Check the service worker status in chrome://extensions');
console.log('3. Click "Inspect views: service worker" to see console logs');
console.log('4. If the service worker is inactive, click the extension icon to activate it');
console.log('====================\n');