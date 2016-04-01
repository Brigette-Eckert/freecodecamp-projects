
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convert(str) {
  // &colon;&rpar;
  var htmlStr = str.replace(/[&><"']/g, callback());
  var key = {
  	"&": "&amp",
  	"<": "&gt",
  	">": "&lt",
  	'"': '&quot',
  	"'": "&apos"
  }

  function callback(x){
  	return key[x];
  }

   console.log(htmlStr)
  return htmlStr;
}

convert("Dolce & Gabbana");
