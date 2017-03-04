'use strict';

var path = require('path');
var conf = require('./gulp.conf');
const argv = require('yargs').argv;
var _ = require('lodash');
var wiredep = require('wiredep');

var pathSrcHtml = [
  path.join(conf.paths.src, '/**/*.html')
];

var fs = require('fs');
var appconfig = JSON.parse(fs.readFileSync('./conf/app.config.json'));
var environment = (argv.dev) ? 'dev' : 'pro';
var threshold = appconfig.coverage_threshold[environment];

function listFiles() {
  var wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  var patterns = wiredep(wiredepOptions).js
    .concat([
      path.join(conf.paths.src, '/app/**/*.module.js'),
      path.join(conf.paths.src, '/app/**/*.js'),
      path.join(conf.paths.src, '/**/*.spec.js'),
      path.join(conf.paths.src, '/**/*.mock.js'),
    ])
    .concat(pathSrcHtml);

  var files = patterns.map(function(pattern) {
    return {
      pattern: pattern
    };
  });
  files.push({
    pattern: path.join(conf.paths.src, '/assets/**/*'),
    included: false,
    served: true,
    watched: false
  });
  return files;
}

module.exports = function(config) {

  var configuration = {
    files: listFiles(),
    basePath: '../',
    singleRun: true,
    failOnEmptyTestSuite: false,
    autoWatch: false,    
    ngHtml2JsPreprocessor: {
      stripPrefix: conf.paths.src + '/',
      moduleName: 'app'
    },

    logLevel: 'INFO',

    frameworks: ['phantomjs-shim', 'jasmine', 'angular-filesort'],

    angularFilesort: {
      whitelist: [path.join(conf.paths.src, '/**/!(*.html|*.spec|*.mock).js')]
    },

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-angular-filesort',
      'karma-phantomjs-shim',
      'karma-coverage',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-junit-reporter',
      'karma-threshold-reporter'
    ],

    junitReporter: {
          outputDir: 'test-reports/junit'
    },
    coverageReporter: {
      type : 'html',
      dir : 'test-reports/coverage/',
      check: {
        global: {
          statements: threshold.statements,
          branches: threshold.branches,
          functions: threshold.functions,
          lines: threshold.lines,
          excludes: []
        }
      }
    },

    reporters: ['junit', 'progress', 'coverage'],

    proxies: {
      '/assets/': path.join('/base/', conf.paths.src, '/assets/')
    }
  };

  // This is the default preprocessors configuration for a usage with Karma cli
  // The coverage preprocessor is added in gulp/unit-test.js only for single tests
  // It was not possible to do it there because karma doesn't let us now if we are
  // running a single test or not
  configuration.preprocessors = {};
  pathSrcHtml.forEach(function(path) {
    configuration.preprocessors[path] = ['ng-html2js'];
  });

  config.set(configuration);
};