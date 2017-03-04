'use strict';
(function() {
  /**
     * @ngdoc component
     * @name app.component:abAbout
     *
     * @description
     * Feature about. Load all necesary data for his childs components
     */
  angular
    .module('app')
    .component('abAbout', {
      templateUrl: 'app/features/ab-about/ab-about.html',
      controller: AboutController,
      controllerAs: 'vm'
    });

    /** @ngInject */
  // function AboutController(navbarPaths, guideItems, toastr, creation) {
    //Se elimina el atributo toastr para no dar error en dos reglas de eslint
    //max-params y no-unused-vars
  function AboutController(navbarPaths, guideItems, creation) {
    var vm = this;
    vm.pageData = {
      section: 'about',
      sectionText: 'About Section',
      creationDate: creation.getDate(),
      contentType: 'guide-item',
      contentData: guideItems.getItems(),
      logoURL: 'assets/images/serenity/serenity.png',
      brand: 'Angular Basic',
      paths: navbarPaths.getPaths()
    };
  }

})();