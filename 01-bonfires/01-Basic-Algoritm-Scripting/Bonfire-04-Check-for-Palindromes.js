// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// You'll need to remove punctuation and turn everything lower case in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

function palindrome(str) {
  // Good luck!
   var initStr= str.replace(/\W/g, "").toLowerCase();
  var revStr = initStr.split('').reverse().join('');
  console.log(initStr);
  console.log(revStr)
  if(initStr === revStr) {
  	console.log("It's a palindrome!")
 	 return true;
  } else {
  	console.log("It's not a palindrome")
    return false;
  }
}



// Free Code Camp Tests
palindrome("eye");