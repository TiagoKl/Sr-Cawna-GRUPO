let handler = m => m
handler.all = async function (m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || global.db.data.settings.groupOnly) return
let user = global.db.data.users[m.sender]
let pp = `./src/Cawna.jpg`
let text = `💡 INPORTANTE LEER LA INFORMACIÓN PRESENTADA 💡

Hola, te saluda Cawna, SI!, soy un bot de WhatsApp, lo cual puedo hacer muchas funciones como crear stickers, descargar música y videos.
 
Usa #comandos con eso descubrirá todos los comandos que yo tengo disponibles.

Quieres preguntar algo o tienes alguna sugerencia respecto al bot, no dudes en contactar con mi creador.

👥¿Que es CawnaBot?👥

CawnaBot es un programa informático desarrollado por Tiago, efectúa automáticamente tareas reiterativas mediante Internet a través de una cadena de comandos o funciones.

🟢¿Para que sirve un bot en WhatsApp?🟢

Un bot en WhatsApp sirve para crear funciones básicas, ya sea en la creación de stickers, descargar música, descargar videos, etc "descubre todos los comandos disponibles que tenemos para ti, usa el siguiente comando #menu"


👤¿Cómo crear un sticker?👤

La pregunta que todos me hacen, es lo más sencillo del mundo, solo envia la imagen que deseas hacer stickers y coloca #s o de lo contrario responde a la imagen enviada con #s.


📝 PRIVACIDAD  📝

Cualquier información o fotos privadas que envíes al bot, no será compartido a terceros, el bot hace limpieza de chat cada 24 horas, que quiere decir que todo lo que envíes es sumamente eliminado. Pasando las 24 horas.

🚨UNE AL BOT A TU GRUPO🚨

QUIERES TENER AL BOT EN TU GRUPO, SOLICITA TU PEDIDO, TE PREGUNTARÁS ¿CÓMO? SÓLO ENVIA EL COMANDO "#join LINK DEL GRUPO"

EJEMPLO: 
     
   #join https://chat.whatsapp.com/I8BVNN5eExh60hMiSLDO09


🔥Número de mi creador🔥

wa.me//51946352266
"Puede que demore en responder"

Toda consulta o sugerencia, trata con respeto.`
if (new Date - user.pc < 86400000) return 
await this.sendButton(m.chat, `${text}`, wm, pp, [['📛REDES SOCIALES📛', `#REDES`]], m) 
user.pc = new Date * 1} 

export default handler
