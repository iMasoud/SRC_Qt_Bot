var fs = require("fs");

exports.is_admin = function(chat_id)
{
    if(fs.existsSync("admin.list") == false)
        fs.writeFileSync('admin.list', '', 'utf8'); //create file if not exists
    var is = false;
    var admin_list = fs.readFileSync('admin.list', 'utf8').toString().split("\n");
    for(i in admin_list)
    {
        if(admin_list[i] == chat_id)
        {
            is = true;
        }
    }
    return is;
};

exports.is_configuring = function(chat_id)
{
    if(fs.existsSync("config.list") == false)
        fs.writeFileSync('config.list', '', 'utf8'); //create file if not exists
    var is = false;
    var config_list = fs.readFileSync('config.list', 'utf8').toString().split("\n");
    for(i in config_list)
    {
        if(config_list[i].indexOf(chat_id) > -1) //contains
        {
            is = true;
        }
    }
    return is;
};

exports.is_reminder_on = function(chat_id)
{
    if(fs.existsSync("reminder.list") == false)
        fs.writeFileSync('reminder.list', '', 'utf8'); //create file if not exists
    var is = false;
    var reminder_list = fs.readFileSync('reminder.list', 'utf8').toString().split("\n");
    for(i in reminder_list)
    {
        if(reminder_list[i] == chat_id)
        {
            is = true;
        }
    }
    return is;
};

exports.get_config_step = function(chat_id)
{
    if(fs.existsSync("config.list") == false)
        fs.writeFileSync('config.list', '', 'utf8'); //create file if not exists
    var step = -1;
    var config_list = fs.readFileSync('config.list', 'utf8').toString().split("\n");
    for(i in config_list)
    {
        if(config_list[i].indexOf(chat_id) > -1) //contains
        {
            step = (config_list[i].split(":"))[1];
        }
    }
    return step;
};

exports.add_to_config = function(chat_id)
{
    if(fs.existsSync("config.list") == false)
        fs.writeFileSync('config.list', '', 'utf8'); //create file if not exists
    fs.appendFileSync('config.list', chat_id + ':0\n', 'utf8');
};

exports.set_config_step = function(chat_id, step)
{
    if(fs.existsSync("config.list") == false)
        fs.writeFileSync('config.list', '', 'utf8'); //create file if not exists
    if(fs.existsSync("config.tmp") == false)
        fs.writeFileSync('config.tmp', '', 'utf8'); //create file if not exists
    var config_list = fs.readFileSync('config.list', 'utf8').toString().split("\n");
    for(i in config_list)
    {
        if(config_list[i].indexOf(chat_id) > -1) //contains
        {
            fs.appendFileSync('config.tmp', chat_id + ':' + step + '\n', 'utf8');
        }
        else
        {
            fs.appendFileSync('config.tmp', config_list[i] + '\n', 'utf8');
        }
    }
    fs.unlinkSync('config.list');
    fs.renameSync('config.tmp', 'config.list');
};

exports.remove_from_config = function(chat_id)
{
    if(fs.existsSync("config.list") == false)
        fs.writeFileSync('config.list', '', 'utf8'); //create file if not exists
    if(fs.existsSync("config.tmp") == false)
        fs.writeFileSync('config.tmp', '', 'utf8'); //create file if not exists
    var config_list = fs.readFileSync('config.list', 'utf8').toString().split("\n");
    for(i in config_list)
    {
        if(config_list[i].indexOf(chat_id) <= -1 && i!=config_list.length-1) //contains, except last line
        {
            fs.appendFileSync('config.tmp', config_list[i] + '\n', 'utf8');
        }
    }
    fs.unlinkSync('config.list');
    fs.renameSync('config.tmp', 'config.list');
};

exports.add_to_reminder = function(chat_id)
{
    if(fs.existsSync("reminder.list") == false)
        fs.writeFileSync('reminder.list', '', 'utf8'); //create file if not exists
    fs.appendFileSync('reminder.list', chat_id + '\n', 'utf8');
};

exports.remove_from_reminder = function(chat_id)
{
    if(fs.existsSync("reminder.list") == false)
        fs.writeFileSync('reminder.list', '', 'utf8'); //create file if not exists
    if(fs.existsSync("reminder.tmp") == false)
        fs.writeFileSync('reminder.tmp', '', 'utf8'); //create file if not exists
    var reminder_list = fs.readFileSync('reminder.list', 'utf8').toString().split("\n");
    for(i in reminder_list)
    {
        if(reminder_list[i] != chat_id && i!=reminder_list.length-1) //contains, except last line
        {
            fs.appendFileSync('reminder.tmp', reminder_list[i] + '\n', 'utf8');
        }
    }
    fs.unlinkSync('reminder.list');
    fs.renameSync('reminder.tmp', 'reminder.list');
};

exports.add_line_to_tmp_event = function(line)
{
    if(fs.existsSync("next_event.tmp") == false)
        fs.writeFileSync('next_event.tmp', '', 'utf8'); //create file if not exists
    fs.appendFileSync('next_event.tmp', line + '\n', 'utf8');
};

exports.get_line_from_tmp_event = function(number)
{
    if(fs.existsSync("next_event.tmp") == false)
        fs.writeFileSync('next_event.tmp', '', 'utf8'); //create file if not exists
    var line = "";
    var lines_list = fs.readFileSync('next_event.tmp', 'utf8').toString().split("\n");
    for(i in lines_list)
    {
        var j = i; //why i did this?! because when i logged i it was 01 
        j++; //but when i logged i+1 it was 11 :O :(
        if(j == number)
        {
            line = lines_list[i];
        }
    }
    return line;
};

exports.finish_tmp_event = function()
{
    if(fs.existsSync("next_event.list") == false)
        fs.writeFileSync('next_event.list', '', 'utf8'); //create file if not exists
    if(fs.existsSync("next_event.tmp") == false)
        fs.writeFileSync('next_event.tmp', '', 'utf8'); //create file if not exists
    fs.unlinkSync('next_event.list');
    fs.renameSync('next_event.tmp', 'next_event.list');
};

exports.cancel_tmp_event = function()
{
    if(fs.existsSync("next_event.tmp") == false)
        fs.writeFileSync('next_event.tmp', '', 'utf8'); //create file if not exists
    fs.unlinkSync('next_event.tmp');
};

exports.add_line_to_tmp_event_h = function(line)
{
    if(fs.existsSync("next_event_h.tmp") == false)
        fs.writeFileSync('next_event_h.tmp', '', 'utf8'); //create file if not exists
    fs.appendFileSync('next_event_h.tmp', line + '\n', 'utf8');
};

exports.get_line_from_tmp_event_h = function(number)
{
    if(fs.existsSync("next_event_h.tmp") == false)
        fs.writeFileSync('next_event_h.tmp', '', 'utf8'); //create file if not exists
    var line = "";
    var lines_list = fs.readFileSync('next_event_h.tmp', 'utf8').toString().split("\n");
    for(i in lines_list)
    {
        var j = i; //why i did this?! because when i logged i it was 01 
        j++; //but when i logged i+1 it was 11 :O :(
        if(j == number)
        {
            line = lines_list[i];
        }
    }
    return line;
};

exports.finish_tmp_event_h = function()
{
    if(fs.existsSync("next_event_h.list") == false)
        fs.writeFileSync('next_event_h.list', '', 'utf8'); //create file if not exists
    if(fs.existsSync("next_event_h.tmp") == false)
        fs.writeFileSync('next_event_h.tmp', '', 'utf8'); //create file if not exists
    fs.unlinkSync('next_event_h.list');
    fs.renameSync('next_event_h.tmp', 'next_event_h.list');
};

exports.cancel_tmp_event_h = function()
{
    if(fs.existsSync("next_event_h.tmp") == false)
        fs.writeFileSync('next_event_h.tmp', '', 'utf8'); //create file if not exists
    fs.unlinkSync('next_event_h.tmp');
};

exports.get_line_from_event = function(number)
{
    if(fs.existsSync("next_event.list") == false)
        fs.writeFileSync('next_event.list', '', 'utf8'); //create file if not exists
    var line = "";
    var lines_list = fs.readFileSync('next_event.list', 'utf8').toString().split("\n");
    for(i in lines_list)
    {
        var j = i; //why i did this?! because when i logged i it was 01 
        j++; //but when i logged i+1 it was 11 :O :(
        if(j == number)
        {
            line = lines_list[i];
        }
    }
    return line;
};

exports.day_of_week_94 = function(date)
{
    year_first_day = -1;
    var count = 0;
    switch(date[1]) {
        case 2:
            count += 31;
        case 3:
            count += 31;
        case 4:
            count += 31;
        case 5:
            count += 31;
        case 6:
            count += 31;
        case 7:
            count += 31;
        case 8:
            count += 30;
        case 9:
            count += 30;
        case 10:
            count += 30;
        case 11:
            count += 30;
        case 12:
            count += 30;
        default:
            count += date[2];
    }
    count = count%7;
    count += year_first_day;
    switch(count) {
        case 0:
            return "شنبه";
            break;
        case 1:
            return "یکشنبه";
            break;
        case 2:
            return "دوشنبه";
            break;
        case 3:
            return "سه شنبه";
            break;
        case 4:
            return "چهارشنبه";
            break;
        case 5:
            return "پنجشنبه";
            break;
        case 6:
            return "جمعه";
            break;
    }
};