// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
// Return the rest of the array, otherwise return an empty array.

function drop(arr, func) {
var slice = []; 
  for(i = 0; i < arr.length; i++){
  	console.log(arr[i]);
  	if(func(arr[i]) === true){
  		console.log("true");
  	    slice = arr.slice(i);
  		break;
  	} else {
  	 console.log("false");
  	}
  }
  console.log(slice)
  return slice;
}

// Free Code Camp Tests
drop([1, 2, 3], function(n) {return n < 3; });
drop([1, 2, 3, 4], function(n) {return n >= 3;});
drop([0, 1, 0, 1], function(n) {return n === 1;});
drop([1, 2, 3, 4], function(n) {return n > 5;});
drop([1, 2, 3, 9, 2], function(n) {return n > 2;});
drop([1, 2, 3], function(n) {return n > 0;});