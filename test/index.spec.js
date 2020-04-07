const assert = require('assert');
const {expect} = require('chai');
const {sum, checkTheBucket, spendEntireGiftCard, greet, cubeOdd, noSpace,
  times100, digital_root, inAscOrder, initializeNames, array_diff}
  = require('../index.js');

describe ('function sum', () => {
  it('should sum equals 5', ()=>{
    expect(sum(2, 4)).equal(6);
  });

  it('should sum not equals 7', () => {
    expect(sum(2, 4)).to.not.eq(7);
  });
});

describe ('function checkTheBucket', () => {
  it('should return true if there is gold', ()=>{
    expect(checkTheBucket(['stone', 'stone', 'gold','stone'])).to.be.true;
    //expect(checkTheBucket(["stone", "stone", "gold","stone"])).to.true;
    //expect(checkTheBucket(["stone", "stone", "gold","stone"])).true;
  });
  it('should return false if there is no gold', ()=>{
    //assert.equal(checkTheBucket(["stone", "stone", "stone"]), false);
    expect(checkTheBucket(['stone', 'stone', 'stone'])).to.be.false;
  });
  it('should return false on an empty list', ()=>{
    expect(checkTheBucket([])).to.be.false;
  });
  it('should return false with no argument', ()=>{
    expect(checkTheBucket()).to.be.false;
  });
  it('should return false if input is a number', ()=>{
    expect(checkTheBucket(5)).to.be.false;
  });
  it('should return false if input is a string', ()=>{
    expect(checkTheBucket('')).to.be.false;
  });
});

describe ('function spendEntireGiftCard', () => {

  it('should work correct for the single solution', ()=>{
    // assert.deepEqual(spendEntireGiftCard(5,[5,2,3,4,5]), [1, 2]);
    expect(spendEntireGiftCard(5,[5,2,3,4,5])).deep.equal([1, 2]);
  });
  it('should work correct for the multiple solution', ()=>{
    expect(spendEntireGiftCard(5,[1,2,3,4,5])).deep.equal([0, 3]);
  });
  it('should return null on a short list', ()=>{
    expect(spendEntireGiftCard(3,[1,1])).equal(null);
  });
  it('should return null on an empty list', ()=>{
    expect(spendEntireGiftCard(5,[])).equal(null);
  });
  it('should return null with no arguments', ()=>{
    expect(spendEntireGiftCard()).deep.equal(null);
  });
  it('should return null if input is number', ()=>{
    expect(spendEntireGiftCard(4)).equal(null);
  });
});


describe ('function greet', () => {

  it('should return Welcome when language is English', ()=>{
    expect(greet('english')).eq('Welcome');
  });
  it('should return correct greeting if language is not English and is in database', ()=>{
    expect(greet('estonian')).eql('Tere tulemast');
  });
  it('should return Welcome if language is not in database', ()=>{
    expect(greet('swedish')).eq('Welcome');
  });
  it('should return Welcome if input has not argument', ()=>{
    expect(greet()).eq('Welcome');
  });
  it('should return Welcome if input is a number', ()=>{
    expect(greet(5)).eq('Welcome');
  });
  it('should return Welcome if input is an array', ()=>{
    expect(greet([])).eq('Welcome');
  });
});

describe ('function cubeOdd', () => {

  it('should return correct result', ()=>{
    expect(cubeOdd([1, 2, 3, 4])).eq(28);
  });
  it('should return undefined if not all numbers in the list', ()=>{
    //assert.equal(cubeOdd(["a",12,9,"z",42]), undefined);
    expect(cubeOdd(['a',12,9,'z',42])).undefined;
  });
  it('should return 0 if there is no odd numbers in the list', ()=>{
    expect(cubeOdd([6, 2, 8, 4])).eq(0);
  });
  it('should return 0 if list is empty', ()=>{
    expect(cubeOdd([])).eq(0);
  });
  it('should return undefined if input is a string', ()=>{
    assert.equal(cubeOdd('zzz'), undefined);
    expect(cubeOdd('zzz')).undefined;
  });
  it('should return 0 if input is an object', ()=>{
    expect(cubeOdd({})).eq(0);
  });
  it('should return 0 if input is a number', ()=>{
    expect(cubeOdd(7)).eq(0);
  });
  it('should return 0 if input has no argument', ()=>{
    expect(cubeOdd()).eq(0);
  });
});

describe ('function noSpace', () => {
  it('should return correct result if there is single space', ()=>{
    expect(noSpace('8 j 8 mBli\n\rB8g imjB8B8 jl B')).eq('8j8mBliB8gimjB8B8jlB');
  });
  it('should return correct result if there are multiple spaces', ()=>{
    expect(noSpace('8   8 Bi fk8h  B 8 BB8B')).eq('88Bifk8hB8BB8B');
  });
  it('should return correct result if there are spaces at the beginning and at the end', ()=>{
    expect(noSpace('  8aaaaa dddd r   ')).eq('8aaaaaddddr');
  });
  it('should return correct result if there are special characters /-$,./', ()=>{
    expect(noSpace('djk-13 - hf  3 $..  hy9 , y$ ')).eq('djk-13-hf3$..hy9,y$');
  });
  it('should return "wrong input" if input is a number', ()=>{
    expect(noSpace(5)).equal('wrong input');
  });
  it('should return "wrong input" if input is an array', ()=>{
    expect(noSpace([3, 4])).equal('wrong input');
  });
  it('should return "wrong input" if input is an object', ()=>{
    expect(noSpace({a: 1,})).equal('wrong input');
  });
  it('should return "wrong input" if input has no arguments', ()=>{
    expect(noSpace()).equal('wrong input');
  });
});

describe ('function times100', () => {
  it('should return the arrays length equal to 100', ()=>{
    // assert.equal(times100('anna').length, 100);
    expect(times100('aya')).to.have.lengthOf(100);
  });
  it('every element  in the array must contain the word set in variable', ()=>{
    expect(times100('aya').every(e => e === 'aya')).equal(true);
  });
  it('should contain the word set in variable', ()=>{
    expect(times100('aya')).to.include('aya');
    expect(times100('aya')).to.be.an('array').that.includes('aya');
  });
  it('should return the array of numbers if input is a number', ()=>{
    expect(times100(6).slice(5, 10)).deep.equal([6, 6, 6, 6, 6]);
  });
  it('should all elements of output array be undefined with no arguments', ()=>{
    expect(times100()[3]).equal(undefined);
  });
  it('should return the array of 100 undefined elements with no arguments', ()=>{
    expect(times100()).to.have.lengthOf(100);
  });
});

describe ('function digital_root', () => {
  it('should return correct result on a short input value', ()=>{
    expect(digital_root(16)).eq(7);
  });
  it('should return correct result on a long input value', ()=>{
    expect(digital_root(456)).eq(6);
  });
  it('should return correct result input is negative', ()=>{
    expect(digital_root(-56)).eq(2);
  });
  it('should return correct result input is 0', ()=>{
    expect(digital_root(0)).eq(0);
  });
  it('should return 0 with no argument', ()=>{
    expect(digital_root()).eq(0);
  });
  it('should return "unexpected input" if input is a string', ()=>{
    expect(digital_root('zzz')).eq('unexpected input');
  });
  it('should return "unexpected input" if input is an array', ()=>{
    expect(digital_root([2, 7])).eq('unexpected input');
  });
});

describe ('function inAscOrder', () => {
  it('should return true if elements are in ascending order', ()=>{
    expect(inAscOrder([1, 2, 4, 7, 19])).true;
  });
  it('should return false if elements are in arbitrary order', ()=>{
    expect(inAscOrder([1, 6, 10, 18, 2, 4, 20])).false;
  });
  it('should return false if elements are in descending order', ()=> {
    expect(inAscOrder([9,8,7,6,5,4,3,2,1])).false;
  });
  it('should return true if there are negative elements in ascending order', ()=>{
    expect(inAscOrder([-2, -1, 0, 4, 7, 19])).true;
  });
  it('should return false if there are negative elements in arbitrary order', ()=>{
    expect(inAscOrder([-1, -2, 3, 4, 6, 19])).false;
  });
  it('should return null on array with 1 element', ()=>{
    expect(inAscOrder([1])).true;
  });
  it('should return true on an empty list', ()=>{
    expect(inAscOrder([])).true;
  });
  it('should return true with no arguments', ()=>{
    expect(inAscOrder()).true;
  });
  it('should return "Wrong input" if input is a number', ()=>{
    expect(inAscOrder(6)).eq('Wrong input');
  });
  it('should return "Wrong input" if input is a string', ()=>{
    expect(inAscOrder('zzz')).eq('Wrong input');
  });
});

describe ('function initializeNames', () => {
  it('should return correct result if name has only first name and last name', ()=>{
    expect(initializeNames('Ana Le')).eq('Ana Le');
  });
  it('should return correct result if name has only first name', ()=>{
    expect(initializeNames('Fedor')).eq('Fedor');
  });
  it('should return correct result if name has 3 names', ()=>{
    expect(initializeNames('Lois Mary Lane')).eq('Lois M. Lane');
  });
  it('should return correct result if name has 6 names', ()=>{
    expect(initializeNames('Alice Betty Catherine Jane Anna Davis')).eq('Alice B. C. J. A. Davis');
  });
  it('should return empty string with no argument', ()=>{
    expect(initializeNames()).eq('');
  });
  it('should return empty string with input empty string', ()=>{
    expect(initializeNames('')).eq('');
  });
  it('should return "wrong format" if input is a number', ()=>{
    expect(initializeNames(4)).eq('wrong format');
  });
  it('should return "wrong format" if input is an array', ()=>{
    expect(initializeNames([1, 2])).eq('wrong format');
  });
});

describe ('function array_diff', () => {
  it('should return correct result if there are no duplicated elements in each array', ()=>{
    expect(array_diff([1, 2, 3],[1])).deep.eq([2, 3]);
  });
  it('should return correct result if there are duplicated elements in each array', ()=>{
    expect(array_diff([1,2,2,2,3,4],[4,2,4])).deep.eq([1, 3]);
  });
  it('should return correct result if there are negative elements in arrays', ()=>{
    expect(array_diff([12,0,-18,8,-6,-13,-4,-6,-3],[-3,-6,-4,0,12,-6,-18,8])).deep.equal([-13]);
  });
  it('should return correct result if second element is empty', ()=>{
    expect(array_diff([1,8,2], [])).deep.eq([1,8,2]);
  });
  it('should return empty array if first element is empty', ()=>{
    expect(array_diff([], [1, 2, 3])).to.be.an('array').that.is.empty;
  });
  it('should return "wrong data format" with no arguments', ()=>{
    expect(array_diff()).eq('wrong data format');
  });
  it('should return "wrong data format" if input is a number', ()=>{
    expect(array_diff(6)).eq('wrong data format');
  });
  it('should return "wrong data format" if input is a string', ()=>{
    expect(array_diff('zzz')).eq('wrong data format');
  });
});