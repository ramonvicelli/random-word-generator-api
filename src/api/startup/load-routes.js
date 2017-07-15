'use strict';

const path = require('path');
const glob = require('glob');

const ROUTE_FILES = path.join(__dirname, '../domain/**/*-route.js');
const GLOB_CONFIGURATION = {realpath: true};

module.exports = app => {
  glob.sync(ROUTE_FILES, GLOB_CONFIGURATION).forEach(routeFile => {
    // eslint-disable-line global-require
    require(routeFile)(app);
  });
};
