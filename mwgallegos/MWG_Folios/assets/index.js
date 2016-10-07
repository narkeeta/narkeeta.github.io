$(document).ready(function () {

	var mainImg = $("#LayoutDiv1").children("img").attr("src").replace("myFull", "mytinythumbs");

	if ($("#LayoutDiv4").children('img[src="' + mainImg + '"]').parent("a").is(':first-child')) {
		var prevLink = $("#LayoutDiv4").children("a:last").attr("href");
		$("#btn-back").attr("href", prevLink);
	} else {
		var prevLink = $("#LayoutDiv4").find('img[src="' + mainImg + '"]').parent("a").prev().attr("href");
		$("#btn-back").attr("href", prevLink);
	}

	if ($("#LayoutDiv4").children('img[src="' + mainImg + '"]').parent("a").next().is("p")) {
		var nextLink = $("#LayoutDiv4").children("a:first").attr("href");
		$("#btn-forward").attr("href", nextLink);
	} else {
		var nextLink = $("#LayoutDiv4").find('img[src="' + mainImg + '"]').parent("a").next().attr("href");
		$("#btn-forward").attr("href", nextLink);
	}

});

$(document).on('pageinit', function (event) {
	$("#LayoutDiv1").swiperight(function () {
		if ($("#LayoutDiv4").children('img[src="' + mainImg + '"]').parent("a").next().is("p")) {
			var nextLink = $("#LayoutDiv4").children("a:first").attr("href");
			alert(""+nextLink);
		} else {
			var nextLink = $("#LayoutDiv4").find('img[src="' + mainImg + '"]').parent("a").next().attr("href");
			alert(""+nextLink);
		}
		$.mobile.changePage(nextLink);
	});
});

$(document).on('pageinit', function (event) {
	$("#LayoutDiv1").swipeleft(function () {
		alert("Hello! I am an alert box!!");
		if ($("#LayoutDiv4").children('img[src="' + mainImg + '"]').parent("a").prev().is("br")) {
			var prevLink = $("#LayoutDiv4").children("a:last").attr("href");
			$.mobile.changePage(prevLink);
		} else {
			var prevLink = $("#LayoutDiv4").find('img[src="' + mainImg + '"]').parent("a").prev().attr("href");
			$.mobile.changePage(prevLink);
		}
	});
});
