const ping = require('./ping');
const eightBall = require('./8ball');
const meme = require('./meme');

// const guildID = process.env.GUILD_ID;
// const channelID = process.env.CHANNEL_ID;

const commands = {
  ping,
  '8ball': eightBall,
  meme,
};

// message.content.startsWith('!kick')

module.exports = async (msg) => {
  console.log(msg);
  // guild and channel check
  //   if (msg.guild.id === guildID && msg.channel.id === channelID) {
  const args = msg.content.split(' ');
  if (args.length === 0 || args[0].charAt(0) !== '!') return;
  const command = args.shift().substr(1);
  if (Object.keys(commands).includes(command)) {
    commands[command](msg, args);
  }
//   }
};
