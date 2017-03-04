const gulp = require('gulp');
const gulpNgConfig = require('gulp-ng-config');
const gutil = require('gulp-util');
const argv = require('yargs').argv;
const path = require('path');
var rename = require("gulp-rename");

const conf = require('../conf/gulp.conf');

gulp.task('appconfig', appConfig);

function appConfig() {

  var environment = (argv.dev) ? 'dev' : 'pro';

  gutil.log('['+ gutil.colors.blue('Selected environment') +']'+ ' : ', environment);

  return gulp.src('conf/app.config.json')
    .pipe(gulpNgConfig(conf.ngModule, {
      environment : 'environment_constants.'+ environment,
      wrap : true,
      createModule: false
    }))
    .pipe(rename("app.environment.js"))
    .pipe(gulp.dest(conf.paths.src+'/app'));
}
