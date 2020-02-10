/**
 © Copyright 2017 the World Health Organization (WHO).
 This software is distributed under the terms of the GNU General Public License version 3 (GPL Version 3),
 copied verbatim in the file “COPYING”.  In applying this license, WHO does not waive any of the privileges and
 immunities enjoyed by WHO under national or international law or submit to any national court jurisdiction.
 */

 /*************************
 * Ethiopoian claendar
 * */

require("../libs/jquery.calendars.js");
require("../libs/jquery.calendars.plus.js")
require("../libs/jquery.calendars.ethiopian.min.js")
var EthiopianCalendar = new $.calendars.calendars.ethiopian;

export const addDownloadChartAsImageHandler = function(chartContainer, filenamePrefix) {
        
	var button = document.createElement("a");
	button.className = "download-button btn btn-default";
	button.innerText = i18next.t("Download as image");

	var canvas = chartContainer.querySelector("canvas");
	canvas.parentNode.insertBefore(button, canvas);
	//<a href='#' class='download-button btn btn-default'>{{\'Download as image\' | i18next}}</a>
	button.onclick = function(){
		var dataURL = canvas.toDataURL("image/png");
		var now =EthiopianCalendar.newDate();
		button.download = filenamePrefix + "_" + now.year() + "_" + now.month() + "_" + now.day() + ".png";
		button.href = dataURL;
	};
};
