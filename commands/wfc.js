const Discord = require('discord.js');
img='./data/wfc.jpg'
  module.exports.run = async (client, message, args) => {
  const wfc = args.join(' ');
  //message.delete().catch(O_o => {});
    message.channel.send('WHATSAPP FUTEBOL CLUB');
  message.channel.send({files:[img]});
  console.log(`Comamand required for ${message.author.username}`);
};