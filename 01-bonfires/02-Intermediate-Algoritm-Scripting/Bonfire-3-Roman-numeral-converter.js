// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convert(num) {
	var romNum = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
	var first = 0;
	var remain = 0;
		//determine size of num and remainder when dividing by proper roman num 
		//loop over each key in object? to use logic in one step rather than multiple

		for(prop in romNum){
			console.log("first " + parseInt(num/romNum[prop]));
			console.log("remainder " + num%romNum[prop])
		}
}

convert(36);
