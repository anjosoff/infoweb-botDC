const Discord= require('discord.js');
module.exports.run = async (client, message) => {
  avatar='https://imgur.com/alq94Wk'
  message.channel.send({embed:{color:'GREEN', description:`Opa ${message.author.username}, pediu o link de convite? \n<a:setavermelha:859533933929299978>https://discord.gg/25HxF5487U`,footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'}}});
  console.log(`Sent a reply for ${message.author.username}`);
};