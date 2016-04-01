// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
	var casedStr = str.replace(/[\s]/g, "-");
	console.log(casedStr);
  	return casedStr;
}

spinalCase('This Is Spinal Tap');
