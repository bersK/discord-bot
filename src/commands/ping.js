module.exports = async (msg) => {
  await msg.channel.send('Pong!');
  console.log('Pong (sent)');
};
