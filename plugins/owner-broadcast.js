import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `    ©     𝖯𝖱𝗢𝗚𝙍꯭Ꜳ𝗠𝖬Σ𝖱   ℹ︎︎ 𝖨Π𝗙𝗢𝗥𝗠︭𐌀𝖳𝖨𝖮𝖭\n🟢𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎  -  𝐎𝐅𝐈𝐂𝐈𝐀𝐋🟢\n\n•| ${text}\n\n\n𝐋𝐈𝐃𝚵𝐑 ː\n     𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死`, 'ᄅᄅ0ᄅ\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['📝𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄Ó𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏📝', '.infobot'],['👤𝙈𝙀𝙉Ú👤', '.menu']], false, { 
contextInfo: { externalAdReply: {
title: '🟢COMUNICADO OFICIAL DE TIAGO🟢',
body: '𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死', 
sourceUrl: `https://www.tiktok.com/@cawna.sex`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙷𝙰𝚃𝚂*\n\n*𝐍𝐎𝐓𝐀: 𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰 𝙵𝙰𝙻𝙻𝙾𝚂 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚈 𝙽𝙾 𝚂𝙴 𝙴𝙽𝚅𝙸𝙴 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙷𝙰𝚃𝚂, 𝙳𝙸𝚂𝙲𝚄𝙻𝙿𝙴 𝙿𝙾𝚁 𝙴𝙻 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler
