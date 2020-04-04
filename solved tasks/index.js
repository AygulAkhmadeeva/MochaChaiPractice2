
module.exports = {isTeen, sum, mult, isAdult, isOddNumber, isEvenNumber, sortArrayUp, isPalindrome, pickIt, findAverage, mathPower};

function isTeen(x) {
  if (x < 19 || x === 19) return true;
  if (x > 13 || x === 13) return true;
  if (x < 0 || x === 0) return 'You entered the wrong number';
  else return false;
}

function findAverage(array) {
  if(array === null || array === undefined || typeof array === 'string') return 'Wrong Input';
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  return +(sum / array.length).toFixed(1);
}

function mathPower(a, b){
  return Math.pow(a, b);
}

//function will separate odd and even numbers in the given array and will return another array of arrays with odd and even numbers
function pickIt(arr){
  if(arr === null || arr === undefined || typeof arr === 'string') return 'Wrong Input';
  const odd=[] ,even=[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0) even.push(arr[i]);
    if(arr[i] % 2 !== 0) odd.push(arr[i]);
  }
  return [odd,even];
}


function isPalindrome(string){
  let newStr = '';
  for(let i = string.length - 1; i >= 0; i--){
    newStr = newStr + string[i];
  }
  if (typeof string !== 'string') return 'It is not a string!';
  if(newStr === string) return true;
  else return false;
}

function sortArrayUp(arr){
  if(arr.length === 0) return [];
  return arr.sort((a, b) => a - b);
}

function isAdult(x) {
  if (x > 21 || x === 21) return true;
  if (x < 0 || x === 0) return 'You entered the wrong number';
  else return false;
}

function isOddNumber(x){
  if( x === null) return false;
  if(typeof x !== 'number') return undefined;
  return (x % 2 === 1)? true: false;
}

function isEvenNumber(x){
  if( x === null) return false;
  if(typeof x !== 'number') return undefined;
  return (x % 2 === 0)? true: false;
}

function sum(a, b){
  return a + b;
}

function mult(a, b){
  return a * b;
}