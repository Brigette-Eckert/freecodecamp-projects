// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
function chunk(arr, size) {
  var allChunks = [];

  // Break it up.
  for(i =0; i < arr.length; i+=size) {
  	allChunks.push(arr.slice(i, i+size));
  	
  };

  console.log(allChunks)
  return allChunks;
};

chunk(['a', 'b', 'c', 'd'], 2);
