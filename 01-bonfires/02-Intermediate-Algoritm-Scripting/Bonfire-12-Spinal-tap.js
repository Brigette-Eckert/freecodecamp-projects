// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
	//check for an upper letter following a lower case letter
	var spacedStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
	//check for anything other than alhphanumeric characters and replace with -
	var spinalStr = spacedStr.replace(/[\W_]/g, "-");
		//check for capitlized letters and convert to lower case [A-Z]
	var casedStr = spinalStr.replace(/[A-Z]/g, function(x){
		return x.toLowerCase();
		});

	console.log(casedStr);
  	return casedStr;
}
// Free Code Camp Tests
spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffin_Show");
spinalCase("thisIsSpinalTap");