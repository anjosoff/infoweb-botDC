const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send("> "+sayMessage);
  console.log(`Comamand required for ${message.author.username}`);
};