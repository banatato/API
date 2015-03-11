var main = function () {
	"use strict";

	// set up URL in variable
	var url = "http://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";

	$.getJSON(url, function (stackResponse) {
		stackResponse.items.forEach(function (question) {
			var $title = question.title;
			var $link = question.link;

			$("main .api").append("<p>" + "<a href=" + $link + ">" + $title + "</a>");
		});
	});
};

$(document).ready(main);