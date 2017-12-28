// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function boo(bool){
	if(bool === true || bool === false){
		console.log("true");
		return true;
	} else {
		console.log("false");
		return false;
	}
}

// Free Code Camp Tests
boo(null);
boo(true); 
boo(false);
boo([1, 2, 3]);
boo([].slice);
boo({ "a": 1 });
boo(1);
boo(NaN);
boo("a");
boo("true");
boo("false");