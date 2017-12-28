// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// Remember, you can access object properties through either dot notation or [] notation.

function every(collection, pre) {
  // Is everyone being true?
 	var honest =true;
 	for(i=0; i < collection.length; i++){
 		if(collection[i][pre] === null || Boolean(collection[i][pre]) === false){
 			honest = false;
 			break;
 		}
 	}
  console.log(honest);
  return honest;
}

// Free Code Camp Tests
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")