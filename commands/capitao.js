const Discord = require('discord.js');
img='./data/capitaowpp.jpg'
  module.exports.run = async (client, message, args) => {

  message.channel.send('Novo integrante dos avengers: CAPITÃO WHATSAPP');

  message.reply({files:img})
    .then(() => console.log(`Sent a reply to ${message.author.username}`))
    .catch(console.error);
};