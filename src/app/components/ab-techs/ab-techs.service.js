'use strict';
(function() {
  /**
     * @ngdoc service
     * @name app.service:techs
     *
     * @description
     * Service for the technologies of the application
     */
  angular
      .module('app')
      .service('techs', techs);

  /** @ngInject */
  function techs(toastr) {
    var data = [
      {
        'title': 'Gulp 4',
        'description': 'Automates tasks to improve your performance.',
        'logo': 'gulp.png',
        'url': 'http://gulpjs.com/'
      },
      {
        'title': 'Angular',
        'description': 'The front-end framework that you need.',
        'logo': 'angular.png',
        'url': 'https://angularjs.org/'
      },
      {
        'title': 'Bower',
        'description': 'A package manager for the web.',
        'logo': 'bower.png',
        'url': 'https://bower.io/'
      },
      {
        'title': 'Material Design',
        'description': 'Makes more liberal use of grid-based layouts, responsive animations and transitions...etc',
        'logo': 'material-design.png',
        'url': 'https://material.angularjs.org/latest/'
      },
      {
        'title': 'Browsersync',
        'description': 'Faster tweaking and testing by synchronizing file changes and interactions across multiple devices.',
        'logo': 'browser-sync.png',
        'url' : 'https://www.browsersync.io/'
      },
      {
        'title': 'Documentation',
        'description': 'Builds your documentation using ng-doc and serves it directly on your browser.',
        'logo': 'angular-doc.png',
        'url': 'https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation'
      },
      {
        'title': 'Karma',
        'description': 'The main goal for Karma is to bring a productive testing environment to developers.',
        'logo': 'karma.png',
        'url': 'https://karma-runner.github.io/1.0/index.html'
      },
      {
        'title': 'Jasmine',
        'description': 'Behaviour-driven development framework for testing JavaScript code.',
        'logo': 'jasmine.png',
        'url': 'http://jasmine.github.io/'
      },
      {
        'title': 'Protractor',
        'description': 'End to end testing for AngularJS applications.',
        'logo': 'protractor.png',
        'url': 'http://www.protractortest.org/#/'
      }

    ];

    this.getTechs = getTechs;

    /**
     * @ngdoc function
     * @name app.service#getTechs
     * @methodOf  app.service:techs
     * @description
     * Get the techsdefined above
     * @returns {object} techs
     */
    function getTechs() {
      var rankCount = 0;

      angular.forEach(data, function(awesomeThing) {
        awesomeThing.rank = rankCount;
        rankCount = rankCount++;
      });

      toastr.info('Techs Loaded','Info');
      return data;
    }
  }

})();
