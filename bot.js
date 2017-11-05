const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message' , (message) => {
	if (message.content == '!tes') {
			message.channel.send("tis!", {
			tts:false
			})
	}
});
client.login(process.env.BOT_TOKEN);
