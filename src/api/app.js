'use strict';

const consign = require('consign');
const express = require('express');
const app = express();

const FOLDER_API = 'src/api/';
const FOLDER_CONFIGURATION = `${FOLDER_API}configuration/`;
const FOLDER_STARTUP = `${FOLDER_API}startup/`;
const FOLDER_MIDDLEWARE = `${FOLDER_API}middleware/`;
const CONFIG_CONSIGN = {verbose: false};

loading();

module.exports = app;

function loading() {
  return consign(CONFIG_CONSIGN)
    .then(`${FOLDER_CONFIGURATION}winston.js`)
    .then(`${FOLDER_MIDDLEWARE}express-logging.js`)
    .then(`${FOLDER_MIDDLEWARE}express-route-cors.js`)
    .then(`${FOLDER_MIDDLEWARE}express-route-request.js`)
    .then(`${FOLDER_MIDDLEWARE}express-route-response.js`)
    .then(`${FOLDER_MIDDLEWARE}express-error-handler.js`)
    .then(`${FOLDER_STARTUP}load-routes.js`)
    .then(`${FOLDER_STARTUP}startup.js`)
    .into(app);
}
