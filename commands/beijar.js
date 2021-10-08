const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete().catch(O_o => {});
var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('mencione um usario para beijar ex: zap!beijar @zapzapbot');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('* BEIJANDO *')
        .setColor('#000000')
        .setImage(`https://imgur.com/ExrQc55.gif`)
        .setDescription(`${message.author} beijou ${user}`)
        .setFooter('developed by @anjosoff')
  await message.channel.send(embed);
  console.log(`Comamand required for ${message.author.username}`);
}