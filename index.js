function sum(a,b) {
  return a+b;
}

function mult(a,b) {
  return a*b;
}

function reverse(arr) {
  const newArr = [];
  for (let i=arr.length; i>=0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

module.exports = {sum, mult, reverse};