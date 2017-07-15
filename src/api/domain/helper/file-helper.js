'use strict';

const fs = require('fs');
const winston = require('winston');
const environment = require('../../environment');

let file;

class FileHelper {
  constructor() {
    fs.readFile(environment.fileName, (error, content) => {
      if (error) {
        throw error;
      }
      file = content.toString().split(/\r?\n/);
    });
  }

  countLines() {
    const fileLines = file.length;

    winston.debug('amount of line', fileLines);

    return fileLines;
  }

  getLine(numberLine) {
    const position = numberLine - 1;
    const word = file[position];

    winston.debug(`position: ${position},  word: ${word}`);

    return word;
  }
}

module.exports = FileHelper;
