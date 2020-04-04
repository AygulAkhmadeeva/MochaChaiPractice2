const assert = require('assert');
const {expect} = require('chai');

const {isTeen, sum, mult, isAdult, isOddNumber, isEvenNumber, sortArrayUp, isPalindrome} = require('../solved tasks');

describe('function isPalindrome', () => {
  it('should return true if a string is a palindrome', () => {
    assert.equal(isPalindrome('ogo'), true);
  });
  it('should return false if a string is not a palindrome', () => {
    assert.notEqual(isPalindrome('ogo'), false);
  });
  it('should return the message "It is not a string!" if type of input is a number', () => {
    assert.equal(isPalindrome(192), 'It is not a string!');
  });
  it('should return true for an empty string',()  => {
    assert.equal(isPalindrome(''), true);
  });
});

describe('function sortArrayUp', () => {
  it('should return array sorted in ascending order', () =>{
    assert.deepEqual(sortArrayUp([2, 3, 4, 0, 1]), [0, 1, 2, 3, 4]);
  });
  it('should not return array sorted in descending order', () => {
    assert.notDeepEqual(sortArrayUp([2, 3, 4, 0, 1]), [4, 3, 2, 1, 0]);
  });
  it('should not work for not consecutive numbers', () => {
    assert.notEqual(sortArrayUp([2, 13, 4, 7, 187]), [2, 4, 7, 13, 187]);
  });
  it('should return an empty array if array is empty', () => {
    assert.deepEqual(sortArrayUp([]), []);
  });
});

describe('function isAdult', () => {
  it('should return true if age is 21 and older', () =>{
    assert.deepEqual(isAdult(21), true);
  });
  it('shhould return false if age is under 21', () => {
    assert.notEqual(isAdult(14), true);
  });
  it('should return wrong input message if age is equal to 0', () => {
    assert.equal(isAdult(0), 'You entered the wrong number');
  });
  it('should return wrong input message if age is below 0', () => {
    assert.equal(isAdult(-3), 'You entered the wrong number');
  });
});


describe('function isOddNumber',() => {
  it('should return true if number is odd', () => {
    assert.equal(isOddNumber(7), true);
  });
  it('should return false if the number is not odd', () => {
    assert.notEqual(isOddNumber(6), true);
  });
  it('should return null if x equals 0', () => {
    assert.equal(isOddNumber(null), false);
  });
  it('should return undefined if not a number', () => {
    assert.equal(isOddNumber('str'), undefined);
  });
  it('should return undefined if empty', () => {
    assert.equal(isOddNumber(), undefined);
  });
});


describe('function isEvenNumber',() => {
  it('should return true if number is even', () => {
    assert.equal(isEvenNumber(4), true);
  });
  it('should return false if the number is not even', () => {
    assert.notEqual(isEvenNumber(7), true);
  });
  it('should return null if x equals 0', () => {
    assert.equal(isEvenNumber(null), false);
  });
  it('should return undefined if not a number', () => {
    assert.equal(isEvenNumber('str'), undefined);
    expect(isEvenNumber({})).undefined;
  });
  it('should return undefined if empty', () => {
    assert.equal(isEvenNumber(), undefined);
  });
});

describe('function sum', () => {
  it('should sum equals 6', () => {
    assert.equal(sum(2, 4), 6);
  });
  it('should sum a not equals 0', () => {
    assert.notEqual(sum(2, 4), 0);
  });
});

describe('function multiplication', () => {
  it('should mult equals 8', () => {
    assert.equal(mult(2, 4), 8);
  });
  it('should mult equals 8', () => {
    assert.notEqual(mult(2, 4), 0);
  });
});