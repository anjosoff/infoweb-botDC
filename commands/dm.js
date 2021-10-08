avatar='https://imgur.com/alq94Wk'
module.exports = {
  name: "dm",
  description: "DM a user in the guild",
  category: "fun",
  run: async (bot, message, args) => {
    message.delete();
    if (!message.member.permissions.has("SEND_MESSAGES"))
      return message.channel.send({embed:{color:'RED', description:`Você não ter permissão para usar este comando!${message.author}`,footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'}}}).then(msg => {
    msg.delete({ timeout: 10000})
  });
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send({embed:{color:'RED', description:`Você precisa marcar alguém! ${message.author}`,footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'}}}).then(msg => {
    msg.delete({ timeout: 10000})
  });
    if (!args.slice(1).join(" "))
      return message.channel.send({embed:{color:'RED', description:`Você precisa inserir uma messagem! ${message.author}`,footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'}}}).then(msg => {
    msg.delete({ timeout: 10000})
  });
    let msg=args.slice(1).join(" ")
    msg='`'+String(msg)+'`'
    user.user
      .send({embed:{
        color:'GREEN',
        description:`> **${message.author.username}** enviou uma DM para você **${user}** \n\n ${msg}`,
        footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'
        }}})
      .then(() => message.channel.send({embed:{color:'GREEN', description:`DM enviada para **${user}**`,footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'}}}))
      .catch(() => message.channel.send({embed:{color:'RED', description:`Houve um erro ao enviar mensagem para ${user}, verifique se a DM do destinatário está aberta!`,footer:{text:'Duvidas? zap!help | developed by @anjosoff',icon_url:avatar+'.jpg'}}}));
    console.log(`Comamand required for ${message.author.username}`);
  },
};