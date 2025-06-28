const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/5XSnTLCn"',
ALIVE_MSG:prosess.env.ALIVE_MSG ||  "HEllO,I am YourName",
};


