<div align="center">
  <!-- HERO SECTION -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,50:203a43,100:2c5364&height=200&section=header&text=CapCut%20Downloader&fontSize=50&fontAlignY=35&animation=twinkling&fontColor=ffffff" width="100%" />
  
  <br><br>

  <!-- BADGES SECTION -->
  <p>
    <a href="https://github.com/kyuuai/capcut-downloader/stargazers"><img src="https://img.shields.io/github/stars/kyuuai/capcut-downloader?style=for-the-badge&logo=github&color=2c5364" alt="Stars"></a>
    <a href="https://github.com/kyuuai/capcut-downloader/network/members"><img src="https://img.shields.io/github/forks/kyuuai/capcut-downloader?style=for-the-badge&logo=github&color=2c5364" alt="Forks"></a>
    <a href="https://github.com/kyuuai/capcut-downloader/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-2c5364?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="License"></a>
    <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"></a>
    <a href="https://github.com/WhiskeySockets/Baileys"><img src="https://img.shields.io/badge/Baileys-Latest-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Baileys"></a>
  </p>
  
  <p>
    <a href="https://wa.me/628567126744"><img src="https://img.shields.io/badge/WhatsApp-Contact-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp"></a>
    <a href="https://instagram.com/Rissxzry_"><img src="https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"></a>
  </p>

  <h3>High-Performance CapCut Downloader for WhatsApp Bots</h3>
  <p><em>Engineered specifically for Baileys. Fast, reliable, and watermark-free.</em></p>
</div>

<br>

---

<div style="display: flex; justify-content: space-between; gap: 20px;">
  <div style="flex: 1;">
    <h3>📌 Overview</h3>
    <p>Plugin ini didesain khusus untuk para developer bot WhatsApp yang menggunakan library <strong>Baileys</strong>. Memungkinkan pengguna untuk mengunduh video dari CapCut tanpa watermark dengan kecepatan tinggi dan stabilitas maksimal.</p>
  </div>
  <div style="flex: 1;">
    <h3>🚀 Key Features</h3>
    <ul>
      <li><strong>No Watermark:</strong> Video bersih tanpa logo CapCut.</li>
      <li><strong>Buffer Processing:</strong> Anti-gagal kirim (stuck loading).</li>
      <li><strong>Rich Metadata:</strong> Menampilkan judul, ukuran, dan thumbnail.</li>
      <li><strong>Clean Code:</strong> Menggunakan <code>axios</code> dan <code>qs</code> tanpa library berlebihan.</li>
    </ul>
  </div>
</div>

---

### ⚙️ Prerequisites

Pastikan *environment* server atau VPS kalian sudah memenuhi syarat berikut sebelum melakukan instalasi:

<div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; border-left: 5px solid #2c5364; font-family: monospace;">
  <span style="color: #8892b0;">$ node -v</span><br>
  <span style="color: #64ffda;">v18.17.0</span> <span style="color: #6272a4;">// Minimal versi 18.x</span><br><br>
  <span style="color: #8892b0;">$ npm install axios qs</span><br>
  <span style="color: #50fa7b;">added 2 packages in 1s</span>
</div>

---

### 📦 Installation Guide

Ikuti langkah-langkah berikut untuk memasang plugin di *base* bot kalian:

1. Clone repository ini atau download file `capcut.js`.
2. Buka folder `plugins/` di dalam project bot WhatsApp kalian.
3. Pindahkan file `capcut.js` tersebut ke dalam folder `plugins/`.
4. Pastikan file `main.js` atau `index.js` bot kalian sudah memuat sistem *plugin loader*.
5. Restart bot kalian (contoh: `pm2 restart all` atau `node main.js`).

---

### 💻 Usage

Kirimkan perintah berikut di chat WhatsApp (contoh menggunakan prefix `.`):

```text
.capcut https://www.capcut.com/tv2/ZSgjAC6WX/