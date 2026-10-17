/*
 * =====================================================================
 * PERHATIAN (WAJIB DIBACA)
 * 
 * Kode ini masih berbentuk CLI (Command Line Interface) yang dirancang 
 * untuk dijalankan di Terminal/Termux, BUKAN dalam bentuk Plugin Bot.
 * 
 * WAJIB UBAH SESUAI STRUKTUR BOT KALIAN MASING-MASING!
 * Jika ingin dijadikan fitur bot WhatsApp, sesuaikan logika pengiriman 
 * pesan (Reply / sendMessage) dan penanganan limit dengan base bot kalian.
 * =====================================================================
 */

const axios = require('axios');
const qs = require('qs');
const readline = require('readline');

const c = {
    reset: '\x1b[0m',
    gray: '\x1b[90m',
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    white: '\x1b[37m',
    bold: '\x1b[1m'
};

const line = (char = '-', length = 60) => char.repeat(length);
const log = (tag, color, message) => {
    const time = new Date().toLocaleTimeString('en-GB');
    console.log(`${c.gray}[${time}] ${color}[${tag}] ${c.white}${message}${c.reset}`);
};

async function testCapCut(url) {
    console.log(`${c.cyan}${c.bold}\n${line('=')}`);
    console.log(`  CAPCUT DOWNLOADER - CLI TESTING`);
    console.log(`${line('=')}${c.reset}\n`);

    log('INFO', c.blue, `Target URL: ${url}`);
    log('PROC', c.yellow, 'Menghubungi API Capdownloader...');

    try {
        const apiUrl = 'https://capdownloader.com/api/video-data.php';
        const payload = qs.stringify({ url: url });

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
            log('FAIL', c.red, 'Response API tidak berisi media.');
            return;
        }

        log('OK', c.green, 'Metadata berhasil diekstrak.');
        console.log(`${c.gray}  - Title    : ${c.white}${c.bold}${data.title}${c.reset}`);
        console.log(`${c.gray}  - Duration : ${c.white}${c.bold}${data.duration || 'N/A'}${c.reset}`);

        const videoMedia = data.medias.find(m => m.quality === 'MP4');
        
        if (!videoMedia) {
            log('FAIL', c.red, 'Format MP4 tidak ditemukan di array medias.');
            return;
        }

        let videoUrl = videoMedia.url;
        if (videoUrl.startsWith('/')) {
            videoUrl = `https://capdownloader.com${videoUrl}`;
        }

        log('PROC', c.yellow, 'Memverifikasi Direct Link Video...');

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
        const mimeType = videoRes.headers['content-type'];

        console.log(`${c.green}${c.bold}\n${line('-')}`);
        console.log(`  HASIL TESTING`);
        console.log(`${line('-')}`);
        console.log(`  Ukuran File : ${c.green}${c.bold}${sizeMB} MB`);
        console.log(`${c.white}  MimeType    : ${c.green}${c.bold}${mimeType}`);
        console.log(`${c.white}  Status File : ${buffer.length > 10000 ? c.green + c.bold + 'VALID' : c.red + c.bold + 'INVALID / TERLALU KECIL'}${c.reset}`);
        console.log(`${c.green}${c.bold}${line('-')}\n`);
        
        if (buffer.length < 10000) {
            log('WARN', c.yellow, 'Ukuran file < 10KB. Kemungkinan API mengembalikan HTML error.');
        } else {
            log('DONE', c.green, 'API Capdownloader valid dan siap dipasang ke plugin bot.');
        }

    } catch (error) {
        log('FATAL', c.red, 'Terjadi kesalahan sistem:');
        console.log(`${c.red}${line('-')}`);
        if (error.response) {
            console.log(`${c.red}  Status Code : ${error.response.status}`);
            console.log(`${c.red}  Pesan       : ${error.message}`);
        } else {
            console.log(`${c.red}  Pesan       : ${error.message}`);
        }
        console.log(`${c.red}${line('-')}\n`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`${c.cyan}${c.bold}Masukkan Link CapCut (contoh: https://www.capcut.com/tv2/xxxx/):${c.reset}`);
rl.question(`${c.yellow}> ${c.reset}`, async (link) => {
    if (!link || !link.includes('capcut.com')) {
        console.log(`${c.red}${c.bold}Error: Link tidak valid! Harus berisi 'capcut.com'${c.reset}`);
        rl.close();
        return;
    }

    await testCapCut(link.trim());
    rl.close();
});