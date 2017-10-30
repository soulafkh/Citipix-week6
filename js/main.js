$(document).ready(function() {

console.log('hi');

// on form submit do the following
	$("#form").on('submit', function(e) {

		// prevent default action
		e.preventDefault();
		
		// save user input as a variable
		var city = $('#city-type').val();
		// 'lowercase' input
		city = city.toLowerCase();

		// if input === "New York" || "New York City" || "NYC"
		if (city === "new york" || city === "new york city" || city === "nyc") {
			// change background to nyc
			$('body').css("background", "url(./images/nyc.jpg) no-repeat center center fixed");
			$('body').css("background-size", "cover");
/*			$('body').attr("background", "url(./images/nyc.jpg)");
*/	
		}
		// else if input === "San Francisco" || "SF" || "Bay Area"
		if (city === "san francisco" || city === "sf" || city === "bay area") {
			// change background to sf
			$('body').css("background", "url(./images/sf.jpg) no-repeat center center fixed");
			$('body').css("background-size", "cover");
		}
		// else if input === "Los Angeles" or "LA" or "LAX"
		if (city === "los angeles" || city === "la" || city === "lax") {
			// change background to la
			$('body').css("background", "url(./images/la.jpg) no-repeat center center fixed");
			$('body').css("background-size", "cover");
		}			
		// else if input === "Austin" || "ATX"	
		if (city === "austin" || city === "atx") {		
			// change background to austin		
			$('body').css("background", "url(./images/austin.jpg) no-repeat center center fixed");
			$('body').css("background-size", "cover");
		}
		// else if input === "Sydney" || "SYD"
		if (city === "sydney" || city === "syd") {				
			// change background to sydney		
			$('body').css("background", "url(./images/sydney.jpg) no-repeat center center fixed");
			$('body').css("background-size", "cover");
		}
		// reset user input
		$('#city-type').val("");
		});

});