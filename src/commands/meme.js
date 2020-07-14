const imgapi = require('imageapi.js');

const subOptions = {
  1: 'meme',
  2: 'dankmemes',
  3: 'trashy',
};

// TODO: Some kind of sub validition to be an actual meme sub
module.exports = async (msg, args) => {
  if (Object.keys(subOptions).includes(args[0])) {
    const img = await imgapi(subOptions[args[0]], false);
    await msg.channel.send(img);

    console.log(`Subreddit: ${subOptions[args[0]]}`);
  } else if (args[0] === 'help' || args[0] === 'h') {
    await msg.channel.send('Mess up harder next time.');
  } else {
    const response = `Invalid subreddit, the options are [number or name] \n${JSON.stringify(subOptions, null, 4)}`;
    await msg.channel.send(response);
  }
};
