import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `ย ย ย  ยฉ     ๐ฏ๐ฑ๐ข๐๐๊ฏญ๊ฒ๐ ๐ฌฮฃ๐ฑ   โน๏ธ๏ธ ๐จฮ ๐๐ข๐ฅ๐ ๏ธญ๐๐ณ๐จ๐ฎ๐ญ\n๐ข๐๐๐๐๐๐๐๐๐๐  -  ๐๐๐๐๐๐๐๐ข\n\nโข| ${text}\n\n\n๐๐๐๐ต๐ ห\n     ๐ฏฬตออ โฏ  ๐ฆ๐ฟ ๐๐ฎ๐๐ป๐ฎ๐ท ;;  ๆญป`, 'แแ0แ\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['๐๐๐๐๐๐๐๐ผ๐พ๐ร๐ ๐ฟ๐๐ ๐ฝ๐๐๐', '.infobot'],['๐ค๐๐๐ร๐ค', '.menu']], false, { 
contextInfo: { externalAdReply: {
title: '๐ขCOMUNICADO OFICIAL DE TIAGO๐ข',
body: '๐ฏฬตออ โฏ  ๐ฆ๐ฟ ๐๐ฎ๐๐ป๐ฎ๐ท ;;  ๆญป', 
sourceUrl: `https://www.tiktok.com/@cawna.sex`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[โ๐๐๐๐โ] ๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด ๐ด๐ฝ๐๐ธ๐ฐ๐ณ๐พ ๐ฐ ๐๐พ๐ณ๐พ๐ ๐ป๐พ๐ ๐ฒ๐ท๐ฐ๐๐*\n\n*๐๐๐๐: ๐ด๐ ๐ฟ๐พ๐๐ธ๐ฑ๐ป๐ด ๐๐๐ด ๐๐ด๐ฝ๐ถ๐ฐ ๐ต๐ฐ๐ป๐ป๐พ๐ ๐ด๐๐๐ด ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ ๐ฝ๐พ ๐๐ด ๐ด๐ฝ๐๐ธ๐ด ๐ฐ ๐๐พ๐ณ๐พ๐ ๐ป๐พ๐ ๐ฒ๐ท๐ฐ๐๐, ๐ณ๐ธ๐๐ฒ๐๐ป๐ฟ๐ด ๐ฟ๐พ๐ ๐ด๐ป ๐ผ๐พ๐ผ๐ด๐ฝ๐๐พ*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler
