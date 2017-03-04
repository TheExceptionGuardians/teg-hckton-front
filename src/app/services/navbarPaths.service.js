'use strict';
(function() {
     /**
     * @ngdoc service
     * @name app.service:navbarPaths
     *
     * @description
     * Service for the navbar paths of our application
     */
  angular
        .module('app')
        .factory('navbarPaths', Service);

    /** @ngInject */
  function Service() {

    var service = {
      getPaths:getPaths
    };

    return service;

    /**
     * @ngdoc function
     * @name app.service#getPaths
     * @methodOf  app.service:navbarPaths
     * @description
     * Get the paths of the app navbar
     * @returns {Object} navbar paths
     */
    function getPaths() {
      var paths = [{
        url: '#!/home',
        name: 'Home',
        icon: 'home'
      },
      {
        url: '#!/about',
        name: 'About',
        icon: 'work'
      }];

      return paths;
    }
  }
})();