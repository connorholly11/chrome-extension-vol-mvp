# Chrome Extension MVP - Project Structure

This repository contains the Volumetrica Trading Extension with archived versions.

## Development Workflow

1. **Root directory** = Active development (currently TL-V1 side panel)
2. **versions/** = Completed/archived versions
3. When starting a new version, archive the current one to `versions/`

## Current Structure

```
chrome-extension-mvp/
├── sidepanel.html         # Active development: TL-V1 side panel UI
├── sidepanel.js           # Active development: TL-V1 side panel logic
├── background.js          # Service worker
├── manifest.json          # Current manifest
├── build.js               # Build script
├── package.json           # NPM scripts
│
├── dist/                  # Built extension output (load this in Chrome)
│
├── versions/              # Archived versions
│   ├── standard/          # Standard popup version (complete)
│   │   ├── popup.html     # Popup UI (420x600px)
│   │   ├── popup.js       # Popup logic
│   │   ├── background.js  # Service worker
│   │   ├── manifest.json  # Extension manifest (popup mode)
│   │   └── build.js       # Build script for popup version
│   │
│   └── tradingview-archive/   # Archived TradingView integration
│       ├── tradingview-content.js
│       ├── tradingview-widget.js
│       └── README.md
│
├── inspiration/           # Design reference files
└── [shared files]         # Protocol files, configs, etc.
```

## Version Descriptions

### Standard Version (`versions/standard/`)
- Original popup-based extension
- Opens as a popup window (420x600px) when clicking the extension icon
- Complete trading interface in a compact popup

### TL-V1 Version (`versions/tl-v1/`)
- Side panel implementation requested by TL
- Opens as a right-side browser panel
- Draggable divider between order section and tabs
- Requires Chrome 114+

### TradingView Archive (`tradingview-archive/`)
- Previous TradingView integration attempt
- Archived when project pivoted to standalone extension

## Building

Each version has its own build script:

```bash
# Build standard popup version
cd versions/standard
node build.js

# Build TL-V1 side panel version  
cd versions/tl-v1
node build.js
```

Both versions output to their local `dist/` folder.

## Current Status

- **Standard Version**: Working popup implementation
- **TL-V1 Version**: Side panel implementation (debugging in progress)
- **TradingView Archive**: Deprecated

## Notes

- All versions share the same core authentication and WebSocket logic
- Icon files are shared across versions
- Each version has its own manifest.json with appropriate configurations