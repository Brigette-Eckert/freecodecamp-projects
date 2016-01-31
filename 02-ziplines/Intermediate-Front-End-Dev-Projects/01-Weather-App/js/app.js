
//get location
function success(pos) {
	  var crd = pos.coords;
	  var lat =crd.latitude;
	  var lon =crd.longitude;
	  console.log('Your current position is:');
	  console.log('Latitude : ' +lat);
	  console.log('Longitude: ' +lon);

	  //Weather API Call
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=e4e1425994f5fa474cdd4b36231633c9", function(data){
	  	console.log(data);
	  	var tempK = (data.main.temp).toFixed(1);
	  	var tempC = ((data.main.temp)-273.15).toFixed(1);
	  	var tempF = ((data.main.temp)*(9/5)-459.67).toFixed(1);
	  
	  	$('#tempDisplay').html(tempC+"°");
	  	//+"<img src="+data.weather[0].icon+">"
	  	$('#location').html(data.name +", "+ data.sys.country);
	  	$('#condition').html("<p>"+data.weather[0].main+"</p>"+"<p>"+data.weather[0].description+"</p>");
	  	$('#wind').html("<p> Wind Speed: " + data.wind.speed +"</p>");
	  	$('#humid').html("<p> Humidity: " + data.main.humidity +"<p>");
	  	$('#sunTime').html("<p id='sunrise'>Sunrise: " + data.sys.sunrise + "</p>"+"<p id='sunset'>Sunset: " +data.sys.sunrise + "</p>");
	  	
		});

	};
	function error(err) {
	  console.warn('ERROR(' + err.code + '): ' + err.message);
	};

navigator.geolocation.getCurrentPosition(success, error);

//cover to celicus minus -273.15 degrees


//Display Conditons  


//toogle between F and C

