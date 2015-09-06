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




palindrome("eye");