// Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).
// For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).
function where(arr, num) {
  	arr.sort();
  	var insert= 0;
  	for(i=0; i < arr.length; i++){
  		if(arr[i] >= num){
  			var stopPoint = arr[i];
  			insert = arr.indexOf(stopPoint)
  			 break;
  		} else {
  			insert = arr.length;
  		};
  	};
  	return insert;
  	
};


where([2, 5, 10], 15);
where([10, 20, 30, 40, 50], 35);