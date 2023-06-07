const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  var sum =0;
	for (let i=0;i<arr.length;i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  var multipled =1;
	for (let i=0;i<arr.length;i++){
    multipled *= arr[i];
  }
  return multipled;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(x) {
	if (x==0 || x== 1){
    return 1;
  }
  else{
    return x * factorial(x-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
