'use strict';

const SERVER_PORT = 3000;
const JSON_SPACES = 2;

module.exports = {
  fileName: './src/api-test/file/words.txt',

  logger: {
    colorize: true,
    level: 'debug'
  },

  server: {
    jsonSpaces: JSON_SPACES,
    port: SERVER_PORT
  }
};
