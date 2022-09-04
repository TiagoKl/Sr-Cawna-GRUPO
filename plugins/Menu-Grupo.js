import fs from 'fs' 
 let handler = async (m, { conn, usedPrefix }) => { 
 let pp = './src/grupo.jpg' 
 let taguser = '@' + m.sender.split("@s.whatsapp.net")[0] 
 let menu = ` 
╭┈ ↷
│ ┆ ${usedPrefix}add  <numero>
│ ┆ ${usedPrefix}kick  <@tag>
│ ┆ ${usedPrefix}grupo  <abrir / cerrar>
│ ┆ ${usedPrefix}promote  <@tag>   
│ ┆ ${usedPrefix}demote  <@tag>
│ ┆ admins  <texto>
│ ┆ ${usedPrefix}demote  <@tag> 
│ ┆ ${usedPrefix}infogroup
│ ┆ ${usedPrefix}link
│ ┆ ${usedPrefix}setname  <texto>
│ ┆ ${usedPrefix}setdesc  <texto>
│ ┆ ${usedPrefix}invocar  <texto>   
│ ┆ ${usedPrefix}setwelcome  <texto> 
│ ┆ ${usedPrefix}setbye  <texto>
│ ┆ ${usedPrefix}hidetag  <texto>
│ ┆ ${usedPrefix}fantasmas
╰───────────────•
 `.trim() 
 let buttons = [ 
 { buttonId: 'uuu', buttonText: { displayText: '🩸ᴇɴʟᴀᴄᴇ ᴅᴇʟ ɢʀᴜᴘᴏ🩸' }, type: 1 }] 
 let buttonMessage = { 
 image: fs.readFileSync('./src/grupo.jpg'), 
 caption: menu.trim(), 
 mentions: [m.sender], 
 footer: `*${wm}*`, 
 buttons: buttons, 
 headerType: 4, 
 contextInfo: { 
 mentionedJid: [m.sender], 
 externalAdReply: { 
 showAdAttribution: true, 
 mediaType: 'VIDEO', 
 mediaUrl: null, 
 title: '📝COMANDOS PARA GRUPOS📝', 
 body: null, 
 thumbnail: fs.readFileSync('./src/logo.png'), 
 sourceUrl: `https://chat.whatsapp.com/I8BVNN5eExh60hMiSLDO09` 
 }}} 
 conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
 } 
 handler.command = /^(CMDGRUPO|cmdgrupo)$/i 
 handler.admin = false 
 handler.fail = null 
 export default handler
