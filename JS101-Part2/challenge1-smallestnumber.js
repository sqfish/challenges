//
// What is the smallest number that can be divided by 
// each of the numbers from 1 to 10 without any remainder?
//

var numberFound = false;
var i = 1;
var j = 1;

while(!numberFound) {
	if (i % j !== 0) { // Number is not evenly divisible by a number in range 1-10
    j = 1;
    i++;
  } else if (j !== 10) { // Have not yet tested 1-10
    j++;
  } else { // Number is evenly divisible by numbers 1-10 and all have been tested
    numberFound = true;
    console.log(i);
  }
}