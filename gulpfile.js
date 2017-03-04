const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
const csslint = require('gulp-csslint');
const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.paths.tasks+'/*.js']);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('inject', gulp.series(gulp.parallel('styles', 'eslint'), 'inject'));
gulp.task('build', gulp.series('eslint-failonerror','appconfig', 'partials', 'inject', 'other', 'test', 'build', 'assets', 'build-apidocs'));
gulp.task('test', gulp.series('eslint', 'karma:single-run'));
gulp.task('test:auto', gulp.series('watch', 'karma:auto-run'));
gulp.task('protractor:src', gulp.series('browsersync:e2e', 'webdriver-update', 'run-protractor'));
gulp.task('protractor:dist', gulp.series('build','browsersync:e2e-dist', 'webdriver-update', 'run-protractor'));
gulp.task('protractor', gulp.series('protractor:src'));
gulp.task('serve', gulp.series('clean', 'appconfig', 'inject', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('clean', 'default', 'browsersync:dist'));
gulp.task('serve:apidoc', gulp.series('clean', 'build-apidocs', 'browsersync:apidoc'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);

gulp.task('css', function() {
  return gulp.src(['src/assets/css/*.css', 'src/app/components/*/*.css', '!src/assets/css/*min.css'])
    .pipe(csslint())
    .pipe(csslint.formatter())
});

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch([
    conf.paths.src+'index.html',
    'bower.json'
  ], gulp.parallel('inject'));

  gulp.watch(conf.paths.src+'/app/**/*.html', reloadBrowserSync);
  gulp.watch([
    conf.paths.src+'/**/*.css'
  ], gulp.series('styles'));
  gulp.watch(conf.paths.src+'/**/*.js', gulp.series('inject'));
  done();
}
