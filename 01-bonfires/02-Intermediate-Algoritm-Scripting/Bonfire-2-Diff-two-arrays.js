// Compare two arrays and return a new array with any items not found in both of the original arrays.

function diff(arr1, arr2) {
  var newArr = [];
  var longArr = [];
  var shortArr = arr2;
  //define longer array
  if(arr1.length >= arr2.length) {
  	longArr = arr1
  }  else {
  	longArr = arr2
  	shortArr= arr1
  };

    if(shortArr.length > 0){
     //loop over short array
      for(i=0; i <= shortArr.length -1; i++){
        //check values in arrays, if short array has vaules long array doesn't then add to newArr
         if(longArr.indexOf(shortArr[i]) == -1){
          newArr.push(shortArr[i])
        }   
      } 
      //loop over long array
      for(i=0; i <= longArr.length -1; i++){
        //check values in arrays, if long array has vaules short array doesn't then add to newArr
         if(shortArr.indexOf(longArr[i]) == -1){
          newArr.push(longArr[i])}    
         }
        } else {
          console.log("short array is empty")
          newArr = longArr;
    };
    newArr == longArr;
  console.log(newArr);
  return newArr;
}


//test with numbers, strings and short array being empty
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diff([], ["snuffleupagus", "cookie monster", "elmo"]);
