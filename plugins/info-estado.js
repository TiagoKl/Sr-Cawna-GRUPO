let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu.png'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
π’. .β²βΏ» ESTADO DEL BOT  . . .

    β’β BOT DE USO PΓBLICO 

 β’ TIEMPO ACTIVO 
       ${uptime}

ββ Creador: Tiago  
Β Β Β Β Β  Β©     π―π±π’ππκ―­κ²π π¬Ξ£π±
ββββββ Β· Β· Β· Β· Β· ββββββ
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://api.whatsapp.com/send?phone=+51946352266', 'TIAGO CREADOR OFICIAL', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']
], m)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
