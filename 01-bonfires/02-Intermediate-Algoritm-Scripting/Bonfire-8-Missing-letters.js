// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
	missingLetter = "";
	for(i=0; i < str.length -1; i++){
		//trying to find a way to test empty/ non existant varibles
		if(str.charCodeAt(i) +1  != str.charCodeAt(i+1)){
			// console.log(str.charCodeAt(i)+ 1)
			// console.log(typeof (str.charCodeAt(i) +1))
			// console.log(isNaN(str.charCodeAt(i) +1))
			missingLetter = String.fromCharCode(str.charCodeAt(i) +1);	
		}
	} if(!missingLetter){
		console.log("undefined");
		return undefined;
	} else{
	console.log(missingLetter + " is missing from this string");
	return(missingLetter);
	}
}

// Free Code Camp Tests
fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("bcd");
fearNotLetter("yz");