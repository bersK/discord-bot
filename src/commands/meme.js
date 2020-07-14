const imgapi = require('imageapi.js');

const subOptions = {
  1: 'meme',
  2: 'dankmemes',
  3: 'trashy',
};

// TODO: Some kind of sub validition to be an actual meme sub
module.exports = async (msg, args) => {
  if (subOptions.valueOf(args[0])) {
    try {
      if (Object.values(subOptions).includes(args[0])) {
        await msg.channel.send(await imgapi(args[0], false));
      } else {
        await msg.channel.send(await imgapi(subOptions[args[0]], false));
      }
    } catch (error) {
      const options = Object.values(subOptions).map((el) => `\n${el}`);
      const response = `Invalid subreddit, the options are: ${options}`;
      await msg.channel.send(response);

      console.log('Ooga booga fails catch error');
    }
    console.log(`Subreddit: ${subOptions[args[0]]}`);
  } else if (args[0] === 'help' || args[0] === 'h') {
    try {
      await msg.channel.send('Mess up harder next time.');
    } catch (error) {
      console.log('Error: help');
    }
  }
};
