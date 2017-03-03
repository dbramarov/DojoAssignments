$(document).ready(function() { 
	// $('.btn').hover(function(){
		
	// });
    $('form').submit(function() {
		var city = $('#city').val();
		console.log(city);
        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=40b0e18a8eacf787453a7e6821bb5fc4", function(res) {
            console.log(res);
            $('.cityname').html(res.name);
            $('.temp').html('<p>Temperature: </p>' + res.main.temp);
            $('.high').html("<p>Today's High: </p>" + res.main.temp_max);
            $('.low').html("<p>Today's Low: </p>" + res.main.temp_min);
        }, 'json');
        return false;
    });
});