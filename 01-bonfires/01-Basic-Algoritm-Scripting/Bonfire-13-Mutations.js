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
