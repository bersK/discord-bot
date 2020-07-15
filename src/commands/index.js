const ping = require('./ping');
const eightBall = require('./8ball');
const meme = require('./meme');
const shitpost = require('./shitpost')
const qnko = require('./inside_jokes/qnko')

// const guildID = process.env.GUILD_ID;
// const channelID = process.env.CHANNEL_ID;

const commands = {
  ping,
  '8ball': eightBall,
  meme,
  shitpost,
  qnko,
};

// message.content.startsWith('!kick')

module.exports = async (msg) => {
  console.log(msg);
  // guild and channel check
  //   if (msg.guild.id === guildID && msg.channel.id === channelID) {
  // split message into arguments 
  const args = msg.content.split(' ');
  // If it's empty or doesn't have the ! sign, return;
  if (args.length === 0 || args[0].charAt(0) !== '!') return;
  const command = args.shift().substr(1);
  // Check if the command exists in the list and call it
  if (Object.keys(commands).includes(command)) {
    commands[command](msg, args);
  }
  //   }
};