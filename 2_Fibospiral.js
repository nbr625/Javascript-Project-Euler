//If we list all the natural numbers below 10 that are multiples of 3 or 5,
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence 
//whose values do not exceed four million, find the sum of the even-valued terms.
function fibbonize(sum, i) {
	if( i == 0){
		return 1;
	}
	if(i == 1){
		return 2;
	}
	return sum[i-1] + sum[i-2];
}

var limit = 4000000;
var total = 0;
var sum = [];

for(var el = 0; el < limit; el++) {
	sum[el] = fibbonize(sum, el);
	if(sum[el] > limit) {
		break;
	}
	if(sum[el] % 2 == 0) {
		total += sum[el]
	}
}

console.log(total);
