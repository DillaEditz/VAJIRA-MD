const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = '🐶 𝕮𝖍𝖚𝖙𝖎 𝕯𝖍𝖔𝖓𝖎 𝕸𝕯 🐶';
const FOOTERNAME = '𝕮𝖍𝖚𝖙𝖎 𝕯𝖍𝖔𝖓𝖎 𝕸𝕯 ʙʏ ᴅɪʟʟᴀ ᴇᴅɪᴛᴢ';
global.owner = process.env.OWNER_NUMBER  || '94764570094' ;  // ADD YOUR NUMBER WITHOUT +
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'youre session id' ,
travaSend: process.env.TRAVA_SEND || '25' ,   
MODERATORS : process.env.MODERATORS === undefined ? "94727196307,94767630094" : process.env.MODERATORS ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '3000': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || 'ᗪ|ㄥㄥ卂 乇ᗪ|ㄒ乙' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://telegra.ph/file/81d0bbe5364e959ab4537.jpg` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
FOOTER: process.env.FOOTER || '‌𝕮𝖍𝖚𝖙𝖎 𝕯𝖍𝖔𝖓𝖎 𝕸𝕯 ʙʏ ᴅɪʟʟᴀ ᴇᴅɪᴛᴢ',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || true  ,
AUTO_REACT:  process.env.AUTO_REACT  || true  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || true  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || true  ,
AUTO_BIO:  process.env.AUTO_BIO  || true  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || true  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    
AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE,
ANTI_LINK: process.env.ANTI_LINK || true  ,
BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,    
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || true  ,
ALIVE: process.env.ALIVE || `default`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || true  ,
AUTO_STICKER: process.env.AUTO_STICKER || true  ,
WELCOME:  process.env.WELCOME  || true ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
};
