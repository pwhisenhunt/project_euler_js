/**
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
solutions[4] = function() {

	var answer = 0;

	for(var i = 100; i < 1000; i++){

		for(var j = 100; j < 1000; j++){

			if(isPalindrome(i * j) && (i * j) > answer){
				answer = i * j;
			}
		}
	}

	function isPalindrome(x){

		if(x.toString() === x.toString().split("").reverse().join("")){
			return true;
		}
		return false;
	}
	console.log("Problem 4. " + answer);
}