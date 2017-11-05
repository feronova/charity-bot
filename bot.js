var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
	switch(message) {
		case 'bacot':
			bot.sendMessage({
				to: channelID,
				message: 'ngentot!'
			});
		break;
		case 'tolo':
			bot.sendMessage({
				to: channelID,
				message: '*R.I.P. WEGHA*'
			});
		break;
		case 'gajelas':
			bot.sendMessage({
				to: channelID,
				message: '**FORBIDDEN WORD DETECTED**'
			});
		break;
		case 'ded gem':
			bot.sendMessage({
				to: channelID,
				message: 'meanwhile lol is the most played game in za warudo and dicktus is the most ded game universe'
			});
		break;
		case '@everyone':
			bot.sendMessage({
				to: channelID,
				message: 'gajelas lu ngetag orang sembarangan'
			});
		break;
	 }
});

client.login(process.env.BOT_TOKEN);
