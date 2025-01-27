const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	const sum=array.reduce((total,currentItem)=>{
    return total+currentItem
  },0)
  return sum;
};

const multiply = function(array) {
  const product=array.reduce((total,currentItem)=>{
    return total*currentItem
  },1)
  return product;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  fact=1;
	for(let i=1;i<=num;i++){
    fact=fact*i;
  }
  return fact;
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
