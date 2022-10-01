import fs from 'fs'  
  let handler = async (m, { conn, usedPrefix }) => {  
  let pp = './src/grupo.jpg'  
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]  
  let menu = `  
  

 👾 ❯  COMANDOS CONVERTIDORES;;  死  
 ╭┈ ↷  
 │ ┆ ${usedPrefix}mp4 <responde aún sticker gif>
 │ ┆ ${usedPrefix}tomp3 <responde audio,vídeo>
 │ ┆ ${usedPrefix}ptt <convierte un MP3 a audio>
 │ ┆ ${usedPrefix}tourl <imagen, vídeo se convertirá en un link>
 │ ┆ ${usedPrefix}tts <crea audios>
 │ ┆ ${usedPrefix}togifaud <selecciona un vídeo y convierte el vídeo en gif con audio>
 ╰───────────────• 
 📬 ❯  COMANDOS PARA GRUPOS ;;  死 
 ╭┈ ↷ 
 │ ┆ ${usedPrefix}add  <numero> 
 │ ┆ ${usedPrefix}kick  <@tag> 
 │ ┆ ${usedPrefix}grupo  <abrir / cerrar> 
 │ ┆ ${usedPrefix}promote  <@tag>    
 │ ┆ ${usedPrefix}demote  <@tag> 
 │ ┆ admins  <texto> 
 │ ┆ ${usedPrefix}demote  <@tag>  
 │ ┆ ${usedPrefix}infogroup 
 │ ┆ ${usedPrefix}link 
 │ ┆ ${usedPrefix}setname  <texto> 
 │ ┆ ${usedPrefix}setdesc  <texto> 
 │ ┆ ${usedPrefix}invocar  <texto>    
 │ ┆ ${usedPrefix}setwelcome  <texto>  
 │ ┆ ${usedPrefix}setbye  <texto> 
 │ ┆ ${usedPrefix}hidetag  <texto> 
 │ ┆ ${usedPrefix}fantasmas 
 ╰───────────────• 
 📝 ❯  COMANDOS DE STICKERS ;;  死 
 ╭┈ ↷ 
 │ ┆ ${usedPrefix}sticker <responder a imagen o video>
 │ ┆ ${usedPrefix}sticker <enlace>
 │ ┆ ${usedPrefix}s <responder a imagen o video>
 │ ┆ ${usedPrefix}s <enlace / link / url>
 │ ┆ ${usedPrefix}emojimix <emoji 1>&<emoji 2>
 │ ┆ ${usedPrefix}scircle <responder a imagen>
 │ ┆ ${usedPrefix}semoji <tipo> <emoji>
 │ ┆ ${usedPrefix}attp <texto>
 │ ┆ ${usedPrefix}attp2 <texto>
 │ ┆ ${usedPrefix}attp3 <texto>
 │ ┆ ${usedPrefix}ttp <texto>
 │ ┆ ${usedPrefix}ttp2 <texto>
 │ ┆ ${usedPrefix}ttp3 <texto>
 │ ┆ ${usedPrefix}ttp4 <texto>
 │ ┆ ${usedPrefix}ttp5 <texto>
 │ ┆ ${usedPrefix}pat <@tag>
 │ ┆ ${usedPrefix}slap <@tag>
 │ ┆ ${usedPrefix}kiss <@tag>
 │ ┆ ${usedPrefix}dado
 │ ┆ ${usedPrefix}wm <packname> <author>
 │ ┆ ${usedPrefix}stickermarker <efecto> <responder a imagen>
 │ ┆ ${usedPrefix}stickerfilter <efecto> <responder a imagen>
 ╰───────────────• 
  📥 ❯  COMANDOS DE DESCARGÁ ;;  死 
 ╭┈ ↷ 
 │ ┆ ${usedPrefix}instagram <enlace / link / url>
 │ ┆ ${usedPrefix}mediafire <enlace / link / url>
 │ ┆ ${usedPrefix}instagram <enlace / link / url>
 │ ┆ ${usedPrefix}gitclone <enlace / link / url>
 │ ┆ ${usedPrefix}stickerpack <enlace / link / url>
 │ ┆ ${usedPrefix}gdrive <enlace / link / url>
 │ ┆ ${usedPrefix}tiktok <enlace / link / url>
 │ ┆ ${usedPrefix}xnxxdl <enlace / link / url>
 │ ┆ ${usedPrefix}xvideosdl <enlace / link / url>
 │ ┆ ${usedPrefix}ytmp3 <enlace / link / url>
 │ ┆ ${usedPrefix}ytmp4 <enlace / link / url>
 │ ┆ ${usedPrefix}ytmp3doc <enlace / link / url>
 │ ┆ ${usedPrefix}ytmp4doc <enlace / link / url>
 │ ┆ ${usedPrefix}play.1 <texto / enlace / link / url>
 │ ┆ ${usedPrefix}play.2 <texto / enlace / link / url>
 │ ┆ ${usedPrefix}play <texto>
 │ ┆ ${usedPrefix}playdoc <texto>
 │ ┆ ${usedPrefix}playlist <texto>
 │ ┆ ${usedPrefix}playlist2 <texto>
 │ ┆ ${usedPrefix}spotify <texto>
 │ ┆ ${usedPrefix}ringtone <texto>
 │ ┆ ${usedPrefix}soundcloud <texto>
 │ ┆ ${usedPrefix}imagen <texto>
 │ ┆ ${usedPrefix}pinteret <texto>
 │ ┆ ${usedPrefix}wallpaper <texto>
 │ ┆ ${usedPrefix}wallpaper2 <texto>
 │ ┆ ${usedPrefix}pptiktok <nombre de usuario>
 │ ┆ ${usedPrefix}igstalk <nombre de usuario>
 │ ┆ ${usedPrefix}igstory <nombre de usuario>
 │ ┆ ${usedPrefix}tiktokstalk <nombre de usuario>
 ╰───────────────• 
  `.trim()  
  let buttons = [  
  { buttonId: '#creador', buttonText: { displayText: '𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死' }, type: 1 }]  
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
  handler.command = /^(menu|comandos)$/i  
  handler.admin = false  
  handler.fail = null  
  export default handler
