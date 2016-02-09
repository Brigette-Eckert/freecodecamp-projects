// Sum all the prime numbers up to and including the provided number.

function sumPrimes(num) {
	
	var primes = [2];
	var sum = 0;
	//starting at two b/c zero and one aren't prime
	for(i=2; i <= num; i++){
		var isPrime = true;
		console.log();
		console.log("Checking: " + i);
		console.log("---------------------------");
			//starting at two b/c dividing by 0 and 1 is not relevant here
			for(j=2; j < i; j++){	
			console.log("against " + j);

			if(i%j == 0){
				console.log( i + " is divisible by " + j);
				isPrime = false; 
				break;
				}
			
			}

			if(isPrime && i !== 2){
			console.log(i + " is prime");
			primes.push(i);
		} 
	}
	 
  console.log(primes);
  sum = primes.reduce(function(a, b) {
  return a + b; 
});
  console.log(sum);
  return sum;
}

sumPrimes(10);
sumPrimes(977);
