'use strict';
(function() {

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider
        .state('home', {
          url: '/home',
          template: '<ab-home></ab-home>'
        });
  }

})();
