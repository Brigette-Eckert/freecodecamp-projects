// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
	var int;
	var sum =1;
  while(num >= 1) {
    int = num--;
    sum *= int;
	};
	console.log(sum);
	return sum;
}

// Free Code Camp Tests
factorialize(5);