'use strict';

const FileHelper = require('../../../api/domain/helper/file-helper');
const SIZE_LINES = 10;

describe('file helper', () => {
  let fileHelper;

  beforeEach(() => {
    fileHelper = new FileHelper();
  });

  it('should be defined', () => {
    expect(fileHelper).to.not.be.undefined;
  });

  describe('# countLines', () => {
    it('should be defined', () => {
      expect(fileHelper.countLines).to.not.be.undefined;
    });

    it('createNumberRandom should be return 10 lines', () => {
      const countLines = fileHelper.countLines();

      expect(countLines).to.be.equal(SIZE_LINES);
    });
  });

  describe('# getLine', () => {
    it('should be defined', () => {
      expect(fileHelper.getLine).to.not.be.undefined;
    });

    it('createNumberRandom should be return "pineapple" in line "1"', () => {
      const word = fileHelper.getLine(1);

      expect(word).to.be.equal('pineapple');
    });
  });
});
