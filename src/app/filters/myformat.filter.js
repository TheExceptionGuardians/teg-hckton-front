'use strict';
(function() {
    /**
     * @ngdoc filter
     * @name app.filter:myFormat
     *
     * @description
     * Replace all titles by '-' before and after
     */
  angular
        .module('app')
        .filter('myFormat', MyFormat);

  function MyFormat () {
    return function(title) {
      return "- " + title + " -";
    };
  }

})();