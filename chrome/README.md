# IEEE Xplore TU Delft Proxy Redirector

A Chrome browser extension that automatically redirects IEEE Xplore requests through the TU Delft proxy server, providing seamless access to IEEE publications for TU Delft students and staff.

## Features

- Automatically redirects all requests to ieeexplore.ieee.org through the TU Delft proxy
- No user interaction required after installation
- Lightweight and fast performance
- Works in the background with no UI elements
- Respects user privacy and doesn't collect any data

## Installation

### From Chrome Web Store (Recommended)
1. Visit the [Chrome Web Store page](https://chrome.google.com/webstore/category/extensions) (link to be added after publication)
2. Click "Add to Chrome"
3. Follow the installation prompts

### Manual Installation
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top-right corner
4. Click "Load unpacked"
5. Navigate to and select the `chrome` folder from this repository

## Packaging for Distribution

To create a distributable package:

1. Zip all the files in the `chrome` directory:
   ```bash
   cd chrome && zip -r ieee-redirect-chrome.zip manifest.json background.js rules.json icons/ LICENSE README.md
   ```
2. The resulting `ieee-redirect-chrome.zip` file can be distributed or submitted to the Chrome Web Store.

## How It Works

The extension uses Chrome's Declarative Net Request API to intercept all requests to ieeexplore.ieee.org and redirect them through the TU Delft proxy server (tudelft.idm.oclc.org). This provides authenticated access to IEEE publications for TU Delft students and staff.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- TU Delft Library for providing proxy access to academic resources
- IEEE Xplore for their valuable academic content

## Privacy Policy

This extension does not collect, store, or transmit any user data. It simply redirects certain web requests through a proxy server.
