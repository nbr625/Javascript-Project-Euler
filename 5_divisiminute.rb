function gcd(a, b) {

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