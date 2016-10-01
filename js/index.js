$(function () { // $(document).ready shorthand
	$('h13').fadeIn(1000);
});

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#scroll-starter');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#menu').css('background-color', 'rgba(255,255,255,.8)').css('color', 'black');
       } else {
          $('#menu').css('background-color', 'transparent');
       }
   });
});

$(document).ready(function () {
	$(window).scroll(function () {
		/* Check the location of each desired element */
		$('.aniUp').each(function (i) {
			var bottom_of_object = $(this).position().top;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({
					'opacity': '1',
					'top': '0',
				}, 1000);
			}
		});
	});
});


$(".scroll-right").on("click", function() {
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

$(".scroll-left").on("click", function() {
  if ($(".poster-left").is(':last-child')) {
    $(".poster").first().addClass("templeft");
  } else $(".poster-left").next().addClass("templeft");
  $(".poster-left").removeClass("poster-left");

  if ($(".poster-center").is(':last-child')) {
    $(".poster").first().addClass("tempcenter");
  } else $(".poster-center").next().addClass("tempcenter");
  $(".poster-center").removeClass("poster-center");

  if ($(".poster-right").is(':last-child')) {
    $(".poster").first().addClass("tempright");
  } else $(".poster-right").next().addClass("tempright");
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