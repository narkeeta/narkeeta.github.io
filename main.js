$(function () {
	$('h13').fadeIn(1000);
});

$(document).ready(function () {
	var scroll_start = 0;
	var startchange = $('#scroll-starter');
	var offset = startchange.offset();
	$(document).scroll(function () {
		scroll_start = $(this).scrollTop();
		if (scroll_start > offset.top) {
			$('#menu').css('background-color', 'rgba(255,255,255,.8)').css('color', 'black');
		} else {
			$('#menu').css('background-color', 'transparent').css('color', 'white');
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

	$("#btn-GIT").click(function () {
		$("#contact-sponsor").hide();
		$("#contact-message").fadeIn(1000);
		$("#contact").css('background', 'rgba(0,0,0,.80)');
		$("#SUAM").css('color', 'white');
		$("h4").css('color', 'white');
	});

	$("#btn-BAS").click(function () {
		$("#contact-message").hide();
		$("#contact-sponsor").fadeIn(1000);
		$("#contact").css('background', 'rgba(0,0,0,.80)');
		$("#SUAM2").css('color', 'white');
		$("h4").css('color', 'white');
	});
});

$(".scroll-right").on("click", function () {
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

$(".scroll-left").on("click", function () {
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

var shiftWindow = function () {
	scrollBy(0, -60)
};
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
//THIS IS THE CODE FOR THE PURCHASE FORM

$('.select1').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select2"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});





//THIS IS THE JAVASCRIPT FOR THE PURCHASING APPLET//
jQuery(function ($) {
	$('#payment-info-form').submit(function (e) {
		var $form = $(this);
		var apiKey = document.getElementById("apikey").value;
		var js_security_key =
			document.getElementById("js_security_key").value;
		Payeezy.setApiKey(apiKey);
		Payeezy.setJs_Security_Key(js_security_key);
		Payeezy.setTa_token(ta_token);
		Payeezy.createToken(responseHandler);
		$('#someHiddenDiv').show();
	});
	return false;
});


var responseHandler = function (status, response) {
		var $form = $('#payment-info-form');
		$('#someHiddenDiv').hide();
		if (status != 201) {
			if (response.error && status != 400) {
				var error = response["error"];
				var errormsg = error["messages"];
				var errorcode = JSON.stringify(errormsg[0].code, null, 4);
				var errorMessages = JSON.stringify(errormsg[0].description, null, 4);
				$('#payment-errors').html('Error Code:' + errorcode + ', Error Messages:' + errorMessages);
			}
			if (status == 400 || status == 500) {
				$('#payment-errors').html('');
				var errormsg = response.Error.messages;
				var errorMessages = "";
				for (var i in errormsg) {
					var ecode = errormsg[i].code;
					var eMessage = errormsg[i].description;
					errorMessages = errorMessages + 'Error Code:' + ecode + ', Error Messages:'
				} + eMessage;
			}
			$('#payment-errors').html(errorMessages);
			$form.find('button').prop('disabled', false);
		} else {
			$('#payment-errors').html('');
			var result = response.token.value;
			$('#response_msg').html('Payeezy response - Token value:' + result);
			$('#response_note')
				.html(
					" Note: Use this token for authorize and/or purchase
					transactions.For more details, visit https: //developer.payeezy.com/payeezy-api-
					reference / apis ");
					$form.find('button').prop('disabled', false);
				}
		};
