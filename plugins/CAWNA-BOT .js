let handler = m => m
handler.all = async function (m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || global.db.data.settings.groupOnly) return
let user = global.db.data.users[m.sender]
let pp = `./src/Cawna.jpg`
let text = `𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死

Hola, te saluda Cawna, SI!, soy un bot de WhatsApp, lo cual puedo hacer muchas funciones como crear stickers, descargar música y videos.
 
Usa #comandos con eso descubrirá todos los comandos que yo tengo disponibles.

Quieres preguntar algo o tienes alguna sugerencia respecto al bot, no dudes en contactar con mi creador.

📝 PRIVACIDAD  📝

Cualquier información o fotos privadas que envíes al bot, no será compartido a terceros, el bot hace limpieza de chat cada 24 horas, que quiere decir que todo lo que envíes es sumamente eliminado. Pasando las 24 horas.


Número de mi creador.
wa.me//51946352266

"Puede que demore en responder"


Toda consulta o sugerencia, trata con respeto.`
if (new Date - user.pc < 86400000) return 
await this.sendButton(m.chat, `${text}`, wm, pp, [['MENÚ PRINCIPAL', `#menu`]], m) 
user.pc = new Date * 1} 

export default handler