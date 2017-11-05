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
	if (message.content == 'tolo') {
			message.channel.send("tolo is **FORBIDDEN**.", {
			tts:false
			})
	}
	if (message.content == 'bacot') {
			message.channel.send("ngentot", {
			tts:false
			})
	}
	if (message.content == 'bacod') {
			message.channel.send("ngentod", {
			tts:false
			})
	}
	if (message.content == 'bct') {
			message.channel.send("ntot", {
			tts:false
			})
	}
	if (message.content == 'bcd') {
			message.channel.send("ntod", {
			tts:false
			})
	}
	if (message.content == 'gajelas') {
			message.channel.send("gajelas is **FORBIDDEN**.", {
			tts:false
			})
	}
	if (message.content == 'ded gem') {
			message.channel.send("ded gem is **FORBIDDEN**.", {
			tts:false
			})
	}
	if (message.content == 'meanwhile') {
			message.channel.send("lol is the most played game in za warudo and dicktus is the most ded game universe.", {
			tts:false
			})
	}
	if (message.content == '@everyone') {
			message.channel.send("woi bangsat jangan tag2 orang gajelas ccd kasian yg invis mode", {
			tts:false
			})
	}
});
client.login(process.env.BOT_TOKEN);
