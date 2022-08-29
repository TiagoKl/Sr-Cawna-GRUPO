import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
 ${taguser} 

◌ » ———— ╫ ❲ ❈ ❳ ╫ ———— « ◌
      𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐏𝐀𝐑𝐀 𝐆𝐑𝐔𝐏𝐎𝐒

⚙️ _${usedPrefix}add *<numero>*_ 
 ⚙️ _${usedPrefix}kick *<@tag>*_ 
 ⚙️ _${usedPrefix}grupo *<abrir / cerrar>*_ 
 ⚙️ _${usedPrefix}promote *<@tag>*_ 
 ⚙️ _${usedPrefix}demote *<@tag>*_ 
 ⚙️ _admins *<texto>*_ (Uso sin prefijo) 
 ⚙️ _${usedPrefix}demote *<@tag>*_ 
 ⚙️ _${usedPrefix}infogroup_ 
 ⚙️ _${usedPrefix}link_ 
 ⚙️ _${usedPrefix}setname *<texto>*_ 
 ⚙️ _${usedPrefix}setdesc *<texto>*_ 
 ⚙️ _${usedPrefix}invocar *<texto>*_ 
 ⚙️ _${usedPrefix}setwelcome *<texto>*_ 
 ⚙️ _${usedPrefix}setbye *<texto>*_ 
 ⚙️ _${usedPrefix}hidetag *<texto>*_ 
 ⚙️ _${usedPrefix}fantasmas_
◌ » ———— ╫ ❲ ❈ ❳ ╫ ———— « ◌

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
