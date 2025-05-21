# IEEE Xplore TU Delft Proxy Redirector

A Firefox browser extension that automatically redirects IEEE Xplore requests through the TU Delft proxy server, providing seamless access to IEEE publications for TU Delft students and staff.

## Features

- Automatically redirects all requests to ieeexplore.ieee.org through the TU Delft proxy
- No user interaction required after installation
- Lightweight and fast performance
- Works in the background with no UI elements
- Respects user privacy and doesn't collect any data

## Installation

### From Mozilla Add-on Store (Recommended)
1. Visit the [Add-on Store page](https://addons.mozilla.org/) (link to be added after publication)
2. Click "Add to Firefox"
3. Follow the installation prompts

### Manual Installation
1. Download the latest .xpi file from the [Releases page](https://github.com/yourusername/ieee-redirect/releases)
2. In Firefox, open the Menu (≡) and select Add-ons
3. From the settings cog, select "Install Add-on From File..."
4. Navigate to and select the downloaded .xpi file

### Developer Installation
1. Clone this repository
2. Open Firefox and enter `about:debugging` in the address bar
3. Click "This Firefox" and then "Load Temporary Add-on"
4. Navigate to this project folder and select the `manifest.json` file

## Packaging for Distribution

To create a distributable package:

1. Zip all the files in this repository:
   ```bash
   zip -r ieee-redirect.xpi manifest.json background.js icons/ LICENSE README.md
   ```
2. The resulting `ieee-redirect.xpi` file can be distributed or submitted to the Mozilla Add-on store.

## How It Works

The extension uses Firefox's webRequest API to intercept all requests to ieeexplore.ieee.org and redirect them through the TU Delft proxy server (tudelft.idm.oclc.org). This provides authenticated access to IEEE publications for TU Delft students and staff.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- TU Delft Library for providing proxy access to academic resources
- IEEE Xplore for their valuable academic content

## Privacy Policy

This extension does not collect, store, or transmit any user data. It simply redirects certain web requests through a proxy server.