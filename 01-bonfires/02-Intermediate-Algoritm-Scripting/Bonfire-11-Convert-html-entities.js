
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convert(str) {
  // &colon;&rpar;
  var htmlStr= str.replace(/[&><"']/g,function(x){
  	 var key = {
  	"&": "&amp",
  	"<": "&lt",
  	">": "&gt",
  	'"': '&quot',
  	"'": "&apos"
  };

    	return key[x]+";";
  });
  console.log(htmlStr);
  return htmlStr;
}

// Free Code Camp Tests
convert("Dolce & Gabbana");
convert("Hamburgers < Pizza < Tacos");
