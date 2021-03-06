'use strict';

const SERVER_PORT = 4000;
const JSON_SPACES = 2;

module.exports = {
  fileName: './src/api/file/words.txt',

  logger: {
    colorize: true,
    level: 'debug'
  },

  server: {
    jsonSpaces: JSON_SPACES,
    port: SERVER_PORT
  }
};
