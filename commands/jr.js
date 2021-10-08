const Discord = require('discord.js');
img='./data/zapzapjr.jpg'
  module.exports.run = async (client, message, args) => {
    message.channel.send('meu sobrinho WhatsApp Oliveira Jr');
  message.channel.send({files:[img]});
  console.log(`Comamand required for ${message.author.username}`);