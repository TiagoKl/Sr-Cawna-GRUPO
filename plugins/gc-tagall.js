let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `${pesan}`
let teks = `░⃟ ⃟ ┊LISTA DE TODOS LOS USUARIOS₊˚.༄\n\n👤${oi}\n\n👤  USUARIOS DEL GRUPO \n`
for (let mem of participants) {
teks += `♯┊@${mem.id.split('@')[0]}\n`}
teks += `❐│ Creador: Tiago  \n      ©     𝖯𝖱𝗢𝗚𝙍꯭Ꜳ𝗠𝖬Σ𝖱\n────── · · · · · ──────`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
