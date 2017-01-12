var KEY = "610daeeceb415e34f1e37eed8de60657";
$.getJSON("//api.openweathermap.org/data/2.5/forecast/daily?id=5318313&units=metric&appid=" + KEY, function (data) {
	//FIRST DAY CODE
	var day;
	switch (new Date(data.list[0].dt * 1000).getDay()) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
	};
	$("#row1 h2").html(day);
	$("#row1 h3").html("max - " + data.list[0].temp.max.toString());
	$("#row1 h4").html(data.list[0].weather[0].description);
	var html;
	switch (data.list[0].weather[0].icon.substr(0, 2)) {
	case '01':
		html = "<img class='icon' src='/Links/01.png'>";
		$("#row1").children("h2").after(html);
		break;
	case '02':
		html = "<img class='icon' src='/Links/02.png'>";
		$("#row1").children("h2").after(html);
		break;
	case '03':
		html = "<img class='icon' src='/Links/03.png'>";
		$("#row1").children("h2").after(html);
		break;
	case '04':
		html = "<img class='icon' src='/Links/03.png'>";
		$("#row1").children("h2").after(html);
		break;
	case '09':
		html = "<img class='icon' src='/Links/09.png'>";
		$("#row1").children("h2").after(html);
		break;
	case '10':
		html = "<img class='icon' src='/Links/10.png'>";
		$("#row1").children("h2").after(html);
		break;
	case '11':
		html = "<img class='icon' src='/Links/11.png'>";
		$("#row1").children("h2").after(html);
		break;
	case '13':
		html = "<img class='icon' src='/Links/13.png'>";
		$("#row1").children("h2").after(html);
		break;
	case '50':
		html = "<img class='icon' src='/Links/50.png'>";
		$("#row1").children("h2").after(html);
		break;
	}
	
	//
	//
	//SECOND DAY CODE
	//
	//
	
	switch (new Date(data.list[1].dt * 1000).getDay()) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
	};
	$("#row2 h2").html(day);
	$("#row2 h3").html("max - " + data.list[1].temp.max.toString());
	$("#row2 h4").html(data.list[1].weather[0].description);
	switch (data.list[1].weather[0].icon.substr(0, 2)) {
	case '01':
		html = "<img class='icon' src='/Links/01.png'>";
		$("#row2").children("h2").after(html);
		break;
	case '02':
		html = "<img class='icon' src='/Links/02.png'>";
		$("#row2").children("h2").after(html);
		break;
	case '03':
		html = "<img class='icon' src='/Links/03.png'>";
		$("#row2").children("h2").after(html);
		break;
	case '04':
		html = "<img class='icon' src='/Links/03.png'>";
		$("#row2").children("h2").after(html);
		break;
	case '09':
		html = "<img class='icon' src='/Links/09.png'>";
		$("#row2").children("h2").after(html);
		break;
	case '10':
		html = "<img class='icon' src='/Links/10.png'>";
		$("#row2").children("h2").after(html);
		break;
	case '11':
		html = "<img class='icon' src='/Links/11.png'>";
		$("#row2").children("h2").after(html);
		break;
	case '13':
		html = "<img class='icon' src='/Links/13.png'>";
		$("#row2").children("h2").after(html);
		break;
	case '50':
		html = "<img class='icon' src='/Links/50.png'>";
		$("#row2").children("h2").after(html);
		break;
	}

	//
	//
	//THIRD DAY CODE
	//
	//
	
	switch (new Date(data.list[2].dt * 1000).getDay()) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
	};
	$("#row3 h2").html(day);
	$("#row3 h3").html("max - " + data.list[2].temp.max.toString());
	$("#row3 h4").html(data.list[2].weather[0].description);
	switch (data.list[2].weather[0].icon.substr(0, 2)) {
	case '01':
		html = "<img class='icon' src='/Links/01.png'>";
		$("#row3").children("h2").after(html);
		break;
	case '02':
		html = "<img class='icon' src='/Links/02.png'>";
		$("#row3").children("h2").after(html);
		break;
	case '03':
		html = "<img class='icon' src='/Links/03.png'>";
		$("#row3").children("h2").after(html);
		break;
	case '04':
		html = "<img class='icon' src='/Links/03.png'>";
		$("#row3").children("h2").after(html);
		break;
	case '09':
		html = "<img class='icon' src='/Links/09.png'>";
		$("#row3").children("h2").after(html);
		break;
	case '10':
		html = "<img class='icon' src='/Links/10.png'>";
		$("#row3").children("h2").after(html);
		break;
	case '11':
		html = "<img class='icon' src='/Links/11.png'>";
		$("#row3").children("h2").after(html);
		break;
	case '13':
		html = "<img class='icon' src='/Links/13.png'>";
		$("#row3").children("h2").after(html);
		break;
	case '50':
		html = "<img class='icon' src='/Links/50.png'>";
		$("#row3").children("h2").after(html);
		break;
	}


	console.log(data);
	console.log(day);
	console.log(data.list[0].temp.max);
	console.log(data.list[0].weather[0].main);
	console.log(data.list[0].weather[0].id);
});