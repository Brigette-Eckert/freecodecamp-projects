smallestCommons([1,13]);


//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {

  var nums = arr.sort(function(a, b) { return a - b });
  var product = Array(nums[1] - nums[0]).join(nums[0] + ",").split(",").reduce(function(a, b, i) {
    return a * (b + 1);
  })
  for(i = 2; i < product; i++) {
    var isCommonMultiple = true;

    for(j=nums[0]; j <= nums[1]; j++) {
      if(i % j !== 0) {
        isCommonMultiple = false;
        break;
      } 
    }
    if(isCommonMultiple) {
      console.log(i)
      return i;
    }
  }
}

// Free Code Camp Tests
smallestCommons([1,5]);
smallestCommons([5,1]);
smallestCommons([1,13]);
smallestCommons([1,13]);