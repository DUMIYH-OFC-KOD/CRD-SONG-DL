const config = require('../settings')
const {
    cmd,
    commands
} = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fg = require('api-dylux');
const si = require('systeminformation')
const os = require('os')
var { get_set , input_set } = require('../lib/set_db') 
const  bot = `94779444547`



var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*"


cmd({
    pattern: "alive",
    category: "misc",
    react: "👋",
    desc: "cinesubz & ytsmx & sinhalasub movie downloader",
    use: ".menu",
    filename: __filename   
},
    async (conn, mek, m, { reply, isDev, from, pushname, l, q, prefix }) => {
        try {
  
        
        
const msg = `*👋 Hello ${pushname}*

*🚀 Version:* 1.0.0
*⌛ Memory:*  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*🕒 Runtime:* ${runtime(process.uptime())}
*📍 Platform:* ${os.hostname()}

🐼 This is the result of our teams hard work and our cyber red dragons tm owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And Besf Song Commands And Channel thumbnail banner Maker Commands Ai Chatbot feathers On Our Bot, 
                    
*🌻Have A Nice Day..🌻*

*╭──────────●●►*
*│* *Type .menu to get the command panel* 
*╰──────────●●►*

${config.FOOTER}`
                
return await conn.sendMessage(from, { image: { url: config.LOGO } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*error!!*')
            console.log(e)
            }
    })       


cmd({
    pattern: "restart",
    react: "⚙️",
    desc: "To shutdown the bot",
    category: "owner",
    use: '.shutdown',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{               

  var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*" 
  if(!isOwner) return await reply(BOTOW)
                reply(`Bot shutdown few 10 seconds...`)
	const restartInterval = 30 * 60 * 1000; 
	setInterval(restartInterval);
                await sleep(10000)
                process.exit()
		
 await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 

} catch (e) {
reply('*🛑 This is an owner command...*')
l(e)
}
}) 	


cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "misc",
    react: "🪄",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
 
        const startTime = Date.now();
        const message = await conn.sendMessage(from, { text: '*_Pinging to CRD Module..._* ❗' });
        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping response without buttons
        await conn.sendMessage(from, { text: `*📍 Pong : ${ping} Ms*` }, { quoted: message })
    } catch (e) {
        console.error(e);
        reply(`${e}`);
  }
});    



cmd({
    pattern: "setwachannel",
    react: "🗣️",
    desc: "To Activate auto news",
    category: "owner",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return await reply(BOTOW)
    if ( config.WACHLINK == q) return reply(`Succesfully Change To Whatsapp Channel Link`)
  await input_set('WACHLINK' , q)
  return reply(`Whatsapp Channel Link was changed`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "setownernb",
    react: "🗣️",
    desc: "To Activate auto news",
    category: "owner",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return await reply(BOTOW)
    if ( config.OWNER_NUMBER == q) return reply(`Succesfully Change To Owner Number`)
  await input_set('OWNER_NUMBER' , q)
  return reply(`owner number was changed`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "setprefix",
    react: "🗣️",
    desc: "To change bot prefix",
    category: "owner",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return await reply(BOTOW)
    if ( config.PREFIX == q) return reply(alredy)
  await input_set('PREFIX' , q)
  return reply(`prefix was changed to`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "setlogo",
    react: "🗣️",
    desc: "To change bot logo",
    category: "owner",
    use: '.setlogo logo url .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return await reply(BOTOW)
    if ( config.LOGO == q) return reply(alredy)
  await input_set('LOGO' , q)
  return reply(`Logo was changed to`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})	



cmd({
    pattern: "setfooter",
    react: "🗣️",
    desc: "To Activate auto news",
    category: "owner",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return await reply(BOTOW)
    if ( config.FOOTER == q) return reply(`Succesfully Change To Footer`)
  await input_set('FOOTER' , q)
  return reply(`Footer was changed`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "setjid",
    react: "🗣️",
    desc: "To Activate auto news",
    category: "owner",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return await reply(BOTOW)
    if ( config.JID == q) return reply(`Succesfully Song Change To This Section`)
  await input_set('JID' , q)
  return reply(`Channel Jid was changed`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "onlygroup",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if(!isOwner) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ONLY_GROUP == 'true') return reply('already Only Group is on ')
  await input_set('ONLY_GROUP' , 'true')
  return reply('Only Group turned on')
  }
if ( q == 'off' ) {
   if ( config.ONLY_GROUP !== 'true') return reply('already Only Group is off')
  await input_set('ONLY_GROUP' , 'false')
  return reply('Only Group turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})		  

cmd({
    pattern: "onlyme",
    react: "🗣️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply , config}) => {
try{
if(!isOwner) return await reply(BOTOW)	
if (q == 'on') {
  if ( config.ONLY_ME == 'true') return reply('already Only Me is on ')
  await input_set('ONLY_ME' , 'true')
  return reply('Only Me turned on')
  }
if ( q == 'off' ) {
   if ( config.ONLY_ME !== 'true') return reply('already Only Me is off')
  await input_set('ONLY_ME' , 'false')
  return reply('Only Me turned off')
}
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})		  



cmd({
    pattern: "fo",
    desc: "forward msgs",
    alias: ["fo"],
    category: "owner",
    use: '.fo < Jid address >',
    filename: __filename
},

async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

if (!isOwner) {
	return reply("*OWNER ONLY ❌*")}
	
if ( !mek.quoted) {
reply("*GIVE ME A MASSEGE 🤦*")
}

if(!q) return reply('please give me jids')

const data = q.split(",")



	
let p;
let message = {}

            message.key = mek.quoted?.fakeObj?.key;

            if (mek.quoted?.documentWithCaptionMessage?.message?.documentMessage) {
            
		let mime = mek.quoted.documentWithCaptionMessage.message.documentMessage.mimetype

const mimeType = require('mime-types');
let ext = mimeType.extension(mime);		    

                mek.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (p ? p : mek.quoted.documentWithCaptionMessage.message.documentMessage.fileName) + "." + ext;
            }

            message.message = mek.quoted;
	
for(let i=0; i<data.length;i++){
const mass =  await conn.forwardMessage(data[i], message, false)
}
return reply(`*MASSEGE FORWARD TO:*\n\n ${data}`)
            
})


