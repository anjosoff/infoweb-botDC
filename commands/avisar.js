const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(["MANAGE_GUILD","MANAGE_ROLES","ADMINISTRATOR"])){
    return message.channel.send({embed: {color:'RED',author:{name:`Vish, não consegui!`}, description:"Você não pode criar um aviso, bobinho",footer:{text:'Duvidas? zap!help | developed by @anjosoff'}}})
  }else{
    const sayMessage = args.join(' ');
    message.delete().catch(O_o => {});
    message.channel.send({embed:{color:'RED',description:`**AVISO DE ${message.author.username}**\n ${sayMessage}`,timestamp: new Date(),footer:{text:`Duvidas? zap!help | Aviso criado via comando por: ${message.author.username}`}}});
    console.log(`Comamand required for ${message.author.username}`);

  }
  
};