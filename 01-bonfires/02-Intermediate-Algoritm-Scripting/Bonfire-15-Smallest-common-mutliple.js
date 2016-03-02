//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
    var nums =[];
    var scm = 0;
   


   //setting lower number to come first so loop to build num array will work properly
  if(arr[0] <= arr[1]){
    var num1 = arr[0];
    var num2 = arr[1];
  } else {
    var num1 = arr[1];
    var num2 = arr[0];
  }

  //creating number array of all numbers that need to be checked to find scm  
  for(i = num1; i <= num2; i++){
    nums.push(i)
  }
  var cm = nums.reduce(function(a,b){return a*b;});
  
  // while(scm === 0){
  //   console.log("checking for common multiples")

  // }
  for(i=0; i <= cm; i++){
    console.log(nums[i]%i);
  }
  console.log(cm)
  console.log(nums)
  
  return scm;

}


smallestCommons([1,5]);
smallestCommons([5,1]);
// smallestCommons([1,13]);
