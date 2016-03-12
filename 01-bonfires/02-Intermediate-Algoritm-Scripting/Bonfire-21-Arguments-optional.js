// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, add(2, 3) should return 5, and add(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = add(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function add() {

	var arg1 = arguments[0];
	var arg2 = arguments[1];

	var sum;
	if(typeof arg1 == "number" && typeof arg2 == "number"){
		sum = (arg1 + arg2);
	} else {
		console.log("undefined");
		return undefined;
	}
 	console.log(sum);
 	return sum;
}

add(2,3);
add(2)(3);
// add(2)([3]);
