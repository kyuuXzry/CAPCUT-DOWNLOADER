```html
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,50:203a43,100:2c5364&height=180&section=header&text=CapCut%20Downloader&fontSize=50&fontAlignY=35&animation=twinkling&fontColor=ffffff" width="100%" />
  
  <br><br>

  <p>
    <a href="https://github.com/kyuuXzry/CAPCUT-DOWNLOADER/stargazers"><img src="https://img.shields.io/github/stars/kyuuXzry/CAPCUT-DOWNLOADER?style=for-the-badge&logo=github&color=2c5364" alt="Stars"></a>
    <a href="https://github.com/kyuuXzry/CAPCUT-DOWNLOADER/network/members"><img src="https://img.shields.io/github/forks/kyuuXzry/CAPCUT-DOWNLOADER?style=for-the-badge&logo=github&color=2c5364" alt="Forks"></a>
    <a href="https://github.com/kyuuXzry/CAPCUT-DOWNLOADER/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-2c5364?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="License"></a>
    <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"></a>
    <a href="https://github.com/WhiskeySockets/Baileys"><img src="https://img.shields.io/badge/Baileys-Latest-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Baileys"></a>
  </p>

  <br>
  
  <h3>High-Performance CapCut Scraper</h3>
  <p><em>Engineered specifically for WhatsApp Bots using Baileys. Fast, reliable, and watermark-free.</em></p>

  <br>

  <p>
    <a href="https://wa.me/628567126744"><img src="https://img.shields.io/badge/WhatsApp-Contact_Developer-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp"></a>
    <a href="https://instagram.com/rissxzry_"><img src="https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"></a>
    <a href="https://kyuudev.my.id"><img src="https://img.shields.io/badge/Website-Visit-0f2027?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website"></a>
  </p>
</div>

<br>

---

### 📌 Overview

This plugin is a high-performance CapCut scraper designed exclusively for WhatsApp bots powered by the **Baileys** library. It provides a seamless, buffer-based download method that guarantees the video is delivered to the user without the "stuck loading" issue often caused by direct CDN links.

### 🚀 Key Features

*   **No Watermark:** Extracts the original video directly from CapCut's servers.
*   **Buffer Processing:** Downloads the video into memory (`arraybuffer`) before sending it to WhatsApp, ensuring 100% delivery rate.
*   **Rich Metadata:** Automatically fetches the video title, file size, and thumbnail for a premium preview.
*   **Clean Error Handling:** Prevents the bot from crashing on invalid links or server timeouts.

---

### ⚙️ Prerequisites

Ensure your server environment meets the following requirements before installation:

<div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border-left: 5px solid #2c5364; font-family: monospace;">
  <span style="color: #8892b0;">$ node -v</span><br>
  <span style="color: #64ffda;">v18.17.0</span> <span style="color: #6272a4;">// Minimum version required</span><br><br>
  <span style="color: #8892b0;">$ npm install axios qs</span><br>
  <span style="color: #50fa7b;">added 2 packages in 1s</span>
</div>

---

### 📦 Installation Guide

1. Clone this repository or download the `capcut.js` file.
2. Locate the `plugins/` directory inside your WhatsApp bot project.
3. Move the `capcut.js` file into the `plugins/` directory.
4. Ensure your main file (e.g., `main.js` or `index.js`) has the plugin loader system enabled.
5. Restart your bot instance.

---

### 💻 Usage

Send the following command in any WhatsApp chat:

```text
.capcut https://www.capcut.com/tv2/ZSgjAC6WX/
```

<div style="background-color: #1c2128; padding: 10px; border-radius: 5px; border: 1px solid #30363d;">
  <strong>💡 Note:</strong> The bot will automatically fetch the metadata, process the video buffer, and return the video with a rich preview.
</div>

---

🛠️ Technical Configuration

This plugin follows the standard Baileys architecture. Ensure your bot's main execution context provides the following parameters to the plugin:

<table>
  <thead>
    <tr>
      <th align="left">Parameter</th>
      <th align="left">Data Type</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>m</code></td>
      <td><code>Object</code></td>
      <td>The incoming Baileys message object.</td>
    </tr>
    <tr>
      <td><code>conn</code></td>
      <td><code>Object</code></td>
      <td>The active Baileys socket connection object.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td><code>String</code></td>
      <td>The URL following the command.</td>
    </tr>
    <tr>
      <td><code>command</code></td>
      <td><code>String</code></td>
      <td>The invoked command name.</td>
    </tr>
    <tr>
      <td><code>usedPrefix</code></td>
      <td><code>String</code></td>
      <td>The command prefix (e.g., <code>.</code>).</td>
    </tr>
  </tbody>
</table>

---

📄 License & Credits

Distributed under the MIT License. Free to use and modify.

<details>
<summary>📜 <strong>Click to view full MIT License</strong></summary>
<br>

```text
MIT License

Copyright (c) 2026 KyuuAI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

<br>

<div align="center">
  <p>Engineered with precision by <strong><a href="https://github.com/kyuuXzry">KyuuXzry</a></strong>.</p>
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2c5364,50:203a43,100:0f2027&height=100&section=footer" width="100%" />
</div>
```