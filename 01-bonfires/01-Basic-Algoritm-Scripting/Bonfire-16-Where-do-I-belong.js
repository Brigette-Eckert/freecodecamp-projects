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