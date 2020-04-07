module.exports = {
  sum,
  checkTheBucket,
  spendEntireGiftCard,
  greet,
  cubeOdd,
  noSpace,
  times100,
  digital_root,
  inAscOrder,
  initializeNames,
  array_diff
};
function sum(a, b) {
  return a + b;
}

function checkTheBucket(bucket = []) {
  return Array.isArray(bucket) ? bucket.includes('gold') : false;
}

function spendEntireGiftCard(x, arr = []) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === x) return [i, j];
    }
  }
  return null;
}

function greet(language = 'english') {
  let lgs = {
    english: 'Welcome',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    german: 'Willkommen',
    italian: 'Benvenuto',
    spanish: 'Bienvenido',
  };
  return lgs[language] || lgs['english'];
}


function cubeOdd(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) !== 'number') {
      return undefined;
    }
    if (arr[i] % 2 !== 0) sum += Math.pow(arr[i], 3);
  }
  return sum;
}

function noSpace(x) {
  return typeof x === 'string' ? x.replace(/\s/g, '') : 'wrong input';
}

function times100(word) {
  let newArr = [];
  for (let i = 0; i < 100; i++) {
    newArr.push(word);
  }
  return newArr;
}

function digital_root(n = 0) {
  if (typeof n !== 'number') return 'unexpected input';
  let str = Math.abs(n).toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum < 10 ? sum : digital_root(sum);
}

function inAscOrder(arr = []) {
  return Array.isArray(arr) ? arr.join('') === arr.sort((a, b) => a - b).join('') : 'Wrong input';
}

function initializeNames(name = '') {
  if (typeof name !== 'string') return 'wrong format';
  let arr = name.split(' ');
  if (arr.length < 3) return name;
  else {
    let middle = arr.slice(1, -1).map(el => el.slice(0, 1).toUpperCase() + '.').join(' ');
    return `${arr.slice(0, 1).join()} ${middle} ${arr.slice(-1).join()}`;
  }
}

function array_diff(a, b) {
  return Array.isArray(a) && Array.isArray(b) ? a.filter(el => !b.includes(el)) : 'wrong data format';
}

