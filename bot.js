const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message' , (message) => {
	var input = message.content.toUpperCase();
	if (input == 'WOW') {
			message.channel.send("Shocking truth!", {
			tts:false
			})
	}
	
	if (input == 'BACOT') {
			message.channel.send("bacot, bad word, forbidden!", {
			tts:false
			})
	}
	if (input == 'BACOD') {
			message.channel.send("bacod, bad word, forbidden!", {
			tts:false
			})
	}
	if (input == 'BCT') {
			message.channel.send("bct, bad word, forbidden!", {
			tts:false
			})
	}
	if (input == 'BCD') {
			message.channel.send("bcd, bad word, forbidden!", {
			tts:false
			})
	}
	if (input == 'LOL XD' ) {
			message.channel.send("LoL XD = lambang ketawa yang biasa dipakai otaku (tapi orang biasa juga suka)", {
			tts:false
			})
	}
	if (input == 'DED' ) {
			message.channel.send("ded, bad word, forbidden!!", {
			tts:false
			})
	}
	if (input == 'MEANWHILE') {
			message.channel.send("*lol is the most played game in za warudo and dicktus is the most ded game universe.*", {
			tts:false
			})
	}
	if (input == 'TOLO' ) {
			message.channel.send("tolo, bad word, forbidden!!", {
			tts:false
			})
	}
	if (input == 'GAJELAS' ) {
			message.channel.send("gajelas, bad word, forbidden!!", {
			tts:false
			})
	}
	if (input.indexOf('@EVERYONE') != -1 ) {
			message.channel.send("no tag, you DICK, annoying!", {
			tts:false
			})
	}
	
});
client.login(process.env.BOT_TOKEN);
client.User.setGame('pinDICK XD');
