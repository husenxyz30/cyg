const axios = require('axios');

const url = 'https://i.cygnus.finance/api/user';

const headers = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.8',
    'content-type': 'application/json',
    'cookie': 'ISI COOKIE KAMU', //GANTI INI
    'origin': 'https://i.cygnus.finance',
    'referer': 'https://i.cygnus.finance/',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Brave";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
};

const data = {
    id: "ISI ID KAMU", //GANTI INI
    power: ISI POWER SESUKA HATI , //GANTI INI
    energy: 10,
    lastPlayAt: "2025-03-08T09:51:57.566Z"
};

axios.post(url, data, { headers })
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
