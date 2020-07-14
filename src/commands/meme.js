const imgapi = require('imageapi.js');

module.exports = async (msg, args) => {
  if (args[0].length !== 0) {
    const img = await imgapi(args[0], false);
    await msg.channel.send(img);
    console.log(`Subreddit: ${args[0]}`);
  } else {
    const img = await imgapi('meme', false);
    await msg.channel.send(img);
  }
};
