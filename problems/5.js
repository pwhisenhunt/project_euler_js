/**
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
var problem5 = function() {

	var answer 		= 20;
	var found 		= false;
	var isDivisible = true;
	var i;

	while(!found){
		answer++;
		isDivisible = true;

		for(i = 1; i <= 20; i++){
		
			if(answer % i !== 0){
				isDivisible = false;
				break;
			}
		}

		if(isDivisible) found = true;
	}
	console.log("Problem 5. " + answer);
}
problem5();