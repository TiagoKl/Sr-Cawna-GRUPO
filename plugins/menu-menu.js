let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => { 
 const sections = [ 
 { 
 title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`, 
 rows: [ 
 {title: "✨ | 𝚆𝙴𝙻𝙲𝙾𝙼𝙴", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} welcome`}, 
 ]}, ] 
 let name = await conn.getName(m.sender) 
 const listMessage = { 
 text: ' ', 
 footer: `${name}!!* 

 ${author}`, 
 title: null, 
 buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢", 
 sections } 
 
 handler.help = ['en', 'dis'].map(v => v + 'able <option>') 
 handler.tags = ['group', 'owner'] 
 handler.command = /^(menucompleto|menu|help|menú|\?)$/i
 export default handler
