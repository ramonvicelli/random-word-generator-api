'use strict';

const RandomHelper = require('../../../api/domain/helper/random-helper');
const SIZE_NUMBERS = 2;
const MAXIMUM_NUMBER = 2;

describe('random helper', () => {
  let randomHelper;

  beforeEach(() => {
    randomHelper = new RandomHelper();
  });

  it('should be defined', () => {
    expect(randomHelper).to.not.be.undefined;
  });

  describe('# createNumberRandom', () => {
    it('should be defined', () => {
      expect(randomHelper.createNumberRandom).to.not.be.undefined;
    });

    it('createNumberRandom should be return 2 numbers', () => {
      const numbers = randomHelper.createNumberRandom(SIZE_NUMBERS);
      expect(numbers.length).to.be.equal(SIZE_NUMBERS);
    });

    it('createNumberRandom should be return 2 numbers and each less than 10', () => {
      const numbers = randomHelper.createNumberRandom(SIZE_NUMBERS, MAXIMUM_NUMBER);
      expect(numbers[0]).to.be.below(MAXIMUM_NUMBER);
      expect(numbers[1]).to.be.below(MAXIMUM_NUMBER);
    });
  });
});
