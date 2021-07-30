const Discord = require('discord.js'); 
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js'); 
const config = require("./config.json");
const keepAlive = require('./server.js'); 

const fs = require('fs'); 
let { readdirSync } = require('fs'); 

client.commands = new Discord.Collection();

client.on("ready", async () => {
  
  console.log("Vamo carajo!");
  console.log(` logeado en  ${client.user.tag}`);
});

const reptime = (
client.commands = new Discord.Collection());

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("message", async message => {
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.substring(config.prefix.length).split(" ");
  const command = args.shift().toLowerCase();
  const command_function = client.commands.get(command);
  
  if (command_function !== undefined) {
    command_function.execute(client, message, args, db);
  }
})