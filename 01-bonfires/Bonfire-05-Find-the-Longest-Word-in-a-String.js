function findLongestWord(str) {
  var phrase= str.split(/\s/g);
  var lengthArr = [];
  for(i=0; i<phrase.length; i ++){
  	var wordLength = phrase[i].length;
  	lengthArr.push(wordLength);

  	};  

 console.log(lengthArr);
  var longestWord = Math.max.apply(Math, lengthArr);
   return longestWord;

}

findLongestWord('The quick brown fox jumped over the lazy dog');