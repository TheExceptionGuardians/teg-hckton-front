const gulp = require('gulp');
const eslint = require('gulp-eslint');

const conf = require('../conf/gulp.conf');

gulp.task('eslint', eslint_default);
gulp.task('eslint-failonerror', eslint_failonerror);

function eslint_default() {
  return gulp.src(conf.paths.src+'/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())

    .pipe(gulp.dest(conf.paths.tmp));
}

function eslint_failonerror() {
  return gulp.src(conf.paths.src+'/**/*.js')
    .pipe(eslint())
    .pipe(eslint.failOnError())
    .pipe(eslint.format())

    .pipe(gulp.dest(conf.paths.tmp));
}

