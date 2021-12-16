const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const aviso = args.join(' ');
  message.delete().catch(O_o => {});
  if(!message.member.hasPermission(["MANAGE_GUILD","MANAGE_ROLES","ADMINISTRATOR"])){
    return message.channel.send({embed: {color:'YELLOW',author:{name:`Vish, não consegui!`}, description:"Você não pode criar um aviso, bobinho",footer:{text: `Duvidas? zap!help | developed by @anjosoff | Tentativa de criação de aviso via comando por: ${message.author.username} `}}}).then(msg => {
    msg.delete({ timeout: 10000})});
  }
    if(aviso==''){
      return message.channel.send({embed: {color:'YELLOW',author:{name:`Vish, não consegui!`}, description:"Você não colocou nada no aviso, bobinho",footer:{text: `Duvidas? zap!help | developed by @anjosoff | Tentativa de criação de aviso via comando por: ${message.author.username} `}}}).then(msg => {msg.delete({ timeout: 10000})});
    }else{
      message.channel.send({embed:{color:'RED',description:`**AVISO DE ${message.author.username}**\n ${aviso}`,timestamp: new Date(),footer:{text:`Duvidas? zap!help | Aviso criado via comando por: ${message.author.username}`}}});
    console.log(`Comamand required for ${message.author.username}`);
    }
  
};