avatar='https://imgur.com/alq94Wk'
const Discord = require('discord.js');
  module.exports.run = async (client, message, args) => {
     message.channel.send({embed:{color:'GREEN',title:'⌨️ **MEUS COMANDOS** ⌨️',fields:[{name:'About developer',value:'《 [Instagram](https://instagram.com/anjosoff) 》  《 [Github](https://github.com/anjosoff) 》'}],timestamp: new Date(),footer:{text:`Duvidas? zap!help | developed by @anjosoff`}, description:'> **DIVERSÃO**\n`akira`\n`capitao`\n`jr`\n`perolas`\n`wfc`\n> **AÇÃO**\n`fale [message]`\n`nick` *(Troca nick de um usuario, é necessesário permissão para usar este comando!)*\n`pv [@user] [message]` *(envie uma mesagem secretamente)*\n`beijar [@user] [@user]`\n`dm [@user] [message]` *(enviar mensagem direta)*'}}).then(msg => {
    msg.delete({ timeout: 30000})
  });
    console.log(`Sent a reply to ${message.author.username}`);
};