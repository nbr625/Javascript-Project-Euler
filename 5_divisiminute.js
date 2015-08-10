//2520 is the smallest number that can be divided by 
//each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible 
//by all of the numbers from 1 to 20?
//function gcd(a, b) {

	var x = a;
	var y = b;
	var result;

	while (y != 0) {
		result = x % y;
		x = y;
		y = result;
	}
	return x;
}

function lcm(a,b) {
	return (a * b) / gcd(a, b);
}

var max = 20; 
var min = 11;
var n = min;

for(var i = min; i <= max; i++){
	n = lcm(n, i);
}

console.log(n);