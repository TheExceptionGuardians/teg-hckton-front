'use strict';
(function() {
  /**
     * @ngdoc component
     * @name app.component:abNavbar
     *
     * @description
     * Shows a common navbar.
     *
     * @param {number}  creationDate       Timestamp of app creation date
     */
  angular
    .module('app')
    .component('abNavbar', {
      templateUrl: 'app/components/ab-navbar/ab-navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindings: {
        creationDate: '<',
        brand: '<',
        paths: '<'
      }
    });

    /** @ngInject */
  function NavbarController(moment) {
    var vm = this;
    vm.relativeDate = moment(vm.creationDate).fromNow();
  }

})();
