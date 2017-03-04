const gulp = require('gulp');
const browserSync = require('browser-sync');
const spa = require('browser-sync-spa');
const conf = require('../conf/gulp.conf');
const vinylPaths = require('vinyl-paths');
const flatten = require('gulp-flatten');

const browserSyncConf = require('../conf/browsersync.conf');
const dynamicBrowserSyncConf = browserSyncConf();
const browserSyncDistConf = require('../conf/browsersync-dist.conf');
const browserSyncE2EConf = require('../conf/browsersync-protractor.conf');
const browserSyncApiDocConf = require('../conf/browsersync-apidoc.conf');

browserSync.use(spa());

gulp.task('injectComponentsPaths', injectComponentsPaths);
gulp.task('browsersyncServe', browserSyncServe);
gulp.task('browsersync', gulp.series('injectComponentsPaths', 'browsersyncServe'));
gulp.task('browsersync:dist', browserSyncDist);
gulp.task('browsersync:apidoc', browserSyncApiDoc);
gulp.task('browsersync:e2e', browserSyncE2e);
gulp.task('browsersync:e2e-dist', browserSyncE2eDist)

function injectComponentsPaths() {
  // Get all assests folders of our components
  return gulp.src(conf.paths.src+'/app/**/assets/')
    .pipe(vinylPaths(function (path) {

      var index = path.lastIndexOf("app");
      var relativePath = path.substring(index);
      var relativePath = relativePath.replace('assets','');
      var relativePath = relativePath.replace(/\\/g,'/');
      
      // Append our component path to browsersync config
      dynamicBrowserSyncConf.server.baseDir.push(conf.paths.src+'/'+relativePath);

      return Promise.resolve();
    }));
}

function browserSyncServe(done) {
  console.log('BROWSERSYNCCONF');

  console.log(dynamicBrowserSyncConf);
  browserSync.init(dynamicBrowserSyncConf);
  done();
}

function browserSyncDist(done) {
  browserSync.init(browserSyncDistConf());
  done();
}

function browserSyncE2e(done) {
  browserSync.init(browserSyncE2EConf());
  done();
}

function browserSyncE2eDist(done){
  browserSync.init(browserSyncDistConf());
  done();
}

function browserSyncApiDoc(done) {
  browserSync.init(browserSyncApiDocConf());
  done();
}