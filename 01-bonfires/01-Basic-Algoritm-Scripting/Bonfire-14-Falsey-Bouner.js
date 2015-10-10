// Remove all falsy values from an array.
// Falsy values in javascript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  // Don't show a false 
  var legit= arr.filter(function(value){
  	var id = new Boolean(value);
  	  return id.valueOf()=== true;

  });
 
 		return legit;

  	};


bouncer([7, 'ate', '', false, 9]);
