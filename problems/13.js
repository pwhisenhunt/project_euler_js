/* Work out the first ten digits of the sum of the following one-hundred 50-digit numbers. */
var problem13 = function() {
    var fs = require('fs');
    var bignum = require('bignum');

    fs.readFile('../data/13.txt', 'utf8', function(error,data) {
        if(error) return console.log(error);
        data = data.split('\n');
        var count = bignum(0);
        var i;

        for(i = data.length - 1; i >= 0; i--) {
            count = count.add(data[i]);
        }
        console.log("Problem 13. " + count.toString(10).substring(0, 10));
    });
}
exports.problem13 = problem13();