const Discord = require('discord.js');
img='./data/akire.jpg'
  module.exports.run = async (client, message, args) => {
    message.reply(`Akira filtro de barro`)
    .then(() => console.log(`Sent a reply to ${message.author.username}`))
    .catch(console.error)
  message.channel.send({files:[img]});
  console.log(`Comamand required for ${message.author.username}`);
};