'use strict';

class RandomHelper {
  createNumberRandom(amount, maximumNumber = 1) {
    const numbers = [];
    const minimumNumber = 1;

    while (numbers.length < amount) {
      const number = this._getRandomInt(minimumNumber, maximumNumber);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers;
  }

  _getRandomInt(minimumNumber, maximumNumber) {
    const min = Math.ceil(minimumNumber);
    const max = Math.floor(maximumNumber);

    return Math.floor(Math.random() * (max - min)) + min;
  }
}

module.exports = RandomHelper;
