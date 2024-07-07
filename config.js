const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254702713600";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_26_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY0LFxuICAgICAgICA4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDc4LFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA5LFxuICAgICAgICA3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgOCxcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjgxa1NpWDNIWWJmL1BYWmh4cmZxL1lZN0p0K2F5d0tpeEZ1WEFZRFVlVFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQxODg3Nzg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRkY4Rjc4RjQ3Q0FDODFGQUYxMjAyNTRGRjgwNDFDMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNDA3OTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRGhzdFlSb1ZRcDZLMjl4YV9nZ1dXd1wiLFxuICBcInBob25lSWRcIjogXCJjM2IzNjNjOC0wMWMyLTQ3OTktODRjYS1hYzhiZjI2MDZkMTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgNDIsXG4gICAgICA5OCxcbiAgICAgIDIyLFxuICAgICAgMjAsXG4gICAgICAxNDYsXG4gICAgICAxOTUsXG4gICAgICA3MSxcbiAgICAgIDIyOCxcbiAgICAgIDIxMixcbiAgICAgIDMxLFxuICAgICAgMTgxLFxuICAgICAgOTksXG4gICAgICA4OSxcbiAgICAgIDIzOSxcbiAgICAgIDI4LFxuICAgICAgODYsXG4gICAgICAyMzMsXG4gICAgICAxNjgsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAyMTEsXG4gICAgICA1LFxuICAgICAgMjIzLFxuICAgICAgMTY5LFxuICAgICAgMTEsXG4gICAgICAxOTcsXG4gICAgICAxMjcsXG4gICAgICA1NCxcbiAgICAgIDEyMSxcbiAgICAgIDQ1LFxuICAgICAgODQsXG4gICAgICAzNCxcbiAgICAgIDE2NyxcbiAgICAgIDE2OSxcbiAgICAgIDIxMyxcbiAgICAgIDcsXG4gICAgICAxNjYsXG4gICAgICAxODgsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEw2NkJEUTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MTg4Nzc4NjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTk1ODg1MjczMTMxNDU6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUw1Nk1JR0VLK2lxYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRaXU3UW9mLzJyUFpyYWJkTncvdzhvcms3cGx4VG1uN3dPSHk1eHUvWlQwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkI2b3VDcUhTTlhNdkNuVnBtRDQ0Rm5mbU1OVitLU1FLNGN2Q0VUVGJiN0FLY2dRN2hsZnB0My96RHNDbnR5N0h0UGk4dy9kYUhsUnY0TVNid0NoMURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImt0RlJaQ1A5MHNBUE95U2txcVdiVEloZXV4NWdJQzM0RUxNQlQ2UHgwaVVkOGNvTGsrZkNWZUwwMGlWbUdRZ3hqZDNZblIzNnZWNHNBZGhtcXdlRmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MTg4Nzc4NjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNDA3ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGR1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZHWi5qc29uIjogIntcImtleURhdGFcIjpcImRPYVY2cmRYOW11aDJLSk1hVVB1bjZnK2phTGVyR0x0eTZpek1PWUtSem89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1MDc0NDE4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk0OTY5MjcxN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
