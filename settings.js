const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'add your session id',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
OWNER_NUMBER: process.env.OWNER_NUMBER || '94779444547', 
PREFIX:  process.env.PREFIX || ['.'] ,
JID: process.env.JID || "120363398176388547@newsletter",
WACHLINK: process.env.WACHLINK || `https://whatsapp.com/channel/0029Vb5TKuPLCoX8sjZo7t41`,
FOOTER: '> *ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ ʀᴇᴅ ᴅʀᴀɢᴏɴ ᴛᴍ*',
DIRECTION: true,
LOGO: process.env.LOGO || `https://i.ibb.co/bMnH46kh/IMG-20250511-WA0010.jpg`     
};
