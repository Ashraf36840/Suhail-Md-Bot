const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2347019960000";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_24_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODksXG4gICAgICAgIDcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDMzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgODgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFTkRiNDJwVU9tcllTdGdNQ3k1ME43dkZXZHZVY3g0SHZaYklzRVFDYmN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsN0o2NDRXOFNjeUllSU5JZFB5aEd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjBjYjQ0NTk1LTU5NTItNGJmYi1hYWYyLWYwMDgzOTM0ZDljNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAxNDMsXG4gICAgICA4MyxcbiAgICAgIDEsXG4gICAgICAxMjUsXG4gICAgICAyNDksXG4gICAgICAxMzQsXG4gICAgICAyMTYsXG4gICAgICAxMzUsXG4gICAgICA4MixcbiAgICAgIDQzLFxuICAgICAgMTgzLFxuICAgICAgMjUsXG4gICAgICA3NyxcbiAgICAgIDIyOSxcbiAgICAgIDE2LFxuICAgICAgMzcsXG4gICAgICAyMTQsXG4gICAgICA1MSxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAxMDEsXG4gICAgICAxOSxcbiAgICAgIDEyNCxcbiAgICAgIDExMCxcbiAgICAgIDEwNixcbiAgICAgIDkxLFxuICAgICAgMjgsXG4gICAgICAyMjQsXG4gICAgICA0NixcbiAgICAgIDIzMCxcbiAgICAgIDIzNyxcbiAgICAgIDEyOCxcbiAgICAgIDIyNCxcbiAgICAgIDIwMSxcbiAgICAgIDU5LFxuICAgICAgNTIsXG4gICAgICAxNDMsXG4gICAgICA1MSxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkMxQjlMRkY4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDE5OTYwMDAwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNLkFzaHJhZmZmZlwiLFxuICAgIFwibGlkXCI6IFwiNDgxMDgwOTY1MDc5ODQ6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZUs4OTBIRVBtOC9yZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImI2QnJwQk5QcVFLM2xNSS8wZkRjRHVpL3RoVWhHMXcrYlY1WFREejZJeWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjNPaVRuSFNuWU1VSVpOWWEwSExjdUtHY3gvV2JBcGtjcFFpbU9Jd0N4Y201V0t5STRydEU2am96czJiZHVFSnRwOWZuU2JtSFNkZnhnclZjdEhGRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibUNXbnIzR0JoMHFHaW5RcXlxMWY5eDhFU2hnS3Y3d2k1UElwWGpNeHA1WTJwRkljVGNKMUQ2T0dwanpOU3JwaTVmOGtDNFJBTmRRNUpldlNQZTYvakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxOTk2MDAwMDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDEyNTQzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs3dVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzd1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwic2dZZitBZ1JCL2ZPZnBtVmdGVGhvUUFhY2ExbklzMm0zYXpzV29IVlNtbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDc1OTY4NzkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwMTI1NDEyNDI4XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
