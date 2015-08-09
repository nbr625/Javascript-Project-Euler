function palindromer(high, low) {
  var highest = 0;
  for(var i = high; i >= low; i--) {
	for(var j = high; j >= low; j--) {
      sum = i * j;
      if(sum <= highest) {
        break;
	  }
      if(valid_pali(sum.toString())) {
        highest = max(highest, sum);
	  }
    }
  }
  return highest;
}

function flip(string) {
  var array = string.split('').reverse();
  var out   = '';
  for(key in array) {
	out += array[key];
  }
  return out;
}

function max(a,b) {
  if(a > b) {
	return a;
  }
  return b;
}

function valid_pali(string) {
  return string == flip(string);
}

console.log(palindromer(999, 100));

