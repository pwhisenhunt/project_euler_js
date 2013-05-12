/**
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
solutions[4] = function() {
	var answer = 0;
	var i, j;

	for(i = 100; i < 1000; i++){

		for(j = 100; j < 1000; j++){

			if(isPalindrome(i * j) && (i * j) > answer) answer = i * j;
		}
	}

	function isPalindrome(x){
		return (x.toString() === x.toString().split("").reverse().join(""))
	}
	console.log("Problem 4. " + answer);
}