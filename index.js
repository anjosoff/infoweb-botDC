const express = require('express');
const app = express();
app.get("/", (request, response) => {
  //iniciando o bot
  const ping = new Date();
  
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client

const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
//colocar comandos apartir daqui
client.on("message", message => {
  //comandos
  if (message.author.bot)
    return;
  if (message.channel.type == "dm") return;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@!${ client.user.id }>`) || message.content.startsWith(`<@${ client.user.id }>`))      return;
  const args = message.content.trim().slice(config.prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();
      
try {
  const commandFile = require(`./commands/${command}.js`)
  commandFile.run(client, message, args);
} catch (err) {
  message.delete();
  comandoerr="`"+String(message)+"`"
  message.channel.send({embed:{color:'RED',author:{name:`Não consegui identificar o comando!`},thumbnail:{url:'https://imgur.com/Ax5OVR1.png'},description:`${comandoerr} não existe`+'\n> Veja todos os meus comandos em `zap!help` ',fields:[{name:'About developer',value:'《 [Instagram](https://instagram.com/idk_anjos) 》  《 [Github](https://github.com/anjosoff) 》'}],timestamp: new Date(),footer:{text:`Duvidas? zap!help | developed by @anjosoff`}}}).then(msg => {
    msg.delete({ timeout: 30000/*time unitl delete in milliseconds*/})
  });
  
  console.error(err);
}
});
avatar='https://imgur.com/DoOJTbN'
client.on("message",message=>{
  
  avatar='https://imgur.com/DoOJTbN'
  if(message.content=='zap!comandos'){
    message.channel.send({embed:{color:'RED',description:'O COMANDO FOI RENOMEADO PARA `zap!help`',thumbnail:{url:'https://imgur.com/Ax5OVR1.png'},fields:[{name:'About developer',value:'《 [Instagram](https://instagram.com/idk_anjos) 》  《 [Github](https://github.com/anjosoff) 》'}],timestamp: new Date(),footer:{text:`Duvidas? zap!help | developed by @anjosoff`}}}).then(msg => {
    msg.delete({ timeout: 14400000})});
    
  }
  if(message.content=='fuderoso'){
     message.channel.send({files:["./data/fuderoso.jpg"]});
     console.log(`Comamand required for ${message.author.username}`);
  }
});


client.on("ready",()=>{

  const hora = new Date();
  hora.setHours(hora.getHours() - 3);
const channel = client.channels.cache.find(channel => channel.id === '859079092396490802');
const channel2 = client.channels.cache.find(channel => channel.id === '885861511602503680'); //id canal de avisos
//channel2.send({embed:{color:'GREEN',description:'**LUIGIZAP INFOWEB BOT - REPOSITÓRIO**\n No github você poderá acompanhar os updates (commits)\n [Clique aqui para ir ao repositório no Github](https://github.com/anjosoff/infoweb-botDC)',fields:[{name:'About developer',value:'《 [Instagram](https://instagram.com/idk_anjos) 》  《 [Github](https://github.com/anjosoff) 》'}],timestamp: new Date(),footer:{text:`Duvidas? zap!help | developed by @anjosoff`}}});
//channel2.send({embed:{color:'YELLOW',image:{url:'https://imgur.com/gJBr4P5.png'},fields:[{name:'Orientações para aula de Educação Física presencial <a:verify:859533310891786270>',value:'📌Atualizado conforme o post no [CLASSROOM](https://classroom.google.com/u/3/c/NDI1NzM5Mjg5NjI4/m/NDYwMDg3OTk1MTAy/details)'}],timestamp: new Date(),footer:{text:`Duvidas? zap!help | developed by @anjosoff`}}});
  avatar='https://imgur.com/DoOJTbN'
channel.send({embed:{color:'YELLOW',author:{name:'BOT INFOWEB20'},description:`ONLINE! <a:verify:859533310891786270>`,thumbnail:{url:'https://imgur.com/Ynmq2tq.png'},fields:[{name:'About developer',value:'《 [Instagram](https://instagram.com/idk_anjos) 》  《 [Github](https://github.com/anjosoff) 》'}],timestamp: new Date(),footer:{text:`Duvidas? zap!help | developed by @anjosoff`}}}).then(msg => {
    msg.delete({ timeout: 43200000})});
  //status de atividade do bot
  let activities=[
    `use ${config.prefix} para executar comandos`,
    'égua boe',
    'versão 2.0',
    `ta em duvida de como usar? zap!help`,
  ],
  i=0;
  setInterval(()=>client.user.setActivity(`${activities[i++ %activities.length]}`,{
    type: "PLAYING"
  
  }),5000);
  let activities2=[
    `use ${config.prefix} para executar comandos`,
    `developed by @anjosoff`,
    `ta em duvida de como usar? zap!help`,
  ],
  ii=0;
  setInterval(()=>client.user.setActivity(`${activities2[ii++ %activities2.length]}`,{
    type: "WATCHING"
  
  }),10000);
  
  console.log("LOG:INFOWEBZAPAP ONLINE");
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token'