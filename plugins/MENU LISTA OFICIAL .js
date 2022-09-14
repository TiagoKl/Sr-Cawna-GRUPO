import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗠𝗘𝗡𝗨𝗦`,
rows: [
      {title: "👤𝗖𝗥𝗘𝗔𝗗𝗢𝗥 👤", description: '𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗢 𝗗𝗘𝗟 𝗖𝗥𝗘𝗔𝗗𝗢𝗥', rowId: `${usedPrefix}creador`},
       {title: "📝𝗠𝗘𝗡𝗨 𝗚𝗥𝗨𝗣𝗢📝 ", description: '𝗟𝗜𝗦𝗧𝗔 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗔 𝗗𝗘 𝗧𝗢𝗗𝗢𝗦 𝗟𝗢𝗦 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗣𝗔𝗥𝗔 𝗨𝗦𝗢 𝗘𝗫𝗖𝗟𝗨𝗦𝗜𝗩𝗢 𝗗𝗘 𝗨𝗡 𝗚𝗥𝗨𝗣𝗢..', rowId: `${usedPrefix}cmdgrupo`},
]}, ]
 
let name = await conn.getName(m.sender)
const listMessage = {
text: `𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死`, footer: `${wm}`, pp,
title: null,
buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝗦 𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|2help|ayuda|commands|commandos)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
