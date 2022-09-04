import fs from 'fs' 
 let handler = async (m, { conn, usedPrefix }) => { 
 let pp = './src/grupo.jpg' 
 let taguser = '@' + m.sender.split("@s.whatsapp.net")[0] 
 let menu = ` 
┏•【 *COMANDOS PARA GRUPOS* 】•
°   _${usedPrefix}add  *<numero>*_ 
°   _${usedPrefix}kick  *<@tag>*_ 
°   _${usedPrefix}grupo  *<abrir / cerrar>*_ 
°   _${usedPrefix}promote  *<@tag>*_ 
°   _${usedPrefix}demote  *<@tag>*_ 
°   _admins  *<texto>*_ 
°   _${usedPrefix}demote  *<@tag>*_ 
°   _${usedPrefix}infogroup_ 
°   _${usedPrefix}link_ 
°   _${usedPrefix}setname  *<texto>*_ 
°   _${usedPrefix}setdesc  *<texto>*_ 
°   _${usedPrefix}invocar  *<texto>*_ 
°   _${usedPrefix}setwelcome  *<texto>*_ 
°   _${usedPrefix}setbye  *<texto>*_ 
°   _${usedPrefix}hidetag  *<texto>*_ 
°   _${usedPrefix}fantasmas_
┗───── • ─────• 
┏•【 *COMANDOS DE STICKERS* 】•
°   _${usedPrefix}sticker  *<responder a imagen o video>*_ 
°   _${usedPrefix}sticker  *<enlace / link / url>*_ 
°   _${usedPrefix}s  *<responder a imagen o video>*_ 
°   _${usedPrefix}s  *<enlace / link / url>*_ 
°   _${usedPrefix}emojimix  *<emoji 1>&<emoji 2>*_ 
°   _${usedPrefix}scircle  *<responder a imagen>*_ 
°   _${usedPrefix}sremovebg  *<responder a imagen>*_ 
°   _${usedPrefix}semoji  *<tipo> <emoji>*_ 
°   _${usedPrefix}attp  *<texto>*_ 
°   _${usedPrefix}attp2  *<texto>*_ 
°   _${usedPrefix}attp3  *<texto>*_ 
°   _${usedPrefix}ttp  *<texto>*_ 
°   _${usedPrefix}ttp2  *<texto>*_ 
°   _${usedPrefix}ttp3  *<texto>*_ 
°   _${usedPrefix}ttp4  *<texto>*_ 
°   _${usedPrefix}ttp5  *<texto>*_ 
°   _${usedPrefix}pat  *<@tag>*_ 
°   _${usedPrefix}slap  *<@tag>*_ 
°   _${usedPrefix}kiss  *<@tag>*_ 
°   _${usedPrefix}dado_ 
°   _${usedPrefix}wm  *<packname> <author>*_ 
°   _${usedPrefix}stickermarker  *<efecto> <responder a imagen>*_ 
°   _${usedPrefix}stickerfilter  *<efecto> <responder a imagen>*_
┗───── • ─────•
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
