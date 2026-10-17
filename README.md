<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&height=250&text=CapCut%20Downloader&fontSize=48&color=0:0F172A,50:164E63,100:0891B2&stroke=0891B2&fontColor=FFFFFF&animation=fadeIn&fontAlignY=55&desc=Fast%20%E2%80%A2%20Simple%20%E2%80%A2%20Powerful&descSize=16&descAlignY=75" width="100%" />

<br>

### A Powerful CapCut Downloader for WhatsApp Bots

A lightweight CapCut scraper built for WhatsApp bots powered by Baileys.

<br>

<a href="https://github.com/kyuuXzry/CAPCUT-DOWNLOADER/stargazers">
  <img src="https://img.shields.io/github/stars/kyuuXzry/CAPCUT-DOWNLOADER?style=flat-square&logo=github&label=Stars&color=0891B2" alt="GitHub Stars">
</a>
<a href="https://github.com/kyuuXzry/CAPCUT-DOWNLOADER/network/members">
  <img src="https://img.shields.io/github/forks/kyuuXzry/CAPCUT-DOWNLOADER?style=flat-square&logo=github&label=Forks&color=155E75" alt="GitHub Forks">
</a>
<a href="https://github.com/kyuuXzry/CAPCUT-DOWNLOADER">
  <img src="https://img.shields.io/github/repo-size/kyuuXzry/CAPCUT-DOWNLOADER?style=flat-square&logo=github&label=Repo%20Size&color=334155" alt="Repository Size">
</a>
<a href="https://nodejs.org/">
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js">
</a>
<a href="https://github.com/WhiskeySockets/Baileys">
  <img src="https://img.shields.io/badge/Baileys-Compatible-25D366?style=flat-square&logo=whatsapp&logoColor=white" alt="Baileys">
</a>

<br><br>

<a href="https://wa.me/628567126744">
  <img src="https://img.shields.io/badge/WhatsApp-Contact_Developer-25D366?style=flat-square&logo=whatsapp&logoColor=white" alt="WhatsApp">
</a>
<a href="https://instagram.com/rissxzry_">
  <img src="https://img.shields.io/badge/Instagram-Follow_Me-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram">
</a>
<a href="https://kyuudev.my.id">
  <img src="https://img.shields.io/badge/Website-Visit_Now-0891B2?style=flat-square&logo=googlechrome&logoColor=white" alt="Website">
</a>

</div>

---

## ✨ Overview

**CapCut Downloader** is a Node.js plugin designed to download CapCut videos through WhatsApp bots powered by the Baileys library.

The plugin retrieves video information and processes video data before sending it to WhatsApp, helping provide a smoother download experience.

## 🚀 Features

<table>
<tr>
<td width="50%">

### ⚡ Efficient Processing

Processes video data before sending it to WhatsApp.

</td>
<td width="50%">

### 🎬 Video Downloader

Download CapCut videos directly through a WhatsApp command.

</td>
</tr>
<tr>
<td width="50%">

### 🧩 Baileys Integration

Designed for WhatsApp bot projects using Baileys.

</td>
<td width="50%">

### 🛡️ Error Handling

Handles invalid URLs and download errors gracefully.

</td>
</tr>
<tr>
<td width="50%">

### 📝 Video Metadata

Supports video information such as titles and thumbnails when available.

</td>
<td width="50%">

### 🔧 Easy Integration

A simple plugin structure for compatible bot systems.

</td>
</tr>
</table>

---

## ⚙️ Requirements

Make sure your environment has the following:

| Requirement | Description |
|:--|:--|
| Node.js | Version 18 or newer |
| npm | Package manager |
| Axios | HTTP request handling |
| qs | Query-string utilities |
| Baileys | WhatsApp connection library |

### Install Dependencies

```bash
npm install axios qs
```

> **Note:** Baileys should already be installed in your WhatsApp bot project.

---

## 📦 Installation

### 01. Clone the Repository

```bash
git clone https://github.com/kyuuXzry/CAPCUT-DOWNLOADER.git
```

### 02. Locate the Plugin

Find the `plugins/` directory inside your WhatsApp bot project.

### 03. Add the File

Move `capcut.js` into the `plugins/` directory.

### 04. Check Compatibility

Ensure your bot supports the plugin's handler structure and provides the required Baileys connection object.

### 05. Restart Your Bot

Restart your bot process to load the plugin.

---

## 💻 Usage

Send the following command in a WhatsApp chat:

```text
.capcut https://www.capcut.com/tv2/ZSgjAC6WX/
```

### How It Works

```text
       CAPCUT URL
           |
           v
   FETCH VIDEO DATA
           |
           v
   PROCESS VIDEO BUFFER
           |
           v
    SEND TO WHATSAPP
           |
           v
       VIDEO READY
```

Simple, straightforward, and easy to integrate into a compatible WhatsApp bot.

---

## 🛠️ Plugin Configuration

The plugin handler expects the following parameters from a compatible bot system:

| Parameter | Type | Description |
|:--|:--|:--|
| `m` | Object | Incoming WhatsApp message |
| `conn` | Object | Active Baileys socket connection |
| `text` | String | URL provided after the command |
| `command` | String | Executed command name |
| `usedPrefix` | String | Prefix used to invoke the command |

> **Compatibility:** The exact handler structure may vary depending on your WhatsApp bot framework. Adjust the integration if your project uses different parameter names.

---

## 📱 Contact & Support

Have questions or want to explore more projects?

<div align="center">

<a href="https://wa.me/628567126744">
  <img src="https://img.shields.io/badge/WhatsApp-Get_in_Touch-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
</a>

<a href="https://instagram.com/rissxzry_">
  <img src="https://img.shields.io/badge/Instagram-Follow_Me-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
</a>

<a href="https://kyuudev.my.id">
  <img src="https://img.shields.io/badge/Website-Visit_Now-0891B2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website">
</a>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0F172A,50:164E63,100:0891B2&height=2" width="100%">

<br>

### Thanks for Visiting!

If you find this project useful, consider giving the repository a ⭐

<a href="https://github.com/kyuuXzry/CAPCUT-DOWNLOADER/stargazers">
  <img src="https://img.shields.io/badge/⭐_Star_This_Repository-0891B2?style=for-the-badge&logo=github&logoColor=white" alt="Star This Repository">
</a>

<br><br>

**Explore more projects by KyuuXzry.**

<a href="https://github.com/kyuuXzry">
  <img src="https://img.shields.io/badge/GitHub-kyuuXzry-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile">
</a>

<br><br>

<sub>Built for developers. Designed for simplicity.</sub>

<br><br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0891B2,50:164E63,100:0F172A&height=100&section=footer" width="100%">

</div>