const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`in Love ♣`,'https://www.twitch.tv/Straimng');
  console.log('BOT ONLINE');
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
