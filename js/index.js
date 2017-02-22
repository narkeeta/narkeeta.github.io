$(document).ready(function () {
	$("#about").hide();
	$("#hire").hide();
	$("#portfolio").hide();
	
	$("#about-btn").click(function () {
		$("#hire").hide();
		$("#portfolio").hide();
		$("#about").fadeIn(1000);
	});
	$("#hire-btn").click(function () {
		$("#about").hide();
		$("#portfolio").hide();
		$("#hire").fadeIn(1000);
	});
	$("#portfolio-btn").click(function () {
		$("#hire").hide();
		$("#about").hide();
		$("#portfolio").fadeIn(1000);
	});
	
	$("#submit-btn").click(function () {
		$("#form1").submit();
	});
});
