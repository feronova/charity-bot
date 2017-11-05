const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message' , (message) => {
	var input = message.content.toUpperCase();
	if (input == '!tes') {
			message.channel.send("tis!", {
			tts:false
			})
	}
	
	if (input == 'BACOT') {
			message.channel.send("ngentot", {
			tts:false
			})
	}
	if (input == 'BACOD') {
			message.channel.send("ngentod", {
			tts:false
			})
	}
	if (input == 'BCT') {
			message.channel.send("ntot", {
			tts:false
			})
	}
	if (input == 'BCD') {
			message.channel.send("ntod", {
			tts:false
			})
	}
	if (input == 'LOL XD' ) {
			message.channel.send("LoL XD = lambang ketawa yang biasa dipakai otaku (tapi orang biasa juga suka)", {
			tts:false
			})
	}
	if (input == 'DED' ) {
			message.channel.send("ded is **FORBIDDEN**.", {
			tts:false
			})
	}
	if (input == 'MEANWHILE') {
			message.channel.send("lol is the most played game in za warudo and dicktus is the most ded game universe.", {
			tts:false
			})
	}
	if (input == 'TOLO' ) {
			message.channel.send("tolo is **FORBIDDEN**.", {
			tts:false
			})
	}
	if (input == 'GAJELAS' ) {
			message.channel.send("gajelas is **FORBIDDEN**.", {
			tts:false
			})
	}
	if (input.indexOf('@EVERYONE') != -1 ) {
			message.channel.send("woi bangsat jangan tag2 orang gajelas ccd kasian yg invis mode", {
			tts:false
			})
	}
	
});
client.login(process.env.BOT_TOKEN);
