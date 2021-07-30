const Discord = require("discord.js")
const Client = new Discord.Client
let test = "u gay"

module.exports = {
    name : 'eval',
    execute(client, message, args, db){

  if(message.author.id !== "705786406303432845") return;

    const command = message.content.split(' ').slice(1).join(' ');
    message.channel.send(
`\`\`\`js
${eval(command)}
\`\`\``);

  }
}