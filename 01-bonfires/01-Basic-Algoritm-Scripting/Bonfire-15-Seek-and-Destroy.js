// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
  var arg =  Array.prototype.slice.call(arguments).slice(1);
  console.log(arg)

  var newArr = arr.filter(function(val) {
  	return arg.indexOf(val) < 0;
  })

 	return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, 4, 5, 6);
