var telegram = require("telegram-bot-api");
var fs = require("fs");
var jc = require("./Jalali");
var keyboards = require("./keyboards");
var texts = require("./texts");

// console.log((new Date()).getYear() + '/' + (new Date()).getMonth() + '/' + (new Date()).getDate() + ', ' + (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds());
// console.log(jc.j2g([1394,05,19]));

var api = new telegram(
{
	token: texts.token,
	updates:
	{
		enabled: true,
		get_interval: 100
	}
});

api.on('message', function(message)
{
	if(message.text == '/start')
	{
/*complete the if (s) untill all combinations are covered. */
// should move all texts to a moduk=le
//should create 3 functons to check: is_admin() is_configing() is_reminder_on() where all get a chat id and return a boolean
// should create functions get_config_step() add_to_config() change_config_step() remove_from_config() add_to_reminder() remove_from_reminder()
		if(is_admin(message.chat.id))
		{
			api.sendMessage(
			{
				chat_id: message.chat.id,
				text: texts.start,
				reply_markup: JSON.stringify(keyboards.people_off)

			}, function(err, message)
			{
				if (err!=null)
				{
					fs.appendFile('output.log', '\n' + JSON.stringify(err), function (write_err)
					{
						if (write_err!=null)
							console.log(write_err);
					});
				}

				if (message!=null)
				{
					fs.appendFile('output.log', '\n' + JSON.stringify(message), function (write_err)
					{
						if (write_err!=null)
							console.log(write_err);
					});
				}

			});
		}

	}


	else if(message.text == '😅 راهنمایی م کن!' || message.text == '/help')
	{

		api.sendMessage(
		{
			chat_id: message.chat.id,
			text: texts.help
		}, function(err, message)
		{
			if (err!=null)
			{
				fs.appendFile('output.log', '\n' + JSON.stringify(err), function (write_err)
				{
					if (write_err!=null)
						console.log(write_err);
				});
			}

			if (message!=null)
			{
				fs.appendFile('output.log', '\n' + JSON.stringify(message), function (write_err)
				{
					if (write_err!=null)
						console.log(write_err);
				});
			}

		});

		api.sendPhoto(
		{
		    chat_id: message.chat.id,
		    caption: '',
	 		photo: 'img😅 راهنمایی م کن!.png',
		}, function(err, data)
		{

		if (err!=null)
		{
			fs.appendFile('output.log', '\n' + JSON.stringify(err), function (write_err)
			{
				if (write_err!=null)
					console.log(write_err);
			});
		}

		if (data!=null)
		{
			fs.appendFile('output.log', '\n' + JSON.stringify(data), function (write_err)
			{
				if (write_err!=null)
					console.log(write_err);
			});
		}

		});

	}


	else if(message.text == '🕒 جلسه بعدی چه زمانیه؟' || message.text == '/next_event')
	{

		api.sendMessage(
		{
			chat_id: message.chat.id,
			text: fs.readFileSync('next_event.txt','utf8')
		}, function(err, message)
		{
			if (err!=null)
			{
				fs.appendFile('output.log', '\n' + JSON.stringify(err), function (write_err)
				{
					if (write_err!=null)
						console.log(write_err);
				});
			}

			if (message!=null)
			{
				fs.appendFile('output.log', '\n' + JSON.stringify(message), function (write_err)
				{
					if (write_err!=null)
						console.log(write_err);
				});
			}

		});

	}
	else if(message.text == '😎 می خوام جلسه بعدی رو تعیین کنم!' || message.text == '/config')
	{

		var is_admin = false;
		var admin_list = fs.readFileSync('admin_list.txt', 'utf-8').toString().split("\n");
		for(i in admin_list)
		{
		    if(admin_list[i] == message.chat.id)
		    {
		    	is_admin = true;
		    }
		}

		if(is_admin == true)
		{

			var is_configing = false;
			var configing_list = fs.readFileSync('config_list.txt', 'utf-8').toString().split("\n");
			for(i in configing_list)
			{
			    if(configing_list[i].indexOf(message.chat.id) > -1) //string contains
			    {
			    	is_configing = true;
			    	var config_line = i;
			    }
			}
			if(is_configing == false)
			{

				api.sendMessage(
				{
					chat_id: message.chat.id,
					text: texts.config_0
				}, function(err, message)
				{
					if (err!=null)
					{
						fs.appendFile('output.log', '\n' + JSON.stringify(err), function (write_err)
						{
							if (write_err!=null)
								console.log(write_err);
						});
					}

					if (message!=null)
					{
						fs.appendFile('output.log', '\n' + JSON.stringify(message), function (write_err)
						{
							if (write_err!=null)
								console.log(write_err);
						});
					}

				});

				fs.appendFileSync('config_list.txt', '\n' + message.chat.id + ':none');
			}
			else
			{

				api.sendMessage(
				{
					chat_id: message.chat.id,
					text: texts.config_duplicate
				}, function(err, message)
				{
					if (err!=null)
					{
						fs.appendFile('output.log', '\n' + JSON.stringify(err), function (write_err)
						{
							if (write_err!=null)
								console.log(write_err);
						});
					}

					if (message!=null)
					{
						fs.appendFile('output.log', '\n' + JSON.stringify(message), function (write_err)
						{
							if (write_err!=null)
								console.log(write_err);
						});
					}

				});

			}

		}
		else
		{

			api.sendMessage(
			{
				chat_id: message.chat.id,
				text: texts.config_denied
			}, function(err, message)
			{
				if (err!=null)
				{
					fs.appendFile('output.log', '\n' + JSON.stringify(err), function (write_err)
					{
						if (write_err!=null)
							console.log(write_err);
					});
				}

				if (message!=null)
				{
					fs.appendFile('output.log', '\n' + JSON.stringify(message), function (write_err)
					{
						if (write_err!=null)
							console.log(write_err);
					});
				}

			});

			//logging illegal login to admin
			var message_text_illegal_login = texts.config_denied_report_start + message.from.username + texts.config_denied_report_end
			api.sendMessage(
			{
				chat_id: 110224344,
				text: message_text_illegal_login
			}, function(err, message)
			{
				if (err!=null)
				{
					fs.appendFile('warning.log', '\n' + JSON.stringify(err), function (write_err)
					{
						if (write_err!=null)
							console.log(write_err);
					});
				}

				if (message!=null)
				{
					fs.appendFile('warning.log', '\n' + JSON.stringify(message), function (write_err)
					{
						if (write_err!=null)
							console.log(write_err);
					});
				}

			});

		}
	}
	else
	{

		api.sendMessage(
		{
			chat_id: message.chat.id,
			text: texts.un_defined
		}, function(err, message)
		{
			if (err!=null)
			{
				fs.appendFile('output.log', '\n' + JSON.stringify(err), function (write_err)
				{
					if (write_err!=null)
						console.log(write_err);
				});
			}

			if (message!=null)
			{
				fs.appendFile('output.log', '\n' + JSON.stringify(message), function (write_err)
				{
					if (write_err!=null)
						console.log(write_err);
				});
			}

		});

	}

});
