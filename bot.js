const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	client.user.setPresence({ game: { name: 'Duel 3 kotak', type: 0 } });
});
client.on('message' , (message) => {
	var input = message.content.toUpperCase();
	if (input.indexOf('WOW') != -1 ) {
			message.channel.send("terkejut!", {
			tts:false
			})
	}
	
	if (input == 'BACOT') {
			message.channel.send("SP 1", {
			tts:false
			})
	}
	if (input == 'BACOD') {
			message.channel.send("SP 1", {
			tts:false
			})
	}
	if (input == 'BCT') {
			message.channel.send("SP", {
			tts:false
			})
	}
	if (input == 'BCD') {
			message.channel.send("SP", {
			tts:false
			})
	}
	if (input.indexOf('LOL XD') != -1 ) {
			message.channel.send("XD = lambang ketawa yang biasa dipakai otaku (tapi orang biasa juga suka)", {
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
	if (input.indexOf('TOLO') != -1 ) {
			message.channel.send("t*lo kata terlarang!", {
			tts:false
			})
	}
	if (input.indexOf('@EVERYONE') != -1 ) {
			message.channel.send("tag everyone dapet SP 1", {
			tts:false
			})
	}
	
});
client.login(process.env.BOT_TOKEN);
