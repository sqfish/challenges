//
// What is the difference between the sum of the squares of 
// the first ten natural numbers, and the square of the sum 
// of the first ten natural numbers?
//

// Assume natural numbers include zero
// Sequence used will be 0-9
//
var i = 0;
var sum1 = 0;
var sum2 = 0;

while (i < 10) {
	sum1 = sum1 + (i*i);
	sum2 = sum2 + i;
	i++;
}

sum2 = sum2 * sum2;
console.log(Math.abs(sum1-sum2));