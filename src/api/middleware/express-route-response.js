'use strict';

const compression = require('compression');
const environment = require('../environment');

module.exports = app => {
  app.set('json spaces', environment.server.jsonSpaces);
  app.use(compression());
};
