'use strict';

const FileHelper = require('../helper/file-helper');
const RandomHelper = require('../helper/random-helper');

class WordService {
  constructor() {
    this.fileHelper = new FileHelper();
    this.randomHelper = new RandomHelper();
  }

  find(filters) {
    const wordAmount = filters.number;
    const fileLines = this.fileHelper.countLines();
    const positions = this.randomHelper.createNumberRandom(wordAmount, fileLines);

    return positions.map(position => this._createObjectWord(position, this.fileHelper.getLine(position)));
  }

  _createObjectWord(position, word) {
    return {
      position,
      word
    };
  }
}

module.exports = WordService;
