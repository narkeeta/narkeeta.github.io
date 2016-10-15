$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    ajaxEnabled: false
  });
});

$(document).ready(function () {
	var mainImg = $("#LayoutDiv1").children("img").attr("src").replace("myFull", "mytinythumbs");
	$("#LayoutDiv4").children('a:first').addClass("firsta");
	$("#LayoutDiv4").children('a:last').addClass("lasta");


	if ($("#LayoutDiv4").children('a:first').children("img").attr("src") == mainImg) {
		var prevLink = $("#LayoutDiv4").children("a:last").attr("href");
	} else {
		var prevLink = $("#LayoutDiv4").find('img[src="' + mainImg + '"]').parent("a").prev().attr("href");
	}

	if ($("#LayoutDiv4").children('a:last').children("img").attr("src") == mainImg) {
		var nextLink = $("#LayoutDiv4").children("a:first").attr("href");
	} else {
		var nextLink = $("#LayoutDiv4").find('img[src="' + mainImg + '"]').parent("a").next().attr("href");
	}



	$("#btn-back").attr("href", prevLink);
	$("#btn-forward").attr("href", nextLink);

	$("#LayoutDiv1").swiperight(function () {
		window.location.href = nextLink;
	});

	$("#LayoutDiv1").swipeleft(function () {
		window.location.href = prevLink;
	});
});
