var telegram = require("telegram-bot-api");
var fs = require("fs");
var jc = require("./jalali");
var keyboards = require("./keyboards");
var texts = require("./texts");
var functions = require("./functions");
var return_next_event_h = require("./return_next_event_h");

// console.log((new Date()).getYear() + '/' + (new Date()).getMonth() + '/' + (new Date()).getDate() + ', ' + (new Date()).getHours() + ':' + (new Date()).getMinutes() + ':' + (new Date()).getSeconds());
// console.log(jc.j2g([1394,05,28]));

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
//TODO: fix admin errors
//TODO: create timer function for reminding guys in list

	if(message.text == "/start")
    {
		if(functions.is_admin(message.chat.id) == true)
        {
			if(functions.is_configuring(message.chat.id) == true)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_bull_shit
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
			else
            {
				if(functions.is_reminder_on(message.chat.id) == true)
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.welcome,
                        reply_markup: JSON.stringify(keyboards.admin_on)
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
                else
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.welcome,
                        reply_markup: JSON.stringify(keyboards.admin_off)
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
        }
        else
        {
            if(functions.is_reminder_on(message.chat.id) == true) 
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.welcome,
                    reply_markup: JSON.stringify(keyboards.people_on)
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
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.welcome,
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
    }    
    else if(message.text == "/help" || message.text == "😅 راهنمایی م کن!")
    {
		if(functions.is_admin(message.chat.id) == true)
        {
			if(functions.is_configuring(message.chat.id) == true)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_no_help
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
			else
            {
                if(functions.is_reminder_on(message.chat.id) == true)
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.help,
                        reply_markup: JSON.stringify(keyboards.admin_on)
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
                else
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.help,
                        reply_markup: JSON.stringify(keyboards.admin_off)
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
        }
        else
        {
            api.sendMessage(
            {
                chat_id: message.chat.id,
                text:texts.help
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
    else if(message.text == "/config" || message.text == "😎 می خوام جلسه بعدی رو تعیین کنم!") //config_0
    {
        if(functions.is_admin(message.chat.id) == true)
        {
            if(functions.is_configuring(message.chat.id) == true)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_duplicate
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
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_0,
                    reply_markup: JSON.stringify(keyboards.config_0)
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
                functions.add_to_config(message.chat.id);
            }
        }
        else
        {
            api.sendMessage(
            {
                chat_id: message.chat.id,
                text:texts.config_denied_0
            }, function(err, message)            {
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
                chat_id: 110224344, //@masoudalemi
                text:texts.config_denied_report_start + message.from.username + texts.config_denied_middle + '۰' + texts.config_denied_end
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
    else if(message.text == "✔️ شروع کانفیگ!") //config_1
    {
        if(functions.is_configuring(message.chat.id) == true)
        {
            if (functions.get_config_step(message.chat.id) == 0)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_1,
                    reply_markup: JSON.stringify(keyboards.config_1)
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
                functions.set_config_step(message.chat.id, 1)
            }
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text: texts.config_procedure
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
                text:texts.config_denied_1
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
    else if(message.text == "/next_event" || message.text == "🕒 جلسه بعدی چه زمانیه؟")
    {
        if(functions.is_admin(message.chat.id) == true)
        {
            if(functions.is_configuring(message.chat.id) == true)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_depends
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
            else
            {
                if(functions.is_reminder_on(message.chat.id) == true)
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:return_next_event_h.text(),
                        reply_markup: JSON.stringify(keyboards.admin_on)
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
                else
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:return_next_event_h.text(),
                        reply_markup: JSON.stringify(keyboards.admin_off)
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
        }
        else
        {
            api.sendMessage(
            {
                chat_id: message.chat.id,
                text:return_next_event_h.text()
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
    else if(message.text == "/reminder_on" || message.text == "⏳ از این به بعد جلسات رو به من یادآوری کن!")
    {
        if(functions.is_admin(message.chat.id) == true)
        {
            if(functions.is_configuring(message.chat.id) == true)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_no_action
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
            else 
            {
                if(functions.is_reminder_on(message.chat.id) == true)
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.reminder_already_on,
                        reply_markup: JSON.stringify(keyboards.admin_on)
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
                else
                {
                    functions.add_to_reminder(message.chat.id);   
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.reminder_made_on,
                        reply_markup: JSON.stringify(keyboards.admin_on)
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
        }             
        else
        {
            if(functions.is_reminder_on(message.chat.id) == true)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.reminder_already_on,
                    reply_markup: JSON.stringify(keyboards.people_on)
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
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.reminder_made_on,
                    reply_markup: JSON.stringify(keyboards.people_on)
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
                functions.add_to_reminder(message.chat.id);
            }
        }
    }   
    else if(message.text == "/reminder_off" || message.text == "⌛️ دیگه جلسات رو به من یادآوری نکن!")
    {
        if(functions.is_admin(message.chat.id) == true)
        {
            if(functions.is_configuring(message.chat.id) == true)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_no_action
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
            else 
            {
                if(functions.is_reminder_on(message.chat.id) == true)
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.reminder_made_off,
                        reply_markup: JSON.stringify(keyboards.admin_off)
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
                    functions.remove_from_reminder(message.chat.id);     
                }
                else
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.reminder_already_off,
                        reply_markup: JSON.stringify(keyboards.admin_off)
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
        }            
        else
        {
            if(functions.is_reminder_on(message.chat.id) == true)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.reminder_made_off,
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
                functions.remove_from_reminder(message.chat.id);   
            }
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.reminder_already_off,
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
    }
    else if (message.text == "/config" || message.text == "😎 می خوام جلسه بعدی رو تعیین کنم!")//config_0
    {
        if(functions.is_configuring(message.chat.id) == true)
        {
            if (functions.get_config_step(message.chat.id) == 0)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_0,
                    reply_markup: JSON.stringify(keyboards.confing_0)
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
                functions.set_config_step(message.chat.id, 1);
            }
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_procedure
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
                text:texts.config_denied_1
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
                chat_id: 110224344, //@masoudalemi
                text:texts.config_denied_report_start + message.from.username + texts.config_denied_report_middle + "صفر" + texts.config_denied_report_end
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
    else if(message.text == "۱۳۹۴") //config_2
    {
        if(functions.is_configuring(message.chat.id) == true)
        {
            if (functions.get_config_step(message.chat.id) == 1)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_2,
                    reply_markup: JSON.stringify(keyboards.config_2)
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
                functions.set_config_step(message.chat.id, 2)
                switch(message.text)
                {
                    case "۱۳۹۴":
                        functions.add_line_to_tmp_event(1394);
                        functions.add_line_to_tmp_event_h("۱۳۹۴");
                        break;
                    default:
                        functions.add_line_to_tmp_event("");
                        functions.add_line_to_tmp_event_h("");
                        api.sendMessage(
                        {
                            chat_id: 110224344, //@masoudalemi
                            text:texts.config_crash_report_start + message.from.username + texts.config_crash_report_middle + "۲" + texts.config_crash_report_end
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
                        break;
                }
            }
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text: texts.config_procedure
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
                text:texts.config_denied_2
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
    else if(message.text == "فروردین" || message.text == "اردیبهشت" || message.text == "خرداد" || message.text == "تیر" || message.text == "مرداد" || message.text == "شهریور" || message.text == "مهر" || message.text == "آبان" || message.text == "آذر" || message.text == "دی" || message.text == "بهمن" || message.text == "اسفند")//config_3
    {
        if(functions.is_configuring(message.chat.id) == true)
        {
            if (functions.get_config_step(message.chat.id) == 2)
            {
                if (message.text == "اسفند")
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.config_3,
                        reply_markup: JSON.stringify(keyboards.config_3_29)
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
                else if (message.text == "مهر" || message.text == "آبان" || message.text == "آذر" || message.text == "دی" || message.text == "بهمن")
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.config_3,
                        reply_markup: JSON.stringify(keyboards.config_3_30)
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
                else
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.config_3,
                        reply_markup: JSON.stringify(keyboards.config_3_31)
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
                functions.set_config_step(message.chat.id, 3);
                switch(message.text)
                {
                    case "فروردین":
                        functions.add_line_to_tmp_event(1);
                        functions.add_line_to_tmp_event_h("۱");
                        break;
                    case "اردیبهشت":
                        functions.add_line_to_tmp_event(2);
                        functions.add_line_to_tmp_event_h("۲");
                        break;
                    case "خرداد":
                        functions.add_line_to_tmp_event(3);
                        functions.add_line_to_tmp_event_h("۳");
                        break;
                    case "تیر":
                        functions.add_line_to_tmp_event(4);
                        functions.add_line_to_tmp_event_h("۴");
                        break;
                    case "مرداد":
                        functions.add_line_to_tmp_event(5);
                        functions.add_line_to_tmp_event_h("۵");
                        break;
                    case "شهریور":
                        functions.add_line_to_tmp_event(6);
                        functions.add_line_to_tmp_event_h("۶");
                        break;
                    case "مهر":
                        functions.add_line_to_tmp_event(7);
                        functions.add_line_to_tmp_event_h("۷");
                        break;
                    case "آبان":
                        functions.add_line_to_tmp_event(8);
                        functions.add_line_to_tmp_event_h("۸");
                        break;
                    case "آذر":
                        functions.add_line_to_tmp_event(9);
                        functions.add_line_to_tmp_event_h("۹");
                        break;
                    case "دی":
                        functions.add_line_to_tmp_event(10);
                        functions.add_line_to_tmp_event_h("۱۰");
                        break;
                    case "بهمن":
                        functions.add_line_to_tmp_event(11);
                        functions.add_line_to_tmp_event_h("۱۱");
                        break;
                    case "اسفند":
                        functions.add_line_to_tmp_event(12);
                        functions.add_line_to_tmp_event_h("۱۲");
                        break;
                    default:
                        functions.add_line_to_tmp_event("");
                        functions.add_line_to_tmp_event_h("");
                        api.sendMessage(
                        {
                            chat_id: 110224344, //@masoudalemi
                            text:texts.config_crash_report_start + message.from.username + texts.config_crash_report_middle + "۳" + texts.config_crash_report_end
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
                        break;
                }
            }
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_procedure
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
        }//end
        else
        {
            api.sendMessage(
            {
                chat_id: message.chat.id,
                text:texts.config_denied_3
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
    else if( message.text == "۰۱" || message.text == "۰۲" || message.text == "۰۳" || message.text == "۰۴" || message.text == "۰۵" || message.text == "۰۶" || message.text == "۰۷" || message.text == "۰۸" || message.text == "۰۹" || message.text == "۱۰" || message.text == "۱۱" || message.text == "۱۲" || message.text == "۱۳" || message.text == "۱۴" || message.text == "۱۵" || message.text == "۱۶" || message.text == "۱۷" || message.text == "۱۸" || message.text == "۱۹" || message.text == "۲۰" || message.text == "۲۱" || message.text == "۲۲" || message.text == "۲۳" || message.text == "۲۴" || message.text == "۲۵" || message.text == "۲۶" || message.text == "۲۷" || message.text == "۲۸" || message.text == "۲۹" || message.text == "۳۰" || message.text == "۳۱") //config_4
    {
        if(functions.is_configuring(message.chat.id) == true)
        {
            if (functions.get_config_step(message.chat.id) == 3)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_4,
                    reply_markup: JSON.stringify(keyboards.config_4)
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
                switch(message.text)
                {
                    case "۰۱":
                        functions.add_line_to_tmp_event(1);
                        functions.add_line_to_tmp_event_h("۱");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۰۲":
                        functions.add_line_to_tmp_event(2);
                        functions.add_line_to_tmp_event_h("۲");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۰۳":
                        functions.add_line_to_tmp_event(3);
                        functions.add_line_to_tmp_event_h("۳");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۰۴":
                        functions.add_line_to_tmp_event(4);
                        functions.add_line_to_tmp_event_h("۴");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۰۵":
                        functions.add_line_to_tmp_event(5);
                        functions.add_line_to_tmp_event_h("۵");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۰۶":
                        functions.add_line_to_tmp_event(6);
                        functions.add_line_to_tmp_event_h("۶");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۰۷":
                        functions.add_line_to_tmp_event(7);
                        functions.add_line_to_tmp_event_h("۷");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۰۸":
                        functions.add_line_to_tmp_event(8);
                        functions.add_line_to_tmp_event_h("۸");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۰۹":
                        functions.add_line_to_tmp_event(9);
                        functions.add_line_to_tmp_event_h("۹");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۱۰":
                        functions.add_line_to_tmp_event(10);
                        functions.add_line_to_tmp_event_h("۱۰");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۱۱":
                        functions.add_line_to_tmp_event(11);
                        functions.add_line_to_tmp_event_h("۱۱");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۱۲":
                        functions.add_line_to_tmp_event(12);
                        functions.add_line_to_tmp_event_h("۱۲");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۱۳":
                        functions.add_line_to_tmp_event(13);
                        functions.add_line_to_tmp_event_h("۱۳");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۱۴":
                        functions.add_line_to_tmp_event(14);
                        functions.add_line_to_tmp_event_h("۱۴");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۱۵":
                        functions.add_line_to_tmp_event(15);
                        functions.add_line_to_tmp_event_h("۱۵");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۱۶":
                        functions.add_line_to_tmp_event(16);
                        functions.add_line_to_tmp_event_h("۱۶");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۱۷":
                        functions.add_line_to_tmp_event(17);
                        functions.add_line_to_tmp_event_h("۱۷");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۱۸":
                        functions.add_line_to_tmp_event(18);
                        functions.add_line_to_tmp_event_h("۱۸");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۱۹":
                        functions.add_line_to_tmp_event(19);
                        functions.add_line_to_tmp_event_h("۱۹");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۲۰":
                        functions.add_line_to_tmp_event(20);
                        functions.add_line_to_tmp_event_h("۲۰");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۲۱":
                        functions.add_line_to_tmp_event(21);
                        functions.add_line_to_tmp_event_h("۲۱");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۲۲":
                        functions.add_line_to_tmp_event(22);
                        functions.add_line_to_tmp_event_h("۲۲");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۲۳":
                        functions.add_line_to_tmp_event(23);
                        functions.add_line_to_tmp_event_h("۲۳");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۲۴":
                        functions.add_line_to_tmp_event(24);
                        functions.add_line_to_tmp_event_h("۲۴");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۲۵":
                        functions.add_line_to_tmp_event(25);
                        functions.add_line_to_tmp_event_h("۲۵");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۲۶":
                        functions.add_line_to_tmp_event(26);
                        functions.add_line_to_tmp_event_h("۲۶");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۲۷":
                        functions.add_line_to_tmp_event(27);
                        functions.add_line_to_tmp_event_h("۲۷");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۲۸":
                        functions.add_line_to_tmp_event(28);
                        functions.add_line_to_tmp_event_h("۲۸");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۲۹":
                        functions.add_line_to_tmp_event(29);
                        functions.add_line_to_tmp_event_h("۲۹");
                        functions.set_config_step(message.chat.id, 4);
                        break;
                    case "۳۰":
                        if (functions.get_line_from_tmp_event(2) == "12")
                        {
                            api.sendMessage(
                            {
                                chat_id: message.chat.id,
                                text:texts.config_kabise
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
                        else
                        {
                            functions.add_line_to_tmp_event(30);
                            functions.add_line_to_tmp_event_h("۳۰");
                            functions.set_config_step(message.chat.id, 4);
                        }
                        break;
                    case "۳۱":
                        if (functions.get_line_from_tmp_event(2) == "12" || functions.get_line_from_tmp_event(2) == "11" || functions.get_line_from_tmp_event(2) == "10" || functions.get_line_from_tmp_event(2) == "9" || functions.get_line_from_tmp_event(2) == "8" || functions.get_line_from_tmp_event(2) == "7")
                        {
                            api.sendMessage(
                            {
                                chat_id: message.chat.id,
                                text:texts.config_31
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
                        else
                        {
                            functions.add_line_to_tmp_event(31);
                            functions.add_line_to_tmp_event_h("۳۱");
                            functions.set_config_step(message.chat.id, 4);
                        }
                        break;
                    default:
                        functions.add_line_to_tmp_event("");
                        functions.add_line_to_tmp_event_h("");
                        api.sendMessage(
                        {
                            chat_id: 110224344, //@masoudalemi
                            text:texts.config_crash_report_start + message.from.username + texts.config_crash_report_middle + "۴" + texts.config_crash_report_end
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
                        break;
                }
            }
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_procedure
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
                text:texts.config_denied_4
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
    else if (message.text == "یه جایی غیر از مرکز...")//config_5
    {
        if(functions.is_configuring(message.chat.id) == true)
        {
            if (functions.get_config_step(message.chat.id) == 4)
            {
                functions.set_config_step(message.chat.id, 5);
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_5,
                    reply_markup: JSON.stringify(keyboards.config_5)
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
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_procedure
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
                text:texts.config_denied_5
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
    else if(message.text == "مرکز تحقیقات") //config_6
    {
        if(functions.is_configuring(message.chat.id) == true)
        {
            if (functions.get_config_step(message.chat.id) == 4)
            {
                functions.set_config_step(message.chat.id, 6);
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_6,
                    reply_markup: JSON.stringify(keyboards.config_6)
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
                functions.add_line_to_tmp_event("SRC");
                functions.add_line_to_tmp_event_h("مرکز تحقیقات دانشگاه");
            }
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_procedure
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
                text:texts.config_denied_6
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
    else if(message.text == "✔️ هماهنگه!") //config_8
    {
        if(functions.is_configuring(message.chat.id) == true)
        {
            if (functions.get_config_step(message.chat.id) == 8)
            {
                functions.remove_from_config(message.chat.id);
                if(functions.is_reminder_on(message.chat.id) == true)
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.config_finished,
                        reply_markup: JSON.stringify(keyboards.admin_on)
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
                else
                {
                    api.sendMessage(
                    {
                        chat_id: message.chat.id,
                        text:texts.config_finished,
                        reply_markup: JSON.stringify(keyboards.admin_off)
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
                api.sendSticker(
                {
                    chat_id: message.chat.id,
                    sticker: "BQADBAADYAADNba8BWaIG_pieK4zAg"
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
                functions.finish_tmp_event();
                functions.finish_tmp_event_h();
            }
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_need_more_info
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
                text:texts.config_denied_8
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
    else if(message.text == "/cancel" || message.text == "✖️ نه، کنسلش کن!" || message.text == "✖️ کانفیگ رو کنسل کن..." || message.text =="✖️ نه، بیخیال!") //config_8
    {
        if(functions.is_configuring(message.chat.id) == true)
        {
            functions.remove_from_config(message.chat.id)
            if(functions.is_reminder_on(message.chat.id) == true)
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_cancelled,
                    reply_markup: JSON.stringify(keyboards.admin_on)
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
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_cancelled,
                    reply_markup: JSON.stringify(keyboards.admin_off)
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
            api.sendSticker(
            {
                chat_id: message.chat.id,
                sticker: "BQADBAADLQADNba8BZtWr_pmH7fSAg"
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
            functions.cancel_tmp_event();
            functions.cancel_tmp_event_h();
        }
        else
        {
            api.sendMessage(
            {
                chat_id: message.chat.id,
                text:texts.un_defined
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
        if(functions.is_configuring(message.chat.id) == true)
        {
            if (functions.get_config_step(message.chat.id) == 5) //config_6
            {
                functions.set_config_step(message.chat.id, 6)
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_6
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
                functions.add_line_to_tmp_event(message.text);
                functions.add_line_to_tmp_event_h(message.text);
            }
            else if (functions.get_config_step(message.chat.id) == 6)//config_7 //config_8
            {
                functions.set_config_step(message.chat.id, 7);
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_7
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
                functions.add_line_to_tmp_event(message.text);
                functions.add_line_to_tmp_event_h(message.text);
            }
            else if(functions.get_config_step(message.chat.id) == 7) //config_8
            {
                functions.set_config_step(message.chat.id, 8);
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_8,
                    reply_markup: JSON.stringify(keyboards.config_8)
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
                functions.add_line_to_tmp_event(message.text);
                functions.add_line_to_tmp_event_h(message.text);
            }
            else
            {
                api.sendMessage(
                {
                    chat_id: message.chat.id,
                    text:texts.config_my_keyboard
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
                text:texts.un_defined
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
});
