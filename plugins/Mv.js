const config = require('../settings')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

cmd({
    pattern: "firemovie",
    alias: ["fmovie"],
    use: '.firemovie <query>',
    react: "🎬",
    desc: "Download movies from FireMovie.",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply('🚩 *Please provide a movie name to search*');

        let response = await fetch(`https://rest-api-dark-shan.vercel.app/download/firemovie-search?q=${q}`);
        const aparade = await response.json();
        const result = aparade.data;

        if (result.length < 1) return await conn.sendMessage(from, { text: 'Error! No results found.' }, { quoted: mek });

        const info = `𝗙𝗜𝗥𝗘𝗠𝗢𝗩𝗜𝗘 😱\n\n> 🔎 *SEARCH MOVIE NAME:* \`${q}\`\n> 𝙼𝙾𝚅𝙸𝙴 𝙱𝚈 𝙵𝙸𝚁𝙴𝙼𝙾𝚅𝙸𝙴.𝙲𝙾𝙼`;

        const rows = result.map(movie => ({
            header: movie.title,
            title: movie.year,
            description: movie.category,
            id: `.firedl ${movie.link}`
        }));

        const buttons = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐎𝐕𝐈𝐄 🎬',
                sections: [{
                    title: 'FIREMOVIE',
                    highlight_label: '©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚',
                    rows: rows
                }]
            })
        }];

        const opts = {
            image: result[0].img,
            header: '',
            footer: "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
            body: info
        };

        await conn.sendButtonMessage(from, buttons, m, opts);
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { text: `Error - ${e}` }, { quoted: mek });
    }
});

cmd({
    pattern: "firedl",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply('*Please provide a FireMovie URL!*');

        let response = await fetch(`https://rest-api-dark-shan.vercel.app/download/firemovie-dl?q=${q}`);
        const shan = await response.json();
        const x = shan.data;

        if (!x.downloadLinks || x.downloadLinks.length < 1) {
            return await conn.sendMessage(from, { text: 'No download links found!' }, { quoted: mek });
        }

        const dat = `𝗠𝗩𝗗𝗟 🎬\n\n*📃 Title:* ${x.title}\n*⏳ Duration:* ${x.duration}\n*📅 Date:* ${x.date}\n*♻️ Vote:* ${x.vote}\n\n*📜 Description:* ${x.description}`;

        const rows = x.downloadLinks.map(link => ({
            header: link.name,
            title: link.size,
            description: "",
            id: `.firedlm ${link.download}`
        }));

        const buttons = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: '𝐒𝐄𝐋𝐄𝐂𝐓 𝐐𝐔𝐀𝐋𝐈𝐓𝐘 🎬',
                sections: [{
                    title: 'FIREMOVIE',
                    highlight_label: '©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚',
                    rows: rows
                }]
            })
        }];

        const message = {
            image: x.image,
            header: '',
            footer: "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
            body: dat
        };

        await conn.sendButtonMessage(from, buttons, m, message);
    } catch (e) {
        console.log(e);
        reply('*Error occurred while fetching data!*');
    }
});

cmd({
    pattern: "firedlm",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) {
            return await conn.sendMessage(from, { text: '*A download link is required.*' }, { quoted: mek });
        }

        await conn.sendMessage(from, { react: { text: '📥', key: mek.key } });

        let sendapk = await conn.sendMessage(from, {
            document: { url: q },
            mimetype: 'video/mp4',
            fileName: '©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key } });
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key } });
    } catch (e) {
        reply('*Error during file download!*');
        console.log(e);
    }
});

cmd({
    pattern: "cinesubz",
    alias: ["cine"],
    use: '.firemovie <query>',
    react: "🎬",
    desc: "Download movies from FireMovie.",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply('🚩 *Please provide a movie name to search*');

        let response = await fetch(`https://api.infinityapi.org/cine-direct-dl?q=${q}`);
        const aparade = await response.json();
        const result = aparade.data;

        if (result.length < 1) return await conn.sendMessage(from, { text: 'Error! No results found.' }, { quoted: mek });

        const info = `𝗖𝗜𝗡𝗘𝗦𝗨𝗕𝗭 🎬\n\n> 🔎 *SEARCH MOVIE NAME:* \`${q}\`\n> 𝙼𝙾𝚅𝙸𝙴 𝙱𝚈 𝙲𝙸𝙽𝙴𝚂𝚄𝙱𝚉.𝙲𝙾`;

        const rows = result.map(movie => ({
            header: movie.title,
            title: movie.year,
            description: movie.category,
            id: `.cinesubzdl ${movie.link}`
        }));

        const buttons = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐎𝐕𝐈𝐄 🎬',
                sections: [{
                    title: 'CINESUBZ',
                    highlight_label: 'ᴄʏʙᴇʀ ʀᴇᴅ ᴅʀᴀɢᴏɴ ᴛᴍ',
                    rows: rows
                }]
            })
        }];

        const opts = {
            image: result[0].image,
            header: '',
            footer: "ᴄʏʙᴇʀ ʀᴇᴅ ᴅʀᴀɢᴏɴ ᴛᴍ",
            body: info
        };

        await conn.sendButtonMessage(from, buttons, m, opts);
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { text: `Error - ${e}` }, { quoted: mek });
    }
});

cmd({
    pattern: "cinesubzdl",
    alias: ["cinedl"],
    use: '.cinesubzdl <movie_name>',
    react: "🎬",
    desc: "Download movies from CineSubz.",
    category: "movie",
    filename: __filename
},
async(conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply('🚩 *Please provide a movie name to search*');

        let response = await fetch(`https://api.infinityapi.org/cine-direct-dl?q=${q}`);
        const aparade = await response.json();
        
        if (!aparade.status) return reply("Error! Unable to fetch movie data.");

        const movieData = aparade.data;
        
        const info = `*CRD MD MOVIE* 🎬\n\n
> 🔎 *SEARCH MOVIE NAME:* \`${movieData.title}\`\n
> 📅 *Date:* ${movieData.date}\n
> 🌍 *Country:* ${movieData.country}\n
> ⏳ *Duration:* ${movieData.duration}\n
> ⭐ *Rating:* ${movieData.rating}\n\n> *ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ ʀᴇᴅ ᴅʀᴀɢᴏɴ ᴛᴍ*`;

        
        const rows = movieData.download.map(option => ({
            header: option.quality,
            title: option.size,
            description: option.downloadDetails.FILE.NAME,
            id: `.cinedl ${option.downloadDetails.DIRECT_LINK}`
        }));

        const buttons = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐎𝐕𝐈𝐄 🎬',
                sections: [{
                    title: 'CINESUBZ',
                    highlight_label: 'ᴄʏʙᴇʀ ʀᴇᴅ ᴅʀᴀɢᴏɴ ᴛᴍ',
                    rows: rows
                }]
            })
        }];

        const opts = {
            image: movieData.image,
            header: '',
            footer: "ᴄʏʙᴇʀ ʀᴇᴅ ᴅʀᴀɢᴏɴ ᴛᴍ",
            body: info
        };

        await conn.sendButtonMessage(from, buttons, m, opts);
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { text: `Error - ${e.message}` }, { quoted: mek });
    }
});

cmd({
    pattern: "cinedl",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) {
            return await conn.sendMessage(from, { text: '*A download link is required.*' }, { quoted: mek });
        }

        await conn.sendMessage(from, { react: { text: '📥', key: mek.key } });

        let sendapk = await conn.sendMessage(from, {
            document: { url: q },
            mimetype: 'video/mp4',
            fileName: 'ᴄʏʙᴇʀ ʀᴇᴅ ᴅʀᴀɢᴏɴ ᴛᴍ'
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key } });
        await conn.sendMessage(from, { react: { text: '✔', key: mek.key } });
    } catch (e) {
        reply('*Error during file download!*');
        console.log(e);
    }
});