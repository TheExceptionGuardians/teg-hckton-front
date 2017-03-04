'use strict';
(function() {
     /**
     * @ngdoc service
     * @name app.service:creation
     *
     * @description
     * Service for the creation of our application
     */
  angular
        .module('app')
        .factory('creation', Service);

    /** @ngInject */
  function Service() {

    var service = {
      getDate:getDate
    };

    return service;

        /**
       * @ngdoc function
       * @name app.service#getDate
       * @methodOf  app.service:creation
       * @description
       * Get the date of the creation of our app
       * @returns {Number} timestamp
       */
    function getDate() {
      return 1463439028273;
    }
  }
})();