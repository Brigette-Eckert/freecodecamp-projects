// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, add(2, 3) should return 5, and add(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = add(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function add() {
  var sum = arguments[0];
  if(typeof arguments[0] !== "number"){
  	console.log("undefined");
  	return undefined;
  } else if(arguments[1] !== undefined && typeof arguments[1] !== "number"){
  	console.log("undefined");
  	return undefined;
  } else if (arguments.length == 2){
  	console.log("2 args");
  	sum += parseInt(arguments[1]);
  } else {
  	console.log("closure");
  	return function(arg2){
  		if(typeof arg2 == "number"){
  			console.log(sum + arg2);
  			return sum + arg2;
  			} else {
  			console.log("undefined");
  			return undefined;
  			}	
  		}
  }
  console.log(sum);
  return sum;
}

// Free Code Camp Tests
// add(2,3);
add(2,"3");
// add(2)(3);
add(2)([3]);