var functions = require("./functions");
var date = new Array;
exports.text = function()
{
	date[0] = parseInt(functions.get_line_from_event(1));
	date[1] = parseInt(functions.get_line_from_event(2));
	date[2] = parseInt(functions.get_line_from_event(3));
	var week_day = functions.day_of_week_94(date);
	var place = functions.get_line_from_event(4) == "SRC" ? "مرکز تحقیقات دانشگاه" : functions.get_line_from_event(4);
	var str = "خدمت ت عارضم که جلسه بعدی گروه کیوت مرکز تحقیقات در تاریخ ";
	str += week_day;
	str += " " + functions.get_line_from_event(1) + "/" + functions.get_line_from_event(2) + "/" + functions.get_line_from_event(3);
	str += " در " + place + " برگزار میشه. 😊";
	str += "\nموضوع جلسه: " + functions.get_line_from_event(5);
	str += "\nتوضیحات: " + functions.get_line_from_event(6);
	return str;
};