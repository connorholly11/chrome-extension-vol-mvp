import { copyFileSync, mkdirSync } from 'fs';
import { build } from 'esbuild';

// Ensure dist directory exists
mkdirSync('dist', { recursive: true });

// Just copy the background script without bundling
copyFileSync('background-clean.js', 'dist/background.js');

// Build popup script (this can be bundled)
await build({
  entryPoints: ['popup.js'],
  bundle: true,
  format: 'iife',
  outfile: 'dist/popup.js',
  platform: 'browser',
  target: 'chrome90'
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
  } catch (e) {
    console.warn(`Warning: Could not copy ${file}:`, e.message);
  }
}

console.log('Build complete! Extension ready in dist/ folder.');