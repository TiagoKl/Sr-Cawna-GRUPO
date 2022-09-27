let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^Bot|BOT|Cawna|cawna|bot$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './audio/bot.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (!chat.isBanned && chat.audios && m.text.match(/(anadieleimporta|a nadie le importa)/gi)) {
let vn = './media/dylan1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
return !0 }
export default handler
