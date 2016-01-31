//http://openweathermap.org/current#geo

var key ="e4e1425994f5fa474cdd4b36231633c9";
// var lat = "";
// var lon = "";
// var crd = "";
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
	  	console.log("success");
		});

	};
	function error(err) {
	  console.warn('ERROR(' + err.code + '): ' + err.message);
	};

navigator.geolocation.getCurrentPosition(success, error);




//Display Conditons  


//toogle between F and C

