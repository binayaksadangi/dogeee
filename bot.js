console.log("hello bro...hui hui");

require('dotenv').config();


const Discord = require('discord.js');
const client = new Discord.Client();//clint is a object which connects with discord api to run the bot
client.login(process.env.BOTTOKEN)


const commandHandler = require('./commands')
client.on('message', commandHandler);

