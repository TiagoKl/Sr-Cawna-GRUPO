import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
◌ » —𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死— « ◌

°Hola ${taguser}  Bienvenida (o) 
*El BOT está en modo desarrollo, todavía nos falta agregar muchas cosas, poco a poco el bot se va actualizar, aceptamos cualquier tipo de sugerencia respecto al bot.*
◌ » ———— ╫ ❲ ❈ ❳ ╫ ———— « ◌

`.trim()
let buttons = [
{ buttonId: 'uuu', buttonText: { displayText: '𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死' }, type: 1 }]
let buttonMessage = {
image: fs.readFileSync('./Menu2.jpg'),
caption: menu.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `https://chat.whatsapp.com/Dbw92638r4zGsRnUcoAbeU`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.admin = true
handler.fail = null
export default handler
