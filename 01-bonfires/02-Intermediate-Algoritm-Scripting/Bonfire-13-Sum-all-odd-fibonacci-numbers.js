// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.


// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.


function sumFibs(num) {
    var sum = 2;
    var fibs = [1, 1];


    for(i = 1; sum < num-1; i++) {
        // console.log("i at " + i)
        var newFib = (fibs[i]) + (fibs[i-1]);
        if(newFib > num) {
            break;
        }
        // console.log("new fib is " + newFib);
        fibs.push(newFib);
        if(newFib%2 !== 0){
            sum += newFib;
        }
    }
      
     console.log("The sum is " + sum);
 return sum;
}
// Free Code Camp Tests
sumFibs(1);
sumFibs(4);
sumFibs(1000);
sumFibs(75024); 
sumFibs(75025);
