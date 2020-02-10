import "../libs/padStart";
/*************************
 * Ethiopoian claendar
 * */

require("../libs/jquery.calendars.js");
require("../libs/jquery.calendars.plus.js")
require("../libs/jquery.calendars.ethiopian.min.js")
var EthiopianCalendar = new $.calendars.calendars.ethiopian;


function getFileNameWithTimeStamp(fileName, extensionWithoutDot) {
	var date = EthiopianCalendar.newDate();
	/**
	 * here default gregorian JS date is added to support hours, minutes and seconds.
	 * Since hours minutes and seconds are not calendar dependent it will have no poroblem
	 * */

	var dateWithTime = new date();
	var year = date.year();
	var month = `${date.month()}`.padStart(2, "0");
	var day =`${date.day()}`.padStart(2, "0");
	var hours =`${dateWithTime.getHours()}`.padStart(2, "0");
	var min =`${dateWithTime.getMinutes()}`.padStart(2, "0");
	var sec =`${dateWithTime.getSeconds()}`.padStart(2, "0");

	return `${fileName}_${year}-${month}-${day}_${hours}_${min}_${sec}.${extensionWithoutDot}`;
}

module.exports = getFileNameWithTimeStamp;