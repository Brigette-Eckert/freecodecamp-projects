function titleCase(str) { 
	var newStr = str.charAt(0).toUpperCase();

	
	for(i=1; i < str.length; i++) {
		//if there is a space before then cap letter
		if((" " + str.charAt(i) === str.charAt(i-1)+ str.charAt(i))) {
			newStr += str.charAt(i).toUpperCase();
		} else {
			newStr += str.charAt(i).toLowerCase();
		}
	}

	console.log(newStr)
 	return newStr;
}

titleCase("I'm a little teapot Short and Shout");