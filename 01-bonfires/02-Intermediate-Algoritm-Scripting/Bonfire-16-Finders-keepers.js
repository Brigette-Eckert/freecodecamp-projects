// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

function find(arr, func) {
  for(i=0; i < arr.length; i++)
  	// console.log("array " + arr[i])
  if(func(arr[i]) === true){
  	console.log(arr[i]);
  	return arr[i];
  	break;
  }
}
// Free Code Camp Tests
find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
find([1, 3, 5, 9], function(num) { return num % 2 === 0; });