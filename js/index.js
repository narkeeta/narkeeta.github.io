$(function () { // $(document).ready shorthand
	$('h13').fadeIn(2000);
});
$(document).ready(function () {
	$(window).scroll(function () {
		/* Check the location of each desired element */
		$('.hideme').each(function (i) {
			var bottom_of_object = $(this).position().top + $(this).height();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({
					'opacity': '1',
				}, 1500);
			}
		});
	});
	
	$(window).scroll(function () {
		/* Check the location of each desired element */
		$('.aniRight').each(function (i) {
			var bottom_of_object = $(this).position().top + $(this).height();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({
					'opacity': '1',
					'right': '0',
				}, 1500);
			}
		});
	});
	
	$(window).scroll(function () {
		/* Check the location of each desired element */
		$('.aniLeft').each(function (i) {
			var bottom_of_object = $(this).position().top + $(this).height();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({
					'opacity': '1',
					'left': '0',
				}, 1500);
			}
		});
	});
});


$(".poster").on("click", function() {
  if ($(".poster-left").is(':first-child')) {
    $(".poster").last().addClass("templeft");
  } else $(".poster-left").prev().addClass("templeft");
  $(".poster-left").removeClass("poster-left");

  if ($(".poster-center").is(':first-child')) {
    $(".poster").last().addClass("tempcenter");
  } else $(".poster-center").prev().addClass("tempcenter");
  $(".poster-center").removeClass("poster-center");

  if ($(".poster-right").is(':first-child')) {
    $(".poster").last().addClass("tempright");
  } else $(".poster-right").prev().addClass("tempright");
  $(".poster-right").removeClass("poster-right");
  
  $(".tempright").addClass("poster-right");
  $(".tempright").removeClass("tempright");
  
  $(".tempcenter").addClass("poster-center");
  $(".tempcenter").removeClass("tempcenter");
  
  $(".templeft").addClass("poster-left");
  $(".templeft").removeClass("templeft");
});

var shiftWindow = function() { scrollBy(0, -60) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);