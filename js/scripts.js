$(document).ready(function () {
	//home
	var titles = $(".home h1 .name, #aboutMeTitle"); //elements you need to animate
	titles.each(function () {
		var textWrapper = $(this)[0];
		textWrapper.innerHTML = textWrapper.innerHTML.replace(/(\w+)(?!>|r>)/g, "<span class='word'>$&</span>");
		$(this).find('.word').each(function() {
			var word = $(this)[0];
			word.innerHTML = word.innerHTML.replace(/[^<>\s](?!>|r>)/g, "<span class='letter'>$&</span>");
		})
	});
	console.log(titles);
	window.addEventListener("scroll", scrollWatcher);
	function scrollWatcher() {
		var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
		var top_of_screen = $(window).scrollTop();
		var screen_height = bottom_of_screen - top_of_screen;
		titles.each(function() {
			var top_of_element =  $(this).offset().top;
			var bottom_of_element =  $(this).offset().top +  $(this).outerHeight();
			var middle_of_element =  $(this).offset().top +  ($(this).outerHeight() / 2);
			var element_percent = (((screen_height - (top_of_element - top_of_screen)) / screen_height));
			if (element_percent >= .25 && element_percent <= .90 && !$(this).hasClass('animated')){
				console.log($(this).attr('id')+' .letter');
				$(this).addClass('animated')
				anime({
					targets: '#'+$(this).attr('id')+' .letter',
					translateY: [-100,0],
					opacity: [0,1],
					easing: "easeOutExpo",
					duration: 1400,
					delay: (el, i) => 30 * i
				});
			}
		});
	}
	setTimeout(scrollWatcher, 500);
	$("#submit-btn").click(function () {
		$("#form1").submit();
	});
});
