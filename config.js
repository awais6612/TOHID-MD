const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: IPsW2RoQ#9pzBSc2ItACUwHuIUkY3zxSFPhP108NfPxZOoiaakMg || "Manu-MD&rNsTHZwJ#8V5117okHxe59CMeyV1asPelfIbBPR-p8-2-yliIVc4", //Add Your Session id
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/042cd0b6121a7923fd5d2.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 🤓𝐓𝐎𝐇𝐈𝐃 𝐊𝐇𝐀𝐍 𝐌𝐃 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝓜𝓡 𝓣𝓞𝓗𝓘𝓓 ``| 2024🤍*",
AUTO_VOICE : process.env.AUTO_VOICE || "true",
READ_CMD: process.env.READ_CMD || "false",
MODE : process.env.MODE || "public",
AUTO_BIO : process.env.AUTO_BIO || "true",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
