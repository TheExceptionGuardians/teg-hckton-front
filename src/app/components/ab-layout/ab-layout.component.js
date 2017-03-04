'use strict';
(function() {
  /**
     * @ngdoc component
     * @name app.component:abLayout
     *
     * @description
     * Give us a basic template for our features home and about
     *
     * @param {object}  pageData       All data related with the features home and about.
     */
  angular
    .module('app')
    .component('abLayout', {
      templateUrl: 'app/components/ab-layout/ab-layout.html',
      controllerAs: 'vm',
      bindings:{
        pageData: '<'
      }
    });

})();
