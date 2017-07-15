'use strict';

const environment = require('../environment');
const winston = require('winston');

module.exports = () => {
  winston.colorize = environment.logger.colorize;
  winston.level = environment.logger.level;
};
