import fs from 'fs' 
 let handler = async (m, { conn, usedPrefix }) => { 
 let pp = './src/grupo.jpg' 
 let taguser = '@' + m.sender.split("@s.whatsapp.net")[0] 
 let menu = ` 
  ┏•【*COMANDOS PARA GRUPOS*】•
  │➼•  ${taguser} 
  │➼•  _${usedPrefix}add *<numero>*_  
  │➼•  _${usedPrefix}kick *<@Mención>*_  
  │➼•  _${usedPrefix}grupo *<abrir / cerrar>*_  
  │➼•  _${usedPrefix}promote *<@Mención>*_  
  │➼•  _${usedPrefix}demote *<@mención>*_  
  │➼•  _admins *<texto>*
  │➼•  _${usedPrefix}demote *<@mencion>*_  
  │➼•  _${usedPrefix}infogroup_  
  │➼•  _${usedPrefix}link_  
  │➼•  _${usedPrefix}setname *<texto>*_  
  │➼•  _${usedPrefix}setdesc *<texto>*_  
  │➼•  _${usedPrefix}invocar *<texto>*_  
  │➼•  _${usedPrefix}setwelcome *<texto>*_  
  │➼•  _${usedPrefix}setbye *<texto>*_  
  │➼•  _${usedPrefix}hidetag *<texto>*_  
  │➼•  _${usedPrefix}fantasmas_
  ┗───── • ─────• 
 `.trim() 
 let buttons = [ 
 { buttonId: 'uuu', buttonText: { displayText: '🩸𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒🩸' }, type: 1 }] 
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
 sourceUrl: `https://chat.whatsapp.com/Dbw92638r4zGsRnUcoAbeU` 
 }}} 
 conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
 } 
 handler.command = /^(menugrupo|\?)$/i 
 handler.admin = false 
 handler.fail = null 
 export default handler
