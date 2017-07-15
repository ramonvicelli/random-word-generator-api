'use strict';

class RandomHelper {
  createNumberRandom(amount, maximumNumber = 0) {
    const numbers = [];
    const minimumNumber = 1;

    for (let i = 0; i < amount; i++) {
      numbers.push(this._getRandomInt(minimumNumber, maximumNumber));
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
