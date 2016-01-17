// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on

function check(str) {
	for(i =0; i < str.length; i++){
		console.log("the character is " + str[i] + " at " + str.charCodeAt(i));
	 }
}

// check(" !?.,:;'_-[]()/")
// check('"')



function rot13(str) { // LBH QVQ VG!
	var shiftedString = "";
	for(i =0; i < str.length; i++){
		var charCode = str.charCodeAt(i);
		// console.log("checking the character " + str[i] + " at " + charCode);
		//check for punctuation and spaces
		if(str.charCodeAt(i) == 32 || str.charCodeAt(i) == 33 || str.charCodeAt(i) == 34 || str.charCodeAt(i) == 39 || str.charCodeAt(i) == 40 || str.charCodeAt(i) == 41 || str.charCodeAt(i) == 44 || str.charCodeAt(i) == 45 || str.charCodeAt(i) == 46 || str.charCodeAt(i) == 47 || str.charCodeAt(i) == 58 || str.charCodeAt(i) == 59 || str.charCodeAt(i) == 63 || str.charCodeAt(i) == 91 || str.charCodeAt(i) == 93 || str.charCodeAt(i) == 95) {
			shiftedString += str[i]
		} else {
			var newNum = (parseInt(charCode) +13)
			// console.log(newNum)
			if(newNum <= 90) {
				// console.log("Okay")
				shiftedString += String.fromCharCode(newNum);
			} else {
				// console.log("go back to 65")
				//alphabet resets at 90, and restarts at 65
				var change= (newNum - 91) + 65;
				// console.log(change)
				shiftedString +=  String.fromCharCode(change);
			}
			// console.log(newNum)
			// 
			// console.log(shiftedString)
			
		}
	}
		console.log(str + " has transformed into " + shiftedString)
		return shiftedString
};


rot13("SERR PBQR PNZC!");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");