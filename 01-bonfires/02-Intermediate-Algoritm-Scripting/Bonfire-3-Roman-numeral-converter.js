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
			roman += ordered[i];
			num -= romanNum[ordered[i]];	

		}else{ 
			i++
			console.log("moving on")
		}	
			//single and double digits ending in 9 
			roman = roman.replace("VIIII", "IX");
			//single and double digits ending in 4
			roman = roman.replace("IIII", "IV");
			//90s 
			roman = roman.replace("LXXXX", "IX");
			//40s 
			roman = roman.replace("XXXX", "IV");
			//900s
			roman = roman.replace("DCD", "XM");
			//400s
			roman = roman.replace("CCCC", "CD");
			

		
	}
	
	console.log(roman);
	return roman;
}	


convert(902);

