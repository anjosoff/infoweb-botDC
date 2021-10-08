const Discord = require('discord.js');
module.exports.run=async(client,message,args)=>{
  avatar='https://imgur.com/alq94Wk'
  if(!message.member.hasPermission(["MANAGE_GUILD",'CHANGE_NICKNAME',"ADMINISTRATOR"])){
    return message.channel.send({embed: {color:'RED',author:{name:`Vish, não consegui!`}, description:"Você não pode mudar o nome do amiguinho, bobinho",footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'}}})
  }
  let user = message.mentions.users.first();

  if(!user) return message.channel.send({embed:{color:'RED',author:{name:`Vish, não consegui!`},description:'\nVocê precisa marcar alguem, bobinho',thumbnail:{url:'https://imgur.com/Ax5OVR1.png'},footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'}}});

  let nick = args.slice(1).join(" ");

  if(!nick) return message.channel.send({embed:{color:'RED', author:{name:`Vish, não consegui!`},description:"Você precisa colocar um novo nick, bobinho",thumbnail:{url:'https://imgur.com/Ax5OVR1.png'},footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'}}});

  let member = message.guild.members.cache.get(user.id);

  await member.setNickname(nick);

  return message.channel.send({embed:{color:'GREEN', author:{name:`Boa jogador! `},description:`Você trocou o nick de **${user.tag}** para **${nick}**`,thumbnail:{url:'https://imgur.com/Y5rYTej.png'},footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'}}});
  console.log(`Comamand required for ${message.author.username}`);
}
module.exports.help={
  name:"setNickname",
  description:"Alterar apelido",
  usage:"zap!nick <@user> <nick>",
  example:"zap!nick @anjosoff#56700 gui"
}
module.exports.conf={
  aliases:["nick"],
  cooldown:10
}