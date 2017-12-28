// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
  orgStr = str.split("");
  rev = orgStr.reverse();
  revStr = rev.join('');
  console.log(revStr);
 return revStr;
}

// Free Code Camp Tests
reverseString('hello');
