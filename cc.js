/*
 * © KyuuAI
 * WhatsApp : 62856726744
 * Instagram : Rissxzry_
 * Jangan hapus credit, hargai creator
 *
 * WAJIB UBAH SESUAI STRUKTUR BOT KALIAN MASING-MASING!
 * Kode ini menggunakan struktur standar Baileys (m, conn, text, command, usedPrefix).
 * Jika base bot kalian berbeda, sesuaikan parameter dan pemanggilan fungsinya.
 *
 * Plugin: CapCut Downloader
 * API: capdownloader.com
 */

const axios = require('axios');
const qs = require('qs');

module.exports = async (m, { conn, text, command, usedPrefix }) => {
    if (!['capcut', 'capcutdl', 'capcutdownload'].includes(command)) return;

    if (!text || !text.includes('capcut.com')) {
        return m.reply(
            `*CAPCUT DOWNLOADER*\n\n` +
            `Format: ${usedPrefix + command} [url]\n` +
            `Example: ${usedPrefix + command} https://www.capcut.com/tv2/xxxx/`
        );
    }

    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    try {
        const apiUrl = 'https://capdownloader.com/api/video-data.php';
        const payload = qs.stringify({ url: text });

        const headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Origin': 'https://capdownloader.com',
            'Referer': 'https://capdownloader.com/id/',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
        };

        const response = await axios.post(apiUrl, payload, { headers, timeout: 30000 });
        const data = response.data;

        if (!data || !data.medias || data.medias.length === 0) {
            throw new Error('Metadata retrieval failed. The server returned an empty response.');
        }

        const videoMedia = data.medias.find(m => m.quality === 'MP4');
        if (!videoMedia) {
            throw new Error('MP4 format is not available for this media.');
        }

        let videoUrl = videoMedia.url;
        if (videoUrl.startsWith('/')) {
            videoUrl = `https://capdownloader.com${videoUrl}`;
        }

        const videoRes = await axios.get(videoUrl, {
            responseType: 'arraybuffer',
            timeout: 60000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://capdownloader.com/id/'
            }
        });

        const buffer = Buffer.from(videoRes.data);
        const sizeMB = (buffer.length / 1024 / 1024).toFixed(2);

        if (buffer.length < 10000) {
            throw new Error('The downloaded file is invalid or corrupted.');
        }

        const title = data.title || 'CapCut Video';
        const thumbnail = data.thumbnail || global.thumbnail;

        const caption = 
            `*CAPCUT DOWNLOADER*\n\n` +
            `Title: ${title}\n` +
            `Size: ${sizeMB} MB\n` +
            `Status: Success`;

        await conn.sendMessage(m.chat, {
            video: buffer,
            mimetype: 'video/mp4',
            caption: caption,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: 'CapCut Downloader',
                    thumbnailUrl: thumbnail,
                    sourceUrl: text,
                    mediaType: 2,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });

        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (error) {
        console.error('[CAPCUT ERROR]', error);
        await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
        
        let errorMsg = error.message || 'An unexpected error occurred.';
        if (error.code === 'ECONNABORTED') {
            errorMsg = 'Connection timed out. The server took too long to respond.';
        }
        
        m.reply(
            `*CAPCUT DOWNLOADER*\n\n` +
            `Status: Failed\n` +
            `Reason: ${errorMsg}`
        );
    }
};

module.exports.command = ['capcut', 'capcutdl', 'capcutdownload'];
module.exports.tags = ['downloader'];
module.exports.help = [
    'capcut <url> - Download video from CapCut without watermark'
];