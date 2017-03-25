'use strict';
(function () {
  /**
     * @ngdoc component
     * @name app.component:home
     *
     * @description
     * Feature home. Load all necesary data for his childs components
     */
  angular
    .module('app')
    .component('home', {
      templateUrl: 'app/features/home/home.html',
      controller: HomeController,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function HomeController() {
    var vm = this;

    vm.text="welcome!!!";
  }

})();
