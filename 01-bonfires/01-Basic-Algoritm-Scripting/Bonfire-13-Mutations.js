// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
function mutation(arr) {

var word = arr[0].toLowerCase();
var search =arr[1].toLowerCase().split("");
var results= [];

	for(i=0; i < search.length; i++) {
	var found = word.indexOf(search[i]);
		results.push(found);
	}; 

	if(results.indexOf(-1) === -1) {
		return true;
	} else {
		return false;
	}
}

mutation(['hello', 'hey']);
