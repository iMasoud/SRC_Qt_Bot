var telegram = require('telegram-bot-api');
var api = new telegram(
{
	token: '115019981:AAFzcblasg63yTiIdTsJ4Av5k2hXuGuQbsU',
	updates:
	{
		enabled: true,
		get_interval: 1000
	}
});

api.on('message', function(message)
{
	var chat_id = message.chat.id;

	api.sendMessage(
	{
		chat_id: message.chat.id,
		text: message.text ? message.text : 'This message doesn\'t contain text :('
	}, function(err, message)
	{
		console.log(err);
		console.log(message);
	});
});

