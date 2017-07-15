'use strict';

const env = process.env.NODE_ENV || 'development';

module.exports = require(`./environment/environment-${env}.js`);
