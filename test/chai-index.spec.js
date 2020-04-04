const assert = require('assert');
const {expect} = require('chai');

const {isTeen, sum, mult, isAdult, isOddNumber, isEvenNumber, sortArrayUp, isPalindrome, pickIt, findAverage, mathPower} = require('../solved tasks');

describe('function isTeenager', () => {
  it('should return true if age is equal to 13', () =>{
    expect(isTeen(13)).true;
  });  
  it('should be true if age is equal to 19', () => {
    expect(isTeen(19)).true;
  });
  it('should be false if age is greater than 19', () => {
    expect(isTeen(25)).true;
  });
  it('should be true if age is greater than 12', () => {
    expect(isTeen(13)).true;
  });
  it('should be true if age is equal to 13', () => {
    expect(isTeen(13)).true;
  });
  it('should be false if age is less than 13', () => {
    expect(isTeen(12)).true;
  });
  it('should return wrong input message if age is below 0', () => {
    expect(isTeen(-3)).true;
  });
  it('should return wrong input message if age is equal to 0', () => {
    expect(isTeen(0)).true;
  });
  it('should be undefined if age is undefined', () => {
    expect(isTeen(NaN).false);
  });
  it('should be undefined if age is not a number', () => {
    expect(isTeen('abc')).false;
  });
});

describe('function isAdult', () => {
  it('should return true if age is 21 and older', () =>{
    expect(isAdult(21)).true;
  });
  it('should return false if age is under 21', () => {
    expect(isAdult(14)).false;
  });
  it('should return wrong input message if age is equal to 0', () => {
    expect(isAdult(0)).eq( 'You entered the wrong number');
  });
  it('should return wrong input message if age is below 0', () => {
    expect(isAdult(-3)).eq('You entered the wrong number');
  });
});

describe('function findAverage', () => {
  it('should work for array of numbers', () => {
    expect(findAverage([1,4 ,7, 9, 5])).eq(5.20);
  });
  it('should work for array of negative numbers', () => {
    expect(findAverage([-17, -2, -4])).eq(-7.7);
  });
  it('should work for array of fractional number', () => {
    expect(findAverage([-11.2, 2.4, -4.7])).eq(-4.5);
  });
  it('should return an element itself it is is the only element in the given arr', () => {
    expect(findAverage([4])).eq(4);
  });
  it('should return 0 if 0 was the only element in the given arr', () => {
    expect(findAverage([0])).eq(0);
  });
  it('should return NaN if it was used as input ', () => {
    expect(findAverage(NaN)).deep.eq(NaN);
  });
  it('should return Infinity if it was used as input ', () => {
    expect(findAverage([1, 4, 5, Infinity])).eq(Infinity);
  });
  it('should return -Infinity if it was used as input ', () => {
    expect(findAverage([7, 4, 5, -Infinity])).eq(-Infinity);
  });
  it('should return message "Wrong Input" if undefined was used as input ', () => {
    expect(findAverage(undefined)).eq('Wrong Input');
  });
  it('should return message "Wrong Input" if null was used as input ', () => {
    expect(findAverage(null)).eq('Wrong Input');
  });
  it('should return message "Wrong Input" if a string was used as input ', () => {
    expect(findAverage('string')).eq('Wrong Input');
  });

});

describe('function mathPower', () => {
  it('should work for positive numbers', () => {
    expect(mathPower(2, 3)).eq(8);
  });
  it('should return 1 if exponent(b) equals 0', () => {
    expect(mathPower(4, 0)).eq(1);
  });
  it('should return 0 if base(a) equals 0', () => {
    expect(mathPower(0, 8)).eq(0);
  });
  it('should work with negative base(a)', () => {
    expect(mathPower(-2, 4)).eq(16);
  });
  it('should work with negative exponent(b)', () => {
    expect(mathPower(3, -2)).eq(0.1111111111111111);
  });
  it('should work if exponent(b) is not integer', () => {
    expect(mathPower(4, 1.3)).eq(6.062866266041593);
  });
  it('should work if both base(a) and exponent(b) are negative', () => {
    expect(mathPower(-3, -3)).eq(-0.037037037037037035);
  });
  it('should work if base(a) is not integer', () => {
    expect(mathPower(2.4, 3)).eq(13.823999999999998);
  });
  it('should work if both base(a) and exponent(b) are not integer', () => {
    expect(mathPower(2.2, 4.7)).eq(40.680529760039406);
  });
  it('should return 1 if exponent(b) is null', () => {
    expect(mathPower(4, null)).eq(1);
  });
  it('should return 0 if base(a) is null', () => {
    expect(mathPower(null, 2)).eq(0);
  });
  it('should return NaN if base(a) is NaN', () => {
    expect(mathPower(NaN, 2)).deep.eq(NaN);
  });
  it('should return NaN if base(a) is undefined', () => {
    expect(mathPower(undefined, 2)).deep.eq(NaN);
  });
});


describe('function pickIt', () => {
  it('should work for array of numbers', () => {
    expect(pickIt([1, 3, 6, 7, 4, 2])).deep.eq([[1, 3, 7], [6, 4, 2]]);
  });
  it('should work for only odd numbers - will return second array empty', () => {
    expect(pickIt([1, 3, 5, 7])).deep.eq([[1, 3, 5, 7], []]);
  });
  it('should work for only even numbers - will return first array empty', () => {
    expect(pickIt([2, 4, 6, 10])).deep.eq([[], [2, 4, 6, 10]]);
  });
  it('should work for negative numbers', () => {
    expect(pickIt([-12, 3, -4, -6, -10, -7])).deep.eq([[3, -7],[-12, -4, -6, -10]]);
  });
  it('should return an array with 2 empty array if we have an empty array as an input', () => {
    expect(pickIt([])).deep.eq([[], []]);
  });
  it('should return an array with 2 empty array if we have NaN as an input', () => {
    expect(pickIt(NaN)).deep.eq([[], []]);
  });
  it('should return a message "Wrong Input" if we have null as an input', () => {
    expect(pickIt(null)).eq('Wrong Input');
  });
  it('should return a message "Wrong Input" if we have undefined as an input', () => {
    expect(pickIt(undefined)).eq('Wrong Input');
  });
  it('should return a message "Wrong Input" if we have string as an input', () => {
    expect(pickIt('str')).eq('Wrong Input');
  });
});


describe('function isPalindrome', () => {
  it('should return true if a string is a palindrome', () => {
    expect(isPalindrome('ogo')). true;
  });
  it('should return false if a string is not a palindrome', () => {
    expect(isPalindrome('og')). false;
  });
  it('should return the message "It is not a string!" if type of input is a number', () => {
    expect(isPalindrome(192)).eq('It is not a string!');
  });
  it('should return true for an empty string',()  => {
    expect(isPalindrome('')). true;
  });
  it('should return true for an empty string',()  => {
    expect(isPalindrome('')). true;
  });
  it('should return the message "It is not a string!" if type of input is NaN', () => {
    expect(isPalindrome(NaN)).eq('It is not a string!');
  });
});

describe('function sortArrayUp', () => {
  it('should return array sorted in ascending order', () =>{
    expect(sortArrayUp([2, 3, 4, 0, 1])).deep.eq([0, 1, 2, 3, 4]);
  });
  it('should not return array sorted in descending order', () => {
    expect(sortArrayUp([2, 3, 4, 0, 1])).not.deep.eq([4, 3, 2, 1, 0]);
  });
  it('should not work for not consecutive numbers', () => {
    expect(sortArrayUp([187, 13, 4, 7, 2])).deep.eq([2, 4, 7, 13, 187]);
  });
  it('should return an empty array if array is empty', () => {
    expect(sortArrayUp([])).deep.eq([]);
  });
});

describe('function isOddNumber',() => {
  it('should return true if number is odd', () => {
    expect(isOddNumber(7)). true;
  });
  it('should return false if the number is not odd', () => {
    expect(isOddNumber(6)). false;
  });
  it('should return null if x equals 0', () => {
    expect(isOddNumber(null)). false;
  });
  it('should return undefined if not a number', () => {
    expect(isOddNumber('str')). undefined;
  });
  it('should return undefined if empty', () => {
    expect(isOddNumber()).undefined;
  });
});


describe('function isEvenNumber',() => {
  it('should return true if number is even', () => {
    expect(isEvenNumber(4)).true;
  });
  it('should return false if the number is not even', () => {
    expect(isEvenNumber(7)).false;
  });
  it('should return null if x equals 0', () => {
    expect(isEvenNumber(null)).false;
  });
  it('should return undefined if not a number', () => {
    expect(isEvenNumber({})).undefined;
  });
  it('should return undefined if empty', () => {
    expect(isEvenNumber()). undefined;
  });
});

describe('function sum', () => {
  it('should sum equals 6', () => {
    expect(sum(2, 4)).eq(6);
  });
  it('should sum a not equals 0', () => {
    expect(sum(2, 3)).not.eq(1);
  });
  it('should sum equals 0', () => {
    expect(sum(-4, 4)).eq(0);
  });
  it('should sum equals 4.25', () => {
    expect(sum(1.5, 2.75)).eq(4.25);
  });
  it('should return NaN if one of the arguments is undefined', () => {
    expect(sum(2, undefined)).NaN;
  });
  it('should work for strings', () => {
    expect(sum('str', 'sum')).eq('strsum');
  });
  it('should work for string + number', () => {
    expect(sum('str', 7)).eq('str7');
  });
  it('should work for string + NaN', () => {
    expect(sum('str', NaN)).eq('strNaN');
  });
  it('should work for number and null', () => {
    expect(sum(8, null)).eq(8);
  });
  it('should mult return Infinity if it is one of the inputs', () => {
    expect(sum(8, Infinity)).eq(Infinity);
  });
  it('should mult return -Infinity if it is one of the inputs', () => {
    expect(sum(-Infinity, 8)).eq(-Infinity);
  });
  it('should mult return NaN for Infinity + -Infinity', () => {
    expect(sum(-Infinity, Infinity)).NaN;
  });
});

describe('function multiplication', () => {
  it('should mult equals 8', () => {
    expect(mult(2, 4)).eq(8);
  });
  it('should mult not equals 3', () => {
    expect(mult(2, 4)).not.eq(3);
  });
  it('should mult equals 0', () => {
    expect(mult(3, 0)).eq(0);
  });
  it('should mult work for negative numbers', () => {
    expect(mult(-3, 2)).eq(-6);
  });
  it('should mult work for fractional numbers', () => {
    expect(mult(1.2, 1.6)).eq(1.92);
  });
  it('should mult return NaN for str and numb', () => {
    expect(mult(2, 'str')).NaN;
  });
  it('should mult return NaN if one of the inputs is undefined', () => {
    expect(mult(4, undefined)).NaN;
  });
  it('should mult return 0 if one of the inputs is null', () => {
    expect(mult(1, null)).eq(0);
  });
  it('should mult return Infinity if it is one of the inputs', () => {
    expect(mult(Infinity, 2)).eq(Infinity);
  });
  it('should mult return -Infinity if it is one of the inputs', () => {
    expect(mult(3, -Infinity)).eq(-Infinity);
  });
});