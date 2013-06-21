var problems = [1, 2, 4, 5, 6, 8, 9, 13, 14];
var i = 0;

for(; i < problems.length; i++) {
    require('./' + problems[i] + '.js');
}