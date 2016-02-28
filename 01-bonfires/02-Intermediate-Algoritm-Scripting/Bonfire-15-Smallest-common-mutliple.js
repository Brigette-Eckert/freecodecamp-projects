//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  //make array for all numbers including and in between nums
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

  //while coniditon is true  check number % each number is array - if all numbers %2  == 0 then that is smc and change condition to false 
  //why is total loop still running - inside while after condition changes?
  //continue will start back with J loop again while break will go back to i loop- need to go back to while somehow 

    while(scm === 0) {
      console.log("hello world")
       for(i = 2; i <121; i++){
        console.log("i loop running")
        for(j=0; j < nums.length; j++){
          console.log("j loop runnning")
          console.log("j = " + j)
          //testing if i is a mutliple of num[index]
          console.log(i + "%" + nums[j] + "= " + i%nums[j]);
          if(i%nums[j] === 0 && j < (nums.length-1)){
            console.log("works");
            //if get through all numbers in nums without breaking
          }else if(i%nums[j] === 0 && j >= (nums.length-1)){
            console.log("multiple found");
            scm = i;
            console.log(scm)
            //if number is not a mutiple of num[index]
          }else{
            console.log("break");
            scm = 100;
            console.log(scm)
            break;
          } 
      }
    }
  }

 


 

  // console.log(nums);
  console.log(scm);

  return scm;
}


smallestCommons([1,5]);
// smallestCommons([5,1]);
// smallestCommons([1,13]);
