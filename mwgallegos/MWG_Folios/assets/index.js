var mainImg = $("#LayoutDiv1").children("img").attr("src").replace("myFull", "mytinythumbs");
$("#LayoutDiv4").children('a:first').addClass("firsta");
$("#LayoutDiv4").children('a:last').addClass("lasta");


if ($("#LayoutDiv4").children('img[src="' + mainImg + '"]').parent("a").hasClass("firsta")) {
	var prevLink = $("#LayoutDiv4").children("a:last").attr("href");
} else {
	var prevLink = $("#LayoutDiv4").find('img[src="' + mainImg + '"]').parent("a").prev().attr("href");
}

if ($("#LayoutDiv4").children('img[src="' + mainImg + '"]').parent("a").next().is("p")) {
	var nextLink = $("#LayoutDiv4").children("a:first").attr("href");
} else {
	var nextLink = $("#LayoutDiv4").find('img[src="' + mainImg + '"]').parent("a").next().attr("href");
}
alert($("#LayoutDiv4").children("a:last").attr("href"));
alert(prevLink);
alert(nextLink);

$(document).ready(function () {
	$("#btn-back").attr("href", prevLink);
	$("#btn-forward").attr("href", nextLink);
});

$(document).on('pageinit', function (event) {

	$("#LayoutDiv1").swipeleft(function () {
		alert(prevLink);
		$.mobile.changePage(prevLink);
	});
});

$(document).on('pageinit', function (event) {
	$("#LayoutDiv1").swiperight(function () {
		alert(nextLink);
		$.mobile.changePage(nextLink);
	});
});
