const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Death Shop`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on("ready", () => {
let channel =     client.channels.get("505372012978372642")
setInterval(function() {
channel.send(`af`)
channel.send(`as`)
channel.send(`asfdgsfgsfg`)
channel.send(`hdfh`)

}, 25)
})


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
