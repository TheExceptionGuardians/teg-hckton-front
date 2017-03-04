'use strict';
(function() {

  angular
    .module('app')
    .config(routeConfig);

  // function routeConfig($stateProvider, $urlRouterProvider){
    //Se elimina el atributo stateProvider para no dar error en una regla de eslint
    // no-unused-vars
  function routeConfig($urlRouterProvider){
    // For any unmatched url, send to /
    $urlRouterProvider.otherwise('/home');
  }
})();
