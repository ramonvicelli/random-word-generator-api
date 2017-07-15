'use strict';

const gulp = require('gulp');
const env = require('gulp-env');
const mocha = require('gulp-mocha');

const ENVS = env.set({NODE_ENV: 'test'});
const OPTIONS = {require: ['./src/api-test/helpers']};

gulp.task('api-test-unit', () =>
  gulp.src(['src/api-test/**/*spec.js'], {read: false})
    .pipe(ENVS)
    .pipe(mocha(OPTIONS)));
