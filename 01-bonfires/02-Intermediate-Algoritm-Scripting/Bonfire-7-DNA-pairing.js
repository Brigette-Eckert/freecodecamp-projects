// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

function pair(str) {
  var basePairs = [];
  var pair = [];
  // console.log(str.split(""));
  for(i=0; i < str.length; i++){
	// console.log("checking " + str[i]);
  	if(str[i] == "C"){
  		pair = ["C", "G"];
  	} else if(str[i] == "G"){
  		pair = ["G", "C"];
  	} else if(str[i] == "A"){
  		pair = ["A", "T"];
  	} else if(str[i] =="T"){
  		pair = ["T", "A"];
  	}
  	basePairs.push(pair);
	}
	console.log(basePairs);
	return(basePairs);
}

// Free Code Camp Tests
pair("GCG");
pair("ATCGA");
pair("TTGAG");
pair("CTCTA");