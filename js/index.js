$(document).ready(function () {
	$("#about").hide();
	$("#hire").hide();
	$("#portfolio").hide();
	
	$("#about-btn").click(function () {
		$("#hire").hide();
		$("#portfolio").hide();
		$("#about").fadeIn();
	});
	$("#hire-btn").click(function () {
		$("#about").hide();
		$("#portfolio").hide();
		$("#hire").fadeIn();
	});
	$("#portfolio-btn").click(function () {
		$("#hire").hide();
		$("#about").hide();
		$("#portfolio").fadeIn();
	});
	
	$("#submit-btn").click(function () {
		$("#form1").submit();
	});
});
