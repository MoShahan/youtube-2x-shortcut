# YouTube Quick 2x Toggle ⚡

A lightweight UserScript designed for Brave and other Chromium-based browsers that adds a dedicated **2x** speed button to the YouTube video player. 

No more digging through the "Settings > Playback Speed" menu. One click to speed up, one click to return to normal.

---

## ✨ Features

* **Instant Access:** Adds a button directly to the left of the settings (gear) icon.
* **Visual Feedback:** * **Idle:** Small and thin text to blend into the UI.
    * **Active (2x):** Bold and enlarged text so you know speed is boosted.
* **Trusted Security:** Built to bypass YouTube's "TrustedHTML" security policies.
* **Dynamic Loading:** Works seamlessly as you navigate between videos without needing to refresh.

## 🚀 Installation

### 1. Install a Script Manager
You need an extension to run UserScripts. I recommend:
* [Tampermonkey](https://www.tampermonkey.net/) (Best for Brave/Chrome)
* [Violentmonkey](https://violentmonkey.github.io/)

### 2. Add the Script
1. Click on your Script Manager icon in the browser toolbar.
2. Select **"Create a new script"**.
3. Copy the code from `youtube-2x-toggle.user.js` in this repository.
4. Paste it into the editor and press `Ctrl + S` (Save).

### 3. Usage
Open any YouTube video. Look for the **2x** icon in the bottom right control bar.
* **Click once:** Switch to 2.0x speed.
* **Click again:** Switch back to 1.0x speed.

## 🛠 Technical Details

The script uses a `MutationObserver` to ensure the button remains visible even when YouTube's single-page navigation swaps video content. It specifically avoids `innerHTML` to remain compliant with modern browser security headers (`TrustedHTML`).

## ⚖️ License
MIT
