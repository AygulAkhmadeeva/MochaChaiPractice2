const assert = require('assert');
const {sum, mult} = require('../index.js');
module.import = sum;

describe('function sum', ()=> {
  it ('should variable a  equal 10', ()=> {
    assert.equal(sum(2,3),5);
  });

  it ('should variable a not equal 0', ()=> {
    assert.notEqual(sum(2,3),6);
  });
});

describe('function mult', ()=> {
  it('should works correct', ()=>{
    assert.equal(mult(2,3),6);
  });
  it('should pass', ()=>{
    assert.notEqual(mult(2,3),0);
  });
});

describe('function reverse', ()=> {
  it('should works correct arr[1,2,3] and reverse for them [3,2,1]', ()=>{
    assert.deepEqual(reverse([1, 2, 3],[3, 2, 1]));
  });
  it('should work uncorrect arr[1,2,3] and reverse for them [4,3,2]', ()=>{
    assert.notDeepEqual(reverse([1, 2, 3],[4, 3, 2]));
  });
});