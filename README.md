<div align="center">
  <h1>CapCut Downloader Plugin</h1>
  <p><strong>WhatsApp Bot Plugin for Baileys</strong></p>
  
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
  <img src="https://img.shields.io/badge/Baileys-ED1C24?style=for-the-badge&logo=baileys&logoColor=white" alt="Baileys" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />

  <br><br>

  <a href="https://wa.me/628567126744">
    <img src="https://img.shields.io/badge/WhatsApp-Contact-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
  </a>
  <a href="https://instagram.com/Rissxzry_">
    <img src="https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
  </a>
</div>

<br>

<h2>📌 Overview</h2>
<p>This plugin provides a reliable solution for downloading videos from <strong>CapCut</strong> without watermarks. Designed specifically for WhatsApp bots utilizing the <em>Baileys</em> library, it integrates seamlessly into standard plugin architectures and ensures high-quality media delivery.</p>

<hr>

<h2>⚙️ Prerequisites</h2>
<p>Ensure your environment meets the following requirements before installation:</p>
<ul>
  <li><strong>Node.js</strong> version 18.x or higher.</li>
  <li><strong>Required Dependencies:</strong> <code>axios</code> and <code>qs</code>.</li>
</ul>

<p>Install the necessary dependencies using npm:</p>
<pre><code>npm install axios qs</code></pre>

<hr>

<h2>🚀 Installation Guide</h2>
<ol>
  <li>Clone this repository or download the source code.</li>
  <li>Locate the <code>plugins/</code> directory within your WhatsApp bot project.</li>
  <li>Copy the <code>capcut.js</code> file into the <code>plugins/</code> directory.</li>
  <li>Restart your bot instance to load the new plugin.</li>
</ol>

<hr>

<h2>💻 Usage</h2>
<p>To use the downloader, send the following command in a WhatsApp chat:</p>
<pre><code>.capcut https://www.capcut.com/tv2/ZSgjAC6WX/</code></pre>
<p><em>Note: Replace the example URL with the target CapCut link you wish to download.</em></p>

<hr>

<h2>✨ Features</h2>
<ul>
  <li><strong>No Watermark:</strong> Downloads the original video without any CapCut branding.</li>
  <li><strong>Buffer Processing:</strong> Utilizes buffer arrays to guarantee stable and instant video delivery to WhatsApp.</li>
  <li><strong>Rich Metadata:</strong> Displays file title, size, and a thumbnail preview.</li>
  <li><strong>Error Handling:</strong> Robust validation for URLs and comprehensive error logging.</li>
</ul>

<hr>

<h2>📝 Configuration</h2>
<p>This plugin is built to work with standard Baileys parameters. Ensure your bot's main file passes the following objects:</p>
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>m</code></td>
      <td>The Baileys message object.</td>
    </tr>
    <tr>
      <td><code>conn</code></td>
      <td>The Baileys socket connection object.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>The message content following the command.</td>
    </tr>
    <tr>
      <td><code>command</code></td>
      <td>The invoked command name.</td>
    </tr>
    <tr>
      <td><code>usedPrefix</code></td>
      <td>The active prefix (e.g., <code>.</code>).</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>📄 License</h2>
<p>This project is licensed under the MIT License. See the full text below for details.</p>

<pre><code>MIT License

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
</code></pre>

<hr>

<div align="center">
  <h3>Contact Developer</h3>
  <p>
    <a href="https://wa.me/628567126744"><strong>WhatsApp:</strong> +62 856-7126-744</a> | 
    <a href="https://instagram.com/Rissxzry_"><strong>Instagram:</strong> @Rissxzry_</a>
  </p>
  <br>
  <p>&copy; 2026 KyuuAI. All rights reserved.</p>
  <p><em>Developed for the WhatsApp Bot Community.</em></p>
</div>