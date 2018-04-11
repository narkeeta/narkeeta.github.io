$(document).ready(function () {
	$.scrollify({
		section: ".scrollify",
		sectionName: "section-name",
		interstitialSection: "",
		easing: "easeOutCubic",
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
			} else if ($.scrollify.currentIndex() < 2) {
				$(".active_item").removeClass("active_item");
				$(".portfolio_item:first-child").addClass("active_item")
			} else {
				$(".active_item").removeClass("active_item");
				$(".portfolio_item:last-child").addClass("active_item")
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
		$.scrollify.move("#" + $(this).attr("ID"));
	});
	$("#submit-btn").click(function () {
		$("#form1").submit();
	});
	$(".portfolio_item .images img").click(function() {
	});
});