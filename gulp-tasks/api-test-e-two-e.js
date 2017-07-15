'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const env = require('gulp-env');

const timeout = 30000;
const ENVS = env.set({NODE_ENV: 'test'});

const OPTIONS = {
  require: ['./src/api-test-e2e/helpers'],
  timeout
};

gulp.task('api-test-e2e', () => gulp.src(['src/api-test-e2e/**/*spec.js'], {read: false})
  .pipe(ENVS)
  .pipe(mocha(OPTIONS))
  .once('end', () => process.exit())
);
