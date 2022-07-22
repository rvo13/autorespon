const keepAlive = require("./server")
let discord = require('discord.js-selfbot-v13')
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16))
const blacklistuser = [' ']; // Example: ['888960610493149235','888960610493149235']; 
const autorespond = "on" // on = Enable Auto Respond, off = Disable auto respond 
const botping = "no" // no = Disable Auto Respond When Bot Ping You, yes = Enable Auto Respond When Bot Ping You
let client = new discord.Client({
  checkUpdate: false,
});
keepAlive()
client.login(TOKEN)

client.on("ready", () => {
  console.log(`Username: ${client.user.username}#${client.user.discriminator}`)
  if(autorespond === "on"){ 
     console.log('AutoRespond = Enable✅\nFor Disable AutoRespond Change autorespond = "off"')
  }
  if(autorespond === "off"){
     console.log('AutoRespond = Disable❌\nFor Enable AutoRespond Change autorespond = "on"')
  }
}) 

client.on("messageCreate", (message) => {
    if(message.content.includes(`<@${client.user.id}>`)) {
       if(autorespond === "on"){ // For Check If Enable / Disable
          if(blacklistuser.includes(message.author.id)) return false; // For Check If User Is Blacklisted Or Not        
          if(botping === "no"){ // For Check If botping is yes or no
            if(message.author.bot) return false;
          }
         message.channel.send("**Halo, Kalo Mau Order Bisa DM ya😅☝️** - Auto Respond"); // Edit Your Message Auto Respond Here
       }
     }
});