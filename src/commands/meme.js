const imgapi = require('imageapi.js');

const subOptions = {
  1: 'meme',
  2: 'dankmemes',
  3: 'trashy',
};

// TODO: Some kind of sub validition to be an actual meme sub
module.exports = async (msg, args) => {
  if (Object.keys(subOptions).includes(args[0]) ||
      Object.values(subOptions).includes(args[0]) 
  ) {
  // if (args[0].length !== 0) {
    try {
      await msg.channel.send(await imgapi(subOptions[args[0]], false));
    } catch (error) {
      console.log('Ooga booga fails');
    }

    console.log(`Subreddit: ${subOptions[args[0]]}`);
  } else if (args[0] === 'help' || args[0] === 'h') {
    try {
      await msg.channel.send('Mess up harder next time.');
    } catch (error) {
      console.log('Error: help');
    }
  } else {
    const options = Object.values(subOptions).map((el) => `\n${el}`);
    const response = `Invalid subreddit, the options are: ${options}`;
    await msg.channel.send(response);

    console.log(`Argument 0:${args[0]}`);
  }
};
