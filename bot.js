var telegram = require("telegram-bot-api");
var fs = require("fs");
var jc = require("./jalali");
var keyboards = require("./keyboards");
var texts = require("./texts");

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
//    TODO: complete the if (s) untill all combinations are covered. */
//    TODO: should move all texts to a module
//    TODO: should create 3 functons to check: is_admin() is_configing() is_reminder_on() where all get a chat id and return a boolean
//    TODO: should create functions get_config_step() add_to_config() set_config_step() remove_from_config() add_to_reminder() remove_from_reminder() create_tmp_event(); add_line_to_tmp_event(); get_line_from_tmp_event() finish_tmp_event() cancel_tmp_event() create_tmp_event_h() add_line_to_tmp_event_h() finish_tmp_event_h() cancel_tmp_event_h()
//return_next_event_h() create human readable full string of next event from h file
//return_next_event() returns array of date of next_event
//no need to get_line_from_tmp_event_h()

/*
	if /start
		if admin
			if config
				message "don't bull shit" with no keyboard
			else
				if reminder on
                    message "start " with admin keyboard suitable
                else
                    message "start " with admin keyboard suitable
        else
            if reminder on 
                messafe "start" with suitable keyboard
            else
                messafe "start" with suitable keyboard
    
    else if /help
		if admin
			if config
				message "there is no help needed do as i said" with no keyboard
			else
                if reminder on 
				    message "help " with admin keyboard suitable
                else
                    message "help " with admin keyboard suitable
        else
            message "help" with no keyboard
    else if /config //config_0
        if admin
            if config
                message "what the fuck are we doing" with no keyboard
            else
                message "config_0" with config_0 keyboard
                add_to_config(message.chat.id)
                set_config_step(0)
        else
            message "config denied and reported level0" with no keyboard
            message masoud "denied_report_start" + message.from.username + "denied_report_middle" + 0 + "denied_report_end" with no keyboard
    else if /next_event
        if admin
            if config
                message "it depends on you complete this or cancell! now instead of bull tell me what i reqed (avail out)" with no keyboard
            else
                if reminder on
                    message "return_next_event.the_text" with admin keyboard suitable
                else
                    message "return_next_event.the_text" with admin keyboard suitable
        else
            message "return_next_event.the_text" with no keyboard
    else if /reminder_on
        if admin
            if config
                "cant do actions now. if you want to do actions should do when you finished config with done or cancel" with no keyboard
            else 
                if reminder on
                    message "already on!" with admin keyboard suitable
                else
                    message "alright, reminder made on" with admin keyboard suitable
                    add_to_reminder();                
        else
            if reminder on
                message "already on!" with suitable keyboard
            else
                message "alright, reminder made on" with suitable keyboard
                add_to_reminder();   
    else if /reminder_off
        if admin
            if config
                "cant do actions now. if you want to do actions should do when you finished config with done or cancel" with no keyboard
            else 
                if reminder on
                    message "alright, reminder made off" with admin keyboard suitable
                    remove_from_reminder();     
                else
                    message "already off!" with admin keyboard suitable               
        else
            if reminder on
                message "alright, reminder made off" with keyboard suitable
                remove_from_reminder();   
            else
                message "already off!" with keyboard suitable
    elseif شروع کانفیگ!!! //config_1
        if config
            if get_config_step() = 0
                message "config_1" with config_1 keyboard
                set_config_step(1)
                create_tmp_event();
                create_tmp_event_h();
            else
                message "you can't change procedure, if you missed something you need to cancell proc and resart" with no keyboard
        else
            message "config denied and reported level1" with no keyboard
            message masoud "denied_report_start" + message.from.username + "denied_report_middle" + 1 + "denied_report_end" with no keyboard
    elseif ۱۳۹۴ //config_2
        if config
            if get_config_step() = 1
                message "config_2" with config_2 keyboard
                set_config_step(2)
                switch(message.text) {
                    case ۱۳۹۴:
                        add_line_to_tmp_event(1394)
                        add_line_to_tmp_event_h(۱۳۹۴)
                        break;
                    default:
                        add_line_to_tmp_event("")
                        add_line_to_tmp_event_h("")
                        message masoud "during configing (step 2) of " + message.from.username + " we've just faced a problem. we entered default case of switch which means an acceptable text entered but not the year(s) we've tabie ed!" with no keyboard
                        break;
                }
            else
                message "you can't change procedure, if you missed something you need to cancell proc and resart" with no keyboard
        else
            message "config denied and reported level2" with no keyboard
            message masoud "denied_report_start" + message.from.username + "denied_report_middle" + 2 + "denied_report_end" with no keyboard
    elseif فروردین | اردیبهشت | خرداد | تیر | مرداد | شهریور | مهر | آبان | آذر | دی | بهمن | اسفند //config_3
        if config
            if get_config_step() = 2
                if message.text = اسفند
                    message "config_3" with config_3_29 keyboard
                else if message.text = مهر | آبان | آذر | دی | بهمن
                    message "config_3" with config_3_30 keyboard
                else
                    message "config_3" with config_3_31 keyboard
                set_config_step(3)
                switch(message.text) {
                    case فروردین:
                        add_line_to_tmp_event(1)
                        add_line_to_tmp_event_h(۱)
                        break;
                    case اردیبهشت:
                        add_line_to_tmp_event(2)
                        add_line_to_tmp_event_h(۲)
                        break;
                    case خرداد:
                        add_line_to_tmp_event(3)
                        add_line_to_tmp_event_h(۳)
                        break;
                    case تیر:
                        add_line_to_tmp_event(4)
                        add_line_to_tmp_event_h(۴)
                        break;
                    case مرداد:
                        add_line_to_tmp_event(5)
                        add_line_to_tmp_event_h(۵)
                        break;
                    case شهریور:
                        add_line_to_tmp_event(6)
                        add_line_to_tmp_event_h(۶)
                        break;
                    case مهر:
                        add_line_to_tmp_event(7)
                        add_line_to_tmp_event_h(۷)
                        break;
                    case آبان:
                        add_line_to_tmp_event(8)
                        add_line_to_tmp_event_h(۸)
                        break;
                    case آذر:
                        add_line_to_tmp_event(9)
                        add_line_to_tmp_event_h(۹)
                        break;
                    case دی:
                        add_line_to_tmp_event(10)
                        add_line_to_tmp_event_h(۱۰)
                        break;
                    case بهمن:
                        add_line_to_tmp_event(11)
                        add_line_to_tmp_event_h(۱۱)
                        break;
                    case اسفند:
                        add_line_to_tmp_event(12)
                        add_line_to_tmp_event_h(۱۲)
                        break;
                    default:
                        add_line_to_tmp_event("")
                        add_line_to_tmp_event_h("")
                        message masoud "during configing (step 3) of " + message.from.username + " we've just faced a problem. we entered default case of switch which means an acceptable text entered but not the month(s) we've tabie ed!" with no keyboard
                        break;
                }
            else
                message "you can't change procedure, if you missed something you need to cancell proc and resart" with no keyboard
        else
            message "config denied and reported level3" with no keyboard
            message masoud "denied_report_start" + message.from.username + "denied_report_middle" + 3 + "denied_report_end" with no keyboard
    elseif ۰۱ | ۰۲ | ۰۳ | ۰۴ | ۰۵ | ۰۶ | ۰۷ | ۰۸ | ۰۹ | ۱۰ | ۱۱ | ۱۲ | ۱۳ | ۱۴ | ۱۵ | ۱۶ | ۱۷ | ۱۸ | ۱۹ | ۲۰ | ۲۱ | ۲۲ | ۲۳ | ۲۴ | ۲۵ | ۲۶ | ۲۷ | ۲۸ | ۲۹ | ۳۰ | ۳۱//config_4
        if config
            if get_config_step() = 3
                message "config_4" with config_4 keyboard
                switch(message.text) {
                    case ۰۱:
                        add_line_to_tmp_event(1)
                        add_line_to_tmp_event_h(۱)
                        set_config_step(4)
                        break;
                    case ۰۲:
                        add_line_to_tmp_event(2)
                        add_line_to_tmp_event_h(۲)
                        set_config_step(4)
                        break;
                    case ۰۳:
                        add_line_to_tmp_event(3)
                        add_line_to_tmp_event_h(۳)
                        set_config_step(4)
                        break;
                    case ۰۴:
                        add_line_to_tmp_event(4)
                        add_line_to_tmp_event_h(۴)
                        set_config_step(4)
                        break;
                    case ۰۵:
                        add_line_to_tmp_event(5)
                        add_line_to_tmp_event_h(۵)
                        set_config_step(4)
                        break;
                    case ۰۶:
                        add_line_to_tmp_event(6)
                        add_line_to_tmp_event_h(۶)
                        set_config_step(4)
                        break;
                    case ۰۷:
                        add_line_to_tmp_event(7)
                        add_line_to_tmp_event_h(۷)
                        set_config_step(4)
                        break;
                    case ۰۸:
                        add_line_to_tmp_event(8)
                        add_line_to_tmp_event_h(۸)
                        set_config_step(4)
                        break;
                    case ۰۹:
                        add_line_to_tmp_event(9)
                        add_line_to_tmp_event_h(۹)
                        set_config_step(4)
                        break;
                    case ۱۰:
                        add_line_to_tmp_event(10)
                        add_line_to_tmp_event_h(۱۰)
                        set_config_step(4)
                        break;
                    case ۱۱:
                        add_line_to_tmp_event(11)
                        add_line_to_tmp_event_h(۱۱)
                        set_config_step(4)
                        break;
                    case ۱۲:
                        add_line_to_tmp_event(12)
                        add_line_to_tmp_event_h(۱۲)
                        set_config_step(4)
                        break;
                    case ۱۳:
                        add_line_to_tmp_event(13)
                        add_line_to_tmp_event_h(۱۳)
                        set_config_step(4)
                        break;
                    case ۱۴:
                        add_line_to_tmp_event(14)
                        add_line_to_tmp_event_h(۱۴)
                        set_config_step(4)
                        break;
                    case ۱۵:
                        add_line_to_tmp_event(15)
                        add_line_to_tmp_event_h(۱۵)
                        set_config_step(4)
                        break;
                    case ۱۶:
                        add_line_to_tmp_event(16)
                        add_line_to_tmp_event_h(۱۶)
                        set_config_step(4)
                        break;
                    case ۱۷:
                        add_line_to_tmp_event(17)
                        add_line_to_tmp_event_h(۱۷)
                        set_config_step(4)
                        break;
                    case ۱۸:
                        add_line_to_tmp_event(18)
                        add_line_to_tmp_event_h(۱۸)
                        set_config_step(4)
                        break;
                    case ۱۹:
                        add_line_to_tmp_event(19)
                        add_line_to_tmp_event_h(۱۹)
                        set_config_step(4)
                        break;
                    case ۲۰:
                        add_line_to_tmp_event(20)
                        add_line_to_tmp_event_h(۲۰)
                        set_config_step(4)
                        break;
                    case ۲۱:
                        add_line_to_tmp_event(21)
                        add_line_to_tmp_event_h(۲۱)
                        set_config_step(4)
                        break;
                    case ۲۲:
                        add_line_to_tmp_event(22)
                        add_line_to_tmp_event_h(۲۲)
                        set_config_step(4)
                        break;
                    case ۲۳:
                        add_line_to_tmp_event(23)
                        add_line_to_tmp_event_h(۲۳)
                        set_config_step(4)
                        break;
                    case ۲۴:
                        add_line_to_tmp_event(24)
                        add_line_to_tmp_event_h(۲۴)
                        set_config_step(4)
                        break;
                    case ۲۵:
                        add_line_to_tmp_event(25)
                        add_line_to_tmp_event_h(۲۵)
                        set_config_step(4)
                        break;
                    case ۲۶:
                        add_line_to_tmp_event(26)
                        add_line_to_tmp_event_h(۲۶)
                        set_config_step(4)
                        break;
                    case ۲۷:
                        add_line_to_tmp_event(27)
                        add_line_to_tmp_event_h(۲۷)
                        set_config_step(4)
                        break;
                    case ۲۸:
                        add_line_to_tmp_event(28)
                        add_line_to_tmp_event_h(۲۸)
                        set_config_step(4)
                        break;
                    case ۲۹:
                        add_line_to_tmp_event(29)
                        add_line_to_tmp_event_h(۲۹)
                        set_config_step(4)
                        break;
                    case ۳۰:
                        if get_line_from_tmp_event(2) = 12
                            message "30 esfand jalase?! :( my developer wasn't on mood calcing cabise! try another day or desc!" no markup
                        else
                            add_line_to_tmp_event(30)
                            add_line_to_tmp_event_h(۳۰)
                            set_config_step(4)
                        break;
                    case ۳۱:
                        if get_line_from_tmp_event(2) = 12 | 11 | 10 | 9 | 8 | 7
                            message "khodayi yekam fekr kon bebin mahi ke entekhab kardi 31 rooz dare?! just fucking choose what i leted you" no markup
                        else
                            add_line_to_tmp_event(31)
                            add_line_to_tmp_event_h(۳۱)
                            set_config_step(4)
                        break;
                    default:
                        add_line_to_tmp_event("")
                        add_line_to_tmp_event_h("")
                        message masoud "during configing (step 4) of " + message.from.username + " we've just faced a problem. we entered default case of switch which means an acceptable text entered but not the day(s) we've tabie ed!" with no keyboard
                        break;
                }
            else
                message "you can't change procedure, if you missed something you need to cancell proc and resart" with no keyboard
        else
            message "config denied and reported level4" with no keyboard
            message masoud "denied_report_start" + message.from.username + "denied_report_middle" + 4 + "denied_report_end" with no keyboard
    elseif یه جای دیگه غیر از مرکز... //config_5
        if config
            if get_config_step() = 4
                set_config_step(5)
                message "config_5" with config_5 keyboard
            else
                message "you can't change procedure, if you missed something you need to cancell proc and resart" with no keyboard
        else
            message "config denied and reported level5" with no keyboard
            message masoud "denied_report_start" + message.from.username + "denied_report_middle" + 5 + "denied_report_end" with no keyboard
    elseif مرکز تحقیقات //config_6
        if config
            if get_config_step() = 4
                set_config_step(6)
                message "config_6" with config_6 keyboard
                add_line_to_tmp_event(SRC)
                add_line_to_tmp_event_h(مرکز تحقیقات دانشگاه)
            else
                message "you can't change procedure, if you missed something you need to cancell proc and resart" with no keyboard
        else
            message "config denied and reported level6" with no keyboard
            message masoud "denied_report_start" + message.from.username + "denied_report_middle" + 6 + "denied_report_end" with no keyboard
    elseif هماهنگه //config_8
        if config
            if get_config_step() = 8
                remove_from_config(chat.id)
                if reminder on
                    message "we've jst finished the config!" with suitable admin keyboard
                else
                    message "we've jst finished the config!" with suitable admin keyboard
                sticker X
                finish_tmp_event()
                finish_tmp_event_h()
            else
                message "there is more information i need for finishing config" with no keyboard
        else
            message "config denied and reported level8" with no keyboard
            message masoud "denied_report_start" + message.from.username + "denied_report_middle" + 8 + "denied_report_end" with no keyboard
    elseif کانفیگ کنسله! | نه کنسلش کن  //config_8
        if config
            remove_from_config(chat.id)
            if reminder on
                message "we've jst cancelled the config!" with suitable admin keyboard
            else
                message "we've jst cancelled the config!" with suitable admin keyboard
            sticker (😄)
            cancel_tmp_event()
            cancel_tmp_event_h()
        else
            message "undefined!" with no keyboard
    else
        if admin
            if config
                if get_config_step() = 5 //config_6
                    set_config_step(6)
                    message "config_6" with no keyboard
                    add_line_to_tmp_event(message.text)
                    add_line_to_tmp_event_h(message.text)
                else if get_config_step() = 6 //config_7 //config_8
                    set_config_step(7)
                    message "config_7" with no keyboard
                    add_line_to_tmp_event(message.text)
                    add_line_to_tmp_event_h(message.text)
                else if get_config_step() = 7 //config_8
                    set_config_step(8)
                    message "config_8" with config_8 keyboard
                    add_line_to_tmp_event(message.text)
                    add_line_to_tmp_event_h(message.text)
                else
                    message "only tell me what i asked, and do it only with keyboard i gave it to you!" with no keyboard
            else
                message "undefined!"
	 */        

    console.log(message.from.username + ' // ' + message.text)

});
