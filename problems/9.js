/*
A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
var problem9 = function() {
    var a = b = c = 1;
    var product = 0;
    var isTriplet = function(a, b, c) {
        return (a * a) + (b * b) === (c * c) && a + b + c === 1000;
    }

    for(; a < 997; a++) {

        for(b = a + 1; b < 997; b++) {
    
            for(c = b + 1; c < 997; c++) {
                if(isTriplet(a, b, c) && a * b * c > product) product = a * b * c;
            }
        }
    }
    console.log("Problem 9. " + product);
}
exports.problem9 = problem9();