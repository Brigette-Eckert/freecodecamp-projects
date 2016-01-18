// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  var sentence = str.split(' ');
  var spot = sentence.indexOf(before);
  //checking case
  if (before[0] == before[0].toUpperCase()){
 	var replacement = after.replace(after[0], after[0].toUpperCase());
  } else {
  	var replacement = after;
  }
  sentence.splice(spot, 1);
  sentence.splice(spot, 0, replacement);
  newSentence =  sentence.join(" ");
  console.log(newSentence);
 return newSentence;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");