import { watchFile, unwatchFile } from 'fs' 
 import chalk from 'chalk' 
 import { fileURLToPath } from 'url' 
 import fs from 'fs' 
  
  
 global.owner = [ 
   ['51946352266', '𝙎𝙧 𝘾𝙖𝙬𝙣𝙖 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙛𝙞𝙘𝙞𝙖𝙡', true], 
 ] // Cambia los numeros que quieras 
 global.suittag = ['51946352266']  
 global.mods = []  
 global.prems = []  
  
 global.APIs = { // API Prefix 
   // name: 'https://website' 
   amel: 'https://melcanz.com', 
   bx: 'https://bx-hunter.herokuapp.com', 
   nrtm: 'https://nurutomo.herokuapp.com', 
   xteam: 'https://api.xteam.xyz', 
   nzcha: 'http://nzcha-apii.herokuapp.com', 
   bg: 'http://bochil.ddns.net', 
   fdci: 'https://api.fdci.se', 
   dzx: 'https://api.dhamzxploit.my.id', 
   bsbt: 'https://bsbt-api-rest.herokuapp.com', 
   zahir: 'https://zahirr-web.herokuapp.com', 
   zeks: 'https://api.zeks.me', 
   hardianto: 'https://hardianto-chan.herokuapp.com', 
   pencarikode: 'https://pencarikode.xyz',  
   LeysCoder: 'https://leyscoders-api.herokuapp.com', 
   adiisus: 'https://adiixyzapi.herokuapp.com', 
   lol: 'https://api.lolhuman.xyz', 
   pencarikode: 'https://pencarikode.xyz', 
   Velgrynd: 'https://velgrynd.herokuapp.com', 
   rey: 'https://server-api-rey.herokuapp.com', 
   hardianto: 'http://hardianto-chan.herokuapp.com', 
   shadow: 'https://api.reysekha.xyz', 
   apialc: 'https://api-alc.herokuapp.com', 
   botstyle: 'https://botstyle-api.herokuapp.com', 
   neoxr: 'https://neoxr-api.herokuapp.com', 
   ana: 'https://anabotofc.herokuapp.com/', 
   kanx: 'https://kannxapi.herokuapp.com/', 
   dhnjing: 'https://dhnjing.xyz', 
   violetics: 'https://violetics.pw' 
 }, 
 global.APIKeys = { // APIKey Here 
   // 'https://website': 'apikey' 
   'https://api-alc.herokuapp.com': 'ConfuMods', 
   'https://api.reysekha.xyz': 'apirey', 
   'https://melcanz.com': 'F3bOrWzY', 
   'https://bx-hunter.herokuapp.com': 'Ikyy69', 
   'https://api.xteam.xyz': '5bd33b276d41d6b4', 
   'https://zahirr-web.herokuapp.com': 'zahirgans', 
   'https://bsbt-api-rest.herokuapp.com': 'benniismael', 
   'https://api.zeks.me': 'apivinz', 
   'https://hardianto-chan.herokuapp.com': 'hardianto', 
   'https://pencarikode.xyz': 'pais',  
   'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',  
   'https://server-api-rey.herokuapp.com': 'apirey', 
   'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862', 
   'https://botstyle-api.herokuapp.com': 'Eyar749L', 
   'https://neoxr-api.herokuapp.com': 'yntkts', 
   'https://anabotofc.herokuapp.com/': 'AnaBot', 
   'https://violetics.pw': 'beta' 
 } 
  
 // Sticker WM 
 global.packname = '' 
 global.author = '𝕯̵͌͌ ❯  𝗦𝗿 𝗖𝗮𝘄𝗻𝗮🍷 ;;  死\n\n     ᴄᴏɴᴛᴀᴄᴛᴏ ᴅᴇ ᴡʜᴀᴛꜱᴀᴘᴘ\n               +51 946 352 266\n\n\n           ©ɴᴏ ᴄᴏᴘʏʀɪɢʜᴛ' 
  
 global.wm = '『卍』 𝙎𝙧 𝘾𝙖𝙬𝙣𝙖 𝘽𝙤𝙩 🍷' 
 global.igfg = '『卍』 𝙎𝙧 𝘾𝙖𝙬𝙣𝙖 𝘽𝙤𝙩 🍷' 
 global.wait = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*' 
  
 global.imagen1 = fs.readFileSync('./Menu2.jpg') 
 global.imagen2 = fs.readFileSync('./src/nuevobot.jpg')  
 global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png') 
  
 global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124'] 
 global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())] 
  
 global.lolkeysapi = ['85faf717d0545d14074659ad'] 
  
 global.multiplier = 9999  
  
 global.rpg = { 
   emoticon(string) { 
     string = string.toLowerCase() 
     let emot = { 
       level: '🏆', 
       limit: '💎', 
       exp: '🕹️' 
     } 
     let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string)) 
     if (!results.length) return '' 
     else return emot[results[0][0]] 
   } 
 } 
  
  
 let file = fileURLToPath(import.meta.url) 
 watchFile(file, () => { 
   unwatchFile(file) 
   console.log(chalk.redBright("Update 'config.js'")) 
   import(`${file}?update=${Date.now()}`) 
 })
