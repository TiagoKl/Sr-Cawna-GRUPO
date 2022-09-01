import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
◌ » —𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死— « ◌

*${taguser} Bienvenido(a), acá encontrarás todos los comandos.*


*El BOT está en modo desarrollo, todavía nos falta agregar muchas cosas, poco a poco el bot se va actualizar, aceptamos cualquier tipo de sugerencia respecto al bot.*



📋𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐈𝐒𝐏𝐎𝐍𝐈𝐁𝐋𝐄𝐒📋

• | *COMANDOS PARA GRUPOS*

 ° ⛓️ _${usedPrefix}add *<numero>*_ 
 ° ⛓️ _${usedPrefix}kick *<@tag>*_ 
 ° ⛓️ _${usedPrefix}grupo *<abrir / cerrar>*_ 
 ° ⛓️ _${usedPrefix}promote *<@tag>*_ 
 ° ⛓️ _${usedPrefix}demote *<@tag>*_ 
 ° ⛓️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜) 
 ° ⛓️ _${usedPrefix}demote *<@tag>*_ 
 ° ⛓️ _${usedPrefix}infogroup_ 
 ° ⛓️ _${usedPrefix}link_ 
 ° ⛓️ _${usedPrefix}setname *<texto>*_ 
 ° ⛓️ _${usedPrefix}setdesc *<texto>*_ 
 ° ⛓️ _${usedPrefix}invocar *<texto>*_ 
 ° ⛓️ _${usedPrefix}setwelcome *<texto>*_ 
 ° ⛓️ _${usedPrefix}setbye *<texto>*_ 
 ° ⛓️ _${usedPrefix}hidetag *<texto>*_ 
 ° ⛓️ _${usedPrefix}fantasmas_

• | *COMANDOS DE DESCARGAS*
  
 ° ⏱️ _${usedPrefix}facebook *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}instagram *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}mediafire *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}instagram *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}gitclone *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}stickerpack *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}gdrive *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}tiktok *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}xnxxdl *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}xvideosdl *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}ytmp3 *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}ytmp4 *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}ytmp3doc *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}ytmp4doc *<enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}play.1 *<texto / enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}play.2 *<texto / enlace / link / url>*_ 
 ° ⏱️ _${usedPrefix}play *<texto>*_ 
 ° ⏱️ _${usedPrefix}playdoc *<texto>*_ 
 ° ⏱️ _${usedPrefix}playlist *<texto>*_ 
 ° ⏱️ _${usedPrefix}playlist2 *<texto>*_ 
 ° ⏱️ _${usedPrefix}spotify *<texto>*_ 
 ° ⏱️ _${usedPrefix}ringtone *<texto>*_ 
 ° ⏱️ _${usedPrefix}soundcloud *<texto>*_ 
 ° ⏱️ _${usedPrefix}imagen *<texto>*_ 
 ° ⏱️ _${usedPrefix}pinteret *<texto>*_ 
 ° ⏱️ _${usedPrefix}wallpaper *<texto>*_ 
 ° ⏱️ _${usedPrefix}wallpaper2 *<texto>*_ 
 ° ⏱️ _${usedPrefix}pptiktok *<nombre de usuario>*_ 
 ° ⏱️ _${usedPrefix}igstalk *<nombre de usuario>*_ 
 ° ⏱️ _${usedPrefix}igstory *<nombre de usuario>*_ 
 ° ⏱️ _${usedPrefix}tiktokstalk *<nombre de usuario>*_

• | *COMANDOS PARA STICKERS*

 ° 🍧 _${usedPrefix}sticker *<responder a imagen o video>*_ 
 ° 🍧 _${usedPrefix}sticker *<enlace / link / url>*_ 
 ° 🍧 _${usedPrefix}s *<responder a imagen o video>*_ 
 ° 🍧 _${usedPrefix}s *<enlace / link / url>*_ 
 ° 🍧 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_ 
 ° 🍧 _${usedPrefix}scircle *<responder a imagen>*_ 
 ° 🍧 _${usedPrefix}sremovebg *<responder a imagen>*_ 
 ° 🍧 _${usedPrefix}semoji *<tipo> <emoji>*_ 
 ° 🍧 _${usedPrefix}attp *<texto>*_ 
 ° 🍧 _${usedPrefix}attp2 *<texto>*_ 
 ° 🍧 _${usedPrefix}attp3 *<texto>*_ 
 ° 🍧 _${usedPrefix}ttp *<texto>*_ 
 ° 🍧 _${usedPrefix}ttp2 *<texto>*_ 
 ° 🍧 _${usedPrefix}ttp3 *<texto>*_ 
 ° 🍧 _${usedPrefix}ttp4 *<texto>*_ 
 ° 🍧 _${usedPrefix}ttp5 *<texto>*_ 
 ° 🍧 _${usedPrefix}pat *<@tag>*_ 
 ° 🍧 _${usedPrefix}slap *<@tag>*_ 
 ° 🍧 _${usedPrefix}kiss *<@tag>*_ 
 ° 🍧 _${usedPrefix}dado_ 
 ° 🍧 _${usedPrefix}wm *<packname> <author>*_ 
 ° 🍧 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_ 
 ° 🍧 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
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
handler.admin = false
handler.fail = null
export default handler
