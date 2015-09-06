
function factorialize(num) {
	var int;
	var sum =1;
  while(num >= 1) {
    int = num--;
    sum *= int;
	};
	return sum;
}


factorialize(5);