var telegram = require("telegram-bot-api");
var fs = require("fs");
var jc = require("./Jalali");
var keyboards = require("./keyboards");

// console.log((new Date()).getYear() + '/' + (new Date()).getMonth() + '/' + (new Date()).getDate() + ', ' + (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds()); 
// console.log(jc.j2g([1394,05,19]));

var api = new telegram(
{
	token: '115019981:AAFzcblasg63yTiIdTsJ4Av5k2hXuGuQbsU',
	updates:
	{
		enabled: true,
		get_interval: 100
	}
});

api.on('message', function(message)
{
	if(message.text == '😅 راهنمایی م کن!' || message.text == '/help')
	{

		api.sendMessage(
		{
			chat_id: message.chat.id,
			text: 'همونطور که قبلا گفتم می تونم زمان و مکان جلسه بعدی گروه کیوت مرکز تحقیقات رو بهت بگم. اگر هم بخوای می تونم روز قبل هر جلسه بهت یاد آوری کنم. 😉\nبرای انجام این کار ها باید دستورش رو برام ارسال کنی. فقط کافیه روی کلیدی که توی تصویر مشخص کردم کلیک کنی!\n(توضیحات هر دستور رو برات کنارش نوشتم. 😜)'
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
	else if(message.text == '/start')
	{

		api.sendMessage(
		{
			chat_id: message.chat.id,
			text: 'من نمی تونم به زبان شما انسان ها صحبت کنم! 😅\nپس باید روی اون دکمه ای که توی تصویر برات مشخص کردم کلیک کنی و از طریق اون دستور ها با من صحبت کنی! 😊',
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

		api.sendPhoto(
		{
		    chat_id: message.chat.id,
		    caption: '',
	 		photo: 'img😅 راهنمایی م کن!.png'
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
					text: 'بسیار خوب! برای تنظیم اطلاعات جلسه بعدی من سوالاتی رو به ترتیب ازت می پرسم و تو باید پاسخ دقیق بدی! 😎\nجدی می گم! اگه اطلاعات جلسه رو اشتباه وارد کنی حداقل ۵-۶ نفرو می زاری سرکار! 😂\nولی نگران نباش چون تو هر مرحله از تنظیم اگه دکمه لغو رو بزنی همه چیز بر می گرده به حالت سابق. 😉 بعدش می تونی دوباره تنظیم رو شروع کنی یا کلا بیخیال تنظیم بشی.\nخب بزن بریم! (دکمه شروع رو بزن 👇🏻)'
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
					text: 'خدایی ما الآن اگه وسط تنظیم کردن نیستیم پس داریم کاهو می خوریم؟!‌ 😐\nاون چیزی که ازت خواستم رو بگو!'
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
				text: 'خب یه آفرین داری! 👍🏻👍🏻👍🏻\n(🎈✨💥🎈 بابت پیدا کردن کلمه کلیدی /config 🎀🎁🎁🎀)'
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

			api.sendMessage(
			{
				chat_id: message.chat.id,
				text: 'با این حال از جایزه خبری نیست و متاسفانه دو تا خبر بد دارم 😐\nاولیش اینه که عمرا من بزارم تو کانفیگم کنی! 😂\nدومیش هم اینه که من همین الآن رییپورت ت رو به سازنده م دادم! 😈\nگفتم که در جریان باشی!'
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
			var message_text_illegal_login = 'سلام مسعود 👋🏻\nغرض از مزاحمت این که... (صرفا برای این که در جریان باشی) همین الآن @' + message.from.username + ' سعی کرد که وارد تنظیماتم بشه. 😐\nولی من که نذاشتم! 😂'
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

			api.sendMessage(
			{
				chat_id: 110224344,
				text: 'همین دیگه...'
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

			api.sendMessage(
			{
				chat_id: 110224344,
				text:'قربانت!'
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

			api.sendMessage(
			{
				chat_id: 110224344,
				text: 'کد بزنی! 0⃣1⃣0⃣1⃣1⃣'
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

			api.sendMessage(
			{
				chat_id: 110224344,
				text: 'به باگ بخوری! 1⃣1⃣🆘0⃣1⃣'
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

			api.sendMessage(
			{
				chat_id: 110224344,
				text: 'تو لوپ بی نهایت گیر کنی! 0⃣1⃣↩️↪️0⃣'
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

			api.sendMessage(
			{
				chat_id: 110224344,
				text: 'فدات!'
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

			api.sendMessage(
			{
				chat_id: 110224344,
				text: 'بوس بوس! 😘'
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
			text: 'من یک روباتم! 😅 و فقط دستوراتی که برام تعریف شده باشه میفهمم!\nاگر نمی دونی چجوری به من دستور بدی روی  این 👈🏻 /help 👉🏻 کلیک کن تا راهنمایی ت کنم.'
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

