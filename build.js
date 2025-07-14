import { build } from 'esbuild';
import { copyFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// Ensure dist directory exists
try {
  mkdirSync('dist', { recursive: true });
} catch (e) {}

// Build background script
await build({
  entryPoints: ['background.js'],
  bundle: true,
  format: 'esm',
  outfile: 'dist/background.js',
  platform: 'browser',
  target: 'chrome90',
  external: [],
  // Important: These settings ensure proper ES module output
  splitting: false,
  minify: false,
  sourcemap: 'inline',
  define: {
    'global': 'globalThis',
  },
  loader: {
    '.js': 'js'
  }
});

// Build sidepanel script
await build({
  entryPoints: ['sidepanel.js'],
  bundle: true,
  format: 'iife',
  outfile: 'dist/sidepanel.js',
  platform: 'browser',
  target: 'chrome90'
});

// Copy static files
const staticFiles = [
  'manifest.json',
  'sidepanel.html',
  'icon-16.png',
  'icon-48.png',
  'icon-128.png',
  'tradingview-content.js',
  'proto-minimal.js'
];

for (const file of staticFiles) {
  try {
    copyFileSync(file, `dist/${file}`);
  } catch (e) {
    console.warn(`Warning: Could not copy ${file}:`, e.message);
  }
}

console.log('Build complete! Load the dist/ folder as an unpacked extension.');