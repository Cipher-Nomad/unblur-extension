# Remove Blur Filter Extension

This browser extension removes the `filter: blur()` CSS property from all elements on any website. It ensures that blur filters applied via inline styles, computed styles, and stylesheets are removed, including dynamically added elements.

## Installation

1. **Clone the Repository or Download the Files**:

   - Clone this repository or download the extension files to your local machine.

2. **Add Manifest File**:

   - Ensure `manifest.json` is in the project folder. This file configures the extension's metadata and settings.

3. **Content Script**:

   - Include `content.js` in the project folder. This script handles the logic to remove `filter: blur()` styles from webpages.

4. **Optional: Add an Icon**:
   - Place `icon.png` in the project folder to set an icon for the extension in the browser toolbar.

## Loading the Extension

### Google Chrome:

1. Open Chrome and go to `chrome://extensions/`.
2. Enable "Developer mode" (toggle switch in the top right corner).
3. Click "Load unpacked" and select your extension folder containing `manifest.json`, `content.js`, and `icon.png`.

### Mozilla Firefox:

1. Open Firefox and go to `about:debugging`.
2. Click on "This Firefox" in the sidebar.
3. Click "Load Temporary Add-on" and select any file in your extension folder.

## Testing

1. Open a new tab and navigate to any website.
2. Verify that the extension removes `filter: blur()` styles from elements on the page.
3. Ensure dynamically added elements are also handled correctly.

## Contributing

- Contributions, bug reports, and suggestions are welcome.
- Open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.
