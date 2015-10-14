// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convert(num) {
	var i =0;
	var roman = "";
	var romanNum = {
		I: 1, 
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	}
	var ordered = ["M", "D", "C", "L", "X", "V", "I"]
	while(num > 0 && i <= 7) {
		console.log(num)
		console.log("checking", romanNum[ordered[i]])
		if(num >= romanNum[ordered[i]]) {
			roman += ordered[i]
			num -= romanNum[ordered[i]]
		} else{
			i++
			console.log("moving on")
		}
		console.log(i);
		console.log(roman);
		console.log(num)
		
	}
	

}	

convert(42);
