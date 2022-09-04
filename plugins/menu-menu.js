import fs from 'fs'  
  let handler = async (m, { conn, usedPrefix }) => {  
  let pp = './src/grupo.jpg'  
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]  
  let menu = `  
╭───────────•
│❝𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死❞
│• Creador: Tiago
│• Número: +51 946 352 266
│• Instagram: cawna.sex
│• TikTok: cawna.sex
│
│|• BOT DE WHATSAPP•|
╰───────────────•
╭┈ ↷
│ |•|LISTA DISPONIBLES|•|
│ 
│• ${usedPrefix}CMDGRUPO
│• ${usedPrefix}CMDSTICKER
│• ${usedPrefix}CMDDESCARGAS
│ 
╰──────────────•
  `.trim()  
  let buttons = [  
  { buttonId: 'uuu', buttonText: { displayText: '𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死' }, type: 1 }]  
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
  title: '𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死',  
  body: null,  
  thumbnail: fs.readFileSync('./src/logo.png'),  
  sourceUrl: `https://chat.whatsapp.com/I8BVNN5eExh60hMiSLDO09`  
  }}}  
  conn.sendMessage(m.chat, buttonMessage, { quoted: m })  
  }  
  handler.command = /^(Comandos|COMANDOS)$/i  
  handler.admin = false  
  handler.fail = null  
  export default handler
