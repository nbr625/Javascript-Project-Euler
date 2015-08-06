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
