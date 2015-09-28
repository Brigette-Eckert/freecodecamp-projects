function reverseString(str) {
  orgStr = str.split("");
  rev = orgStr.reverse();
  revStr = rev.join('');

 return revStr;
}

reverseString('hello');
