'use strict';

const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const runSequence = require('run-sequence');

const OPTIONS_ISTANBUL = {
  dir: './shippable/codecoverage/',
  reportOpts: {cobertura: {dir: './shippable/codecoverage/', file: 'api-test-unit-cobertura.xml'}},
  reporters: ['text']
};

gulp.task('coverage-before', () => gulp
  .src(['src/api/**/*.js'])
  .pipe(istanbul())
  .pipe(istanbul.hookRequire())
);

gulp.task('coverage-after', () => gulp
  .src(['src/api-test/**/*spec.js'], {read: false})
  .pipe(istanbul.writeReports(OPTIONS_ISTANBUL))
);

gulp.task('coverage', cb => runSequence('coverage-before', 'api-test-unit', 'coverage-after', cb));
