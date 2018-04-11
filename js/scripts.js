$(document).ready(function () {
	$.scrollify({
		section: ".scrollify",
		sectionName: "section-name",
		interstitialSection: "",
		easing: "easeOutExpo",
		scrollSpeed: 700,
		offset: 0,
		scrollbars: false,
		standardScrollElements: "",
		setHeights: false,
		overflowScroll: true,
		updateHash: true,
		touchScroll: true,
		before: function (index, sections) {
			if ($.scrollify.current().hasClass("portfolio_item")) {
				$(".active_item").removeClass("active_item");
				$.scrollify.current().addClass("active_item");
				$(".menu span:nth-child(3)").css('background-color', $.scrollify.current().css('border-color'));
				$(".menu span:nth-child(3)").attr("ID", $.scrollify.current().data("section-name"));
			}
			var bColor = $.scrollify.current().css('border-color');
			$('.cool_border').css('border-color', bColor);
		},
		after: function () {
		},
		afterResize: function () {
		},
		afterRender: function () {
			if ($.scrollify.current().hasClass("portfolio_item")) {
				$.scrollify.current().addClass("active_item"); 
			} else if ($.scrollify.currentIndex() < 2) {
				$(".portfolio_item:first-child").addClass("active_item")
			} else {
				$(".portfolio_item:last-child").addClass("active_item")
			}
		},
	});
	$(".menu span").click(function() {
		var toGo = $(this).attr("ID");
		if (toGo == "contact") {
			$(".active_item").removeClass("active_item");
			$(".portfolio_item:last-child").addClass("active_item");
			$(".menu span:nth-child(3)").attr("ID", $(".portfolio_item:last-child").data("section-name"));
			$(".menu span:nth-child(3)").css('background-color',  $(".portfolio_item:last-child").css('border-color'));
		} else if (toGo == "home" || toGo == "about") {
			$(".active_item").removeClass("active_item");
			$(".portfolio_item:first-child").addClass("active_item");
			$(".menu span:nth-child(3)").attr("ID", $(".portfolio_item:first-child").data("section-name"));
			$(".menu span:nth-child(3)").css('background-color',  $(".portfolio_item:first-child").css('border-color'));
		}
		$.scrollify.move("#" + toGo);
	});
	$("#submit-btn").click(function () {
		$("#form1").submit();
	});
});