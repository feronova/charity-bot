const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message' , (message) => {
	var input = message.content;
	if (input == '!tes') {
			message.channel.send("tis!", {
			tts:false
			})
	}
	if (input.indexOf('tolo') != -1 ) {
			message.channel.send("tolo is **FORBIDDEN**.", {
			tts:false
			})
	}
	if (input == 'bacot') {
			message.channel.send("ngentot", {
			tts:false
			})
	}
	if (input == 'bacod') {
			message.channel.send("ngentod", {
			tts:false
			})
	}
	if (input == 'bct') {
			message.channel.send("ntot", {
			tts:false
			})
	}
	if (input == 'bcd') {
			message.channel.send("ntod", {
			tts:false
			})
	}
	if (input.indexOf('gajelas') != -1 ) {
			message.channel.send("gajelas is **FORBIDDEN**.", {
			tts:false
			})
	}
	if (input.indexOf('ded') != -1 ) {
			message.channel.send("ded is **FORBIDDEN**.", {
			tts:false
			})
	}
	if (input == 'meanwhile') {
			message.channel.send("lol is the most played game in za warudo and dicktus is the most ded game universe.", {
			tts:false
			})
	}
	if (input.indexOf('@everyone') != -1 ) {
			message.channel.send("woi bangsat jangan tag2 orang gajelas ccd kasian yg invis mode", {
			tts:false
			})
	}
	if (input.indexOf('lol') != -1 ) {
			message.channel.send("LoL XD = lambang ketawa yang biasa dipakai otaku (tapi orang biasa juga suka)", {
			tts:false
			})
	}
});
client.login(process.env.BOT_TOKEN);
