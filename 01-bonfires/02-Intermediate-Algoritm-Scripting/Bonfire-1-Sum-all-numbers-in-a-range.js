// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
	//find lower number
	var rangeLow = Math.min.apply(Math, arr);
	//find higher number
	var rangeHigh = Math.max.apply(Math, arr);
	//create range of numbers
	var allNum = [];
		for(i=rangeLow; i <= rangeHigh; i++) {
			allNum.push(i);
		};
	console.log(allNum);
	//sum of array of numbers in range

	var sum = allNum.reduce(function(a,b) {
		 	return a+b;
	});
	console.log(sum);
	return sum;
}

sumAll([1, 4]);
