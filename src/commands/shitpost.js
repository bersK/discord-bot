const imgapi = require('imageapi.js')

require('dotenv').config();
const subreddit = process.env.SHITPOST_SUB;

module.exports = async (msg, args) => {
    try {
        await msg.channel.send(await imgapi(subreddit.toString(), false));
    } catch (error) {
        console.log('Ooga booga fails catch error');
    }
    console.log(`Subreddit: ${subreddit}`);
};