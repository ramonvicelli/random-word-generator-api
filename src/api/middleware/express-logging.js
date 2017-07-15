'use strict';

const winston = require('winston');
const morgan = require('morgan');

module.exports = app => {
  app.use(morgan('common', {stream: {write: message => winston.info(message)}}));
};
