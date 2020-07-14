const ping = require('./ping');
const eightBall = require('./8ball');

const commands = {
  ping,
  '8ball': eightBall,
};

// message.content.startsWith('!kick')

module.exports = async (msg) => {
  console.log(msg);
  // guild and channel check
  //   if (msg.guild.id === guildID && msg.channel.id === channelID) {
  const args = msg.content.split(' ');
  if (args.length == 0 || args[0].charAt(0) !== '!') return;
  const command = args.shift().substr(1);
  if (Object.keys(commands).includes(command)) {
    commands[command](msg, args);
  }
//   }
};
