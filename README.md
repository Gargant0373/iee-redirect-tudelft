# IEEE Xplore TU Delft Proxy Redirector

A browser extension that automatically redirects IEEE Xplore requests through the TU Delft proxy server, providing seamless access to IEEE publications for TU Delft students and staff.

## Supported Browsers

This repository contains extensions for multiple browsers:

- [Firefox Extension](./firefox/): Firefox addon using Manifest V2
- [Chrome Extension](./chrome/): Chrome extension using Manifest V3

## Features

- Automatically redirects all requests to ieeexplore.ieee.org through the TU Delft proxy
- No user interaction required after installation
- Works in the background with no UI elements
- Lightweight and fast performance

## Installation

### Firefox
- [Installation instructions](./firefox/README.md)
- Firefox addon file: `firefox/ieee-redirect.xpi`

### Chrome
- [Installation instructions](./chrome/README.md)
- Chrome extension file: `chrome/ieee-redirect-chrome.zip`

## Development

Each browser extension is contained in its respective directory with its own README and manifest files. The main functionality is the same, but implementation details differ due to browser-specific APIs:

- Firefox uses the WebRequest API with blocking capability
- Chrome uses the Declarative Net Request API (Manifest V3 compliant)

## License

This project is licensed under the MIT License.