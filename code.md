
if(message.text == '/start')
{

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
            photo: 'img/help.png',
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
        api.sendMessage(
            {
                chat_id: 110224344,
                text: texts.config_denied_report_start + message.from.username + texts.config_denied_report_end
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