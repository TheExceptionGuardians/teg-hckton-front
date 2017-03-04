'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('../conf/gulp.conf');
var exit = require('gulp-exit');

var karma = require('karma');

gulp.task('karma:single-run', karmaSingleRun);
gulp.task('karma:auto-run', karmaAutoRun);

function karmaSingleRun(done) { runTests(true,done); }
function karmaAutoRun(done) { runTests(false,done); }

function karmaFinishHandler(done) {
  return failCount => {  done(failCount ? new Error('Karma ends unsuccessfully.') : null); };
}

function runTests (singleRun,done) {
  
  var reporters = ['progress','junit'];
  var preprocessors = {};
  var pathSrcHtml = [ conf.paths.src+'/**/*.html' ];
  var pathSrcJs = [ conf.paths.src+'/**/!(*.spec).js' ];

  pathSrcHtml.forEach(function(path) {
    preprocessors[path] = ['ng-html2js'];
  });

  if (singleRun) {
    pathSrcJs.forEach(function(path) {
      preprocessors[path] = ['coverage'];
    });
    reporters.push('coverage')
  }

  var localConfig = {
    configFile: path.join(__dirname, '/../conf/karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun,
    reporters: reporters,
    preprocessors: preprocessors
  };

  const karmaServer = new karma.Server(localConfig, karmaFinishHandler(done));
  karmaServer.start();
}

