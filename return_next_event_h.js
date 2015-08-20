var functions = require("./functions");
var date = new Array;
date[0] = parseInt(functions.get_line_from_event(1));
date[1] = parseInt(functions.get_line_from_event(2));
date[2] = parseInt(functions.get_line_from_event(3));
var week_day = functions.day_of_week_94(date);
var place = functions.get_line_from_event(4) == "SRC" ? "مرکز تحقیقات دانشگاه" : functions.get_line_from_event(4);
var str = "عرضم به حضورت که جلسه بعدی گروه کیوت مرکز تحقیقات در تاریخ ";
str += week_day;
str += " " + functions.get_line_from_event(0) + "/" + functions.get_line_from_event(1) + "/" + functions.get_line_from_event(2);
str += " در" + place + " برگزار خواهد شد.";
if (functions.get_line_from_event(5) != "")
    str += "\nموضوع جلسه در رابطه با " + functions.get_line_from_event(5) + "خواهد بود.";
if (functions.get_line_from_event(6) != "")
    str += "\nتوضیحات: " + functions.get_line_from_event(6);
exports.text = str;