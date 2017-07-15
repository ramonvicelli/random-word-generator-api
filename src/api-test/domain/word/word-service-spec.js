'use strict';

const PATH_WORD_SERVICE = '../../../api/domain/word/word-service';
const PATH_FILE_HELPER = '../helper/file-helper';
const PATH_RANDOM_HELPER = '../helper/random-helper';

const FileHelperMock = class {
  countLines() {
    return 10;
  }

  getLine(numberLine) {
    if (numberLine === 0) {
      return 'pineapple';
    }

    if (numberLine === 2) {
      return 'strawberry';
    }

    return null;
  }
};

const RandomHelperMock = class {
  createNumberRandom(amount, maximumNumber) {
    return [0, 2];
  }
};

describe('domain word service', () => {
  let WordService;
  let wordService;

  before(() => {
    mockery.registerMock(PATH_FILE_HELPER, FileHelperMock);
    mockery.registerMock(PATH_RANDOM_HELPER, RandomHelperMock);

    mockery.registerAllowable(PATH_WORD_SERVICE);
    WordService = require(PATH_WORD_SERVICE);
  });

  after(() => {
    mockery.deregisterMock(PATH_FILE_HELPER);
    mockery.deregisterMock(PATH_RANDOM_HELPER);
  });

  beforeEach(() => {
    wordService = new WordService();
  });

  it('should be defined', () => {
    expect(wordService).to.not.be.undefined;
  });

  describe('# find', () => {
    it('find 2 words', () => {
      const filters = {number: 2};

      const words = wordService.find(filters);
      expect(words).to.deep.equal([{
          position: 0,
          word: 'pineapple'
        },
        {
          position: 2,
          word: 'strawberry'
        }
      ]);
    });
  });
});
