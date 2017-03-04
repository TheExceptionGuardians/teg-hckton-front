'use strict';
(function() {
  /**
     * @ngdoc component
     * @name app.component:abHome
     *
     * @description
     * Feature home. Load all necesary data for his childs components
     */
  angular
    .module('app')
    .component('abHome', {
      templateUrl: 'app/features/ab-home/ab-home.html',
      controller: HomeController,
      controllerAs: 'vm'
    });

    /** @ngInject */
  // function HomeController(navbarPaths, techs, toastr, creation) {
    //Se elimina el atributo toastr para no dar error en dos reglas de eslint
    //max-params y no-unused-vars
  function HomeController(navbarPaths, techs, creation) {
    var vm = this;

    vm.pageData = {
      section: 'home',
      sectionText: 'Frontend Revolution based on opensource',
      creationDate: creation.getDate(),
      contentType: 'techs',
      contentData: techs.getTechs(),
      logoURL: 'assets/images/Front-Stack-Angular-Big.png',
      brand: 'Angular Basic',
      paths: navbarPaths.getPaths()
    };
  }

})();
