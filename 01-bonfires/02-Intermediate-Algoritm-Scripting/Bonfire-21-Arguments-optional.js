// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, add(2, 3) should return 5, and add(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = add(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function add() {
	var arg1 = arguments[0];
	function checkArg(arg1){
		if(typeof arg1 == "number"){
			console.log(arg1);
			return function sum(num){
				console.log(arg1 + sum)
				return arg1 + sum
			}

			//fuction that takes in other number and adds it to arg1 
		} else {
			console.log("undefined");
			 return undefined;
		}
		sum(3)
	}

}

//QUESTIONS: 
	//not sure where or how to call sum() with closure- no error but not running
	//not sure how to access 2nd num when not an arg- sum is suppose to take it in somehow

add(2,3);
add(2);
// add(2)(3);
// add(2)([3]);
