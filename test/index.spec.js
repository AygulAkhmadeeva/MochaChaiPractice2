const assert = require('assert');
const {isTeenager, sortArrayDown, isOddNumber} = require('../index.js');

describe('function Teenager', () => {
    it('should be true if age is less than 19', () => {
        assert.equal (isTeenager(19), true);
    });
    it('should be true if age is equal to 19', () => {
        assert.equal (isTeenager(19), true);
    });
    it('should be false if age is greater than 19', () => {
        assert.equal (isTeenager(19), false);
    });
    it('should be true if age is greater than 12', () => {
        assert.equal (isTeenager(13), true);
    });
    it('should be true if age is equal to 13', () => {
        assert.equal (isTeenager(13), true);
    });
    it('should be false if age is less than 13', () => {
        assert.equal (isTeenager(13), false);
    });
    it('should be false if age is negative', () => {
        assert.equal (isTeenager(-1), false);
    });
    it('should be undefined if age is undefined', () => {
        assert.equal (isTeenager(), 'age is not defined');
    });
    it('should be undefined if age is not a number', () => {
        assert.equal (isTeenager('abc'), 'age is not defined');
    });
});

describe('function sortArrayDown', () => {
    it('should array is sorted in decreasing order', () => {
        assert.deepStrictEqual(sortArrayDown([10, 9, 8, 7]), [10, 9, 8, 7]);
    });
    it('should array is not sorted in decreasing order', () => {
        assert.notDeepStrictEqual(sortArrayDown([10, 8, 2, 0]), [8, 2, 10, 0]);
    });


describe('function isOddNumber', () => {
        it('should a number 3 is an odd number',  () => {
            assert.equal(isOddNumber(3), true);
        });

        it('should a number 2 is not an odd number',  () => {
            assert.equal(isOddNumber(2), false);
        });

        it('should a zero is not an odd number',  () => {
            assert.equal(isOddNumber(0), false);
        });

        it('should an input is not a number',  () => {
            assert.equal(isOddNumber('A'), "not a number");
        });
});

