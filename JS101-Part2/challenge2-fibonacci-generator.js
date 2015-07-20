//
// Write a Fibonacci number generator that outputs 
// the numbers in the series that are less than 500.
//
var i = 0;
var j = 1;
var sequence = [];

while (i < 500) {
	var x = i + j;
	sequence.push(i);
	i = j;
	j = x;
}

console.log(sequence);