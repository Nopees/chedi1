const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("618486143050317846")
setInterval(function() {
channel.send(`haroonylove haroonylove haroonylove`);
}, 30)
})


client.login(process.env.BOT_TOKEN);
