'use strict';

const chai = require('chai');
// const {clone} = require('lodash');
// const dottie = require('dottie');
const mockery = require('mockery');
// const simpleMock = require('simple-mock');

// chai.use(require('chai-datetime'));

mockery.enable();
mockery.warnOnUnregistered(false);
mockery.warnOnReplace(false);

// global.clone = clone;
// global.dottie = dottie;
global.expect = chai.expect;
global.mockery = mockery;
// global.simpleMock = simpleMock;
