const Discord = require('discord.js');
avatar='https://imgur.com/DoOJTbN'
module.exports.run = async (client, message, args) => {
  number=3
  imgNumber=Math.floor(Math.random()*(number-1+1))+1;
  message.channel.send({files:["./data/perolas/"+imgNumber+".jpg"]})
  console.log(`Comamand required for ${message.author.username}`);
}