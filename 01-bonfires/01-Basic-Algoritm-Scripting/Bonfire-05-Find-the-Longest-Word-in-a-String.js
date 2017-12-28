// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {
  var phrase= str.split(/\s/g);
  console.log(phrase)
  var lengthArr = [];
  for(i=0; i<phrase.length; i ++){
  	var wordLength = phrase[i].length;
  	lengthArr.push(wordLength);

  	};  

 console.log(lengthArr);
  var longestWord = Math.max.apply(Math, lengthArr);
   return longestWord;

}

// Free Code Camp Tests
findLongestWord('The quick brown fox jumped over the lazy dog');