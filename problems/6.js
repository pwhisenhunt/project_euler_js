/**
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025  385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
solutions[6] = function() {
	var 	answer = 0,
		sumSquares = 0,
		squareSums = 0;

	for(var i = 1; i <= 100; i++){
		sumSquares += (i * i);
		squareSums += i;
	}

	answer = (squareSums * squareSums) - sumSquares;
	console.log("Problem 6. " + answer);
}