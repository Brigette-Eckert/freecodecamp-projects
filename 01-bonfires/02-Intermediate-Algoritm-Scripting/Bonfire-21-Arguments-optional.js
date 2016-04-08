// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, add(2, 3) should return 5, and add(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = add(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function add() {

  var sum;	
  
  if(typeof arguments[0] !== "number" || typeof arguments[1] !== "number"){
  	console.log("undefined");
  	return undefined;
  } else if (arguments.length == 2){
  	sum = arguments[0] + arguments[1];
  } else {
  	return function(arg2){
  		return arguments[0] + arg2;
  	};
  }
  console.log(sum);
  return sum;
}

add(2,3);
add(2,"3");
add(2)(3);
add(2)([3]);