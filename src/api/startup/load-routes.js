'use strict';

const path = require('path');
const glob = require('glob');
const winston = require('winston');
const array = require('lodash/array');
const req = require;

const ROUTE_FILES = path.join(__dirname, '../domain/**/*-route.js');
const GLOB_CONFIGURATION = {realpath: true};

module.exports = app => {
  glob.sync(ROUTE_FILES, GLOB_CONFIGURATION).forEach(routeFile => {
    winston.info('Loading the route:', array.last(routeFile.split('/')));

    req(routeFile)(app);
  });
};
