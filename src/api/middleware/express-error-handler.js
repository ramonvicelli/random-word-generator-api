'use strict';

const routeResolver = require('express-route-resolver');

module.exports = app => {
  app.use((error, req, res, next) => {
    routeResolver.onError(res, error);
    next();
  });
};
