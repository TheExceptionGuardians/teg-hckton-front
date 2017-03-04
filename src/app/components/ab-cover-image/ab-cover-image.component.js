'use strict';
(function() {

/**
 * @ngdoc component
 * @name app.component:abCoverImage
 *
 * @description
 * A description of the component
 *
 * @param {object}  section       A field object
 * @param {string}  sectionText   A field object
 * @param {string}  logoUrl       A image url
 *
 */
  angular
    .module('app')
    .component('abCoverImage', {
      templateUrl: 'app/components/ab-cover-image/ab-cover-image.html',
      controller: CoverImageController,
      controllerAs: 'ctrl',
      bindings:{
        section: '<',
        sectionText: '<',
        logoUrl: '<'
      }
    });

  /** @ngInject */
  function CoverImageController() {
    var ctrl = this;

    if ( ctrl.section === 'about' ){
      ctrl.sectionH1 = "About";
    }
    if ( ctrl.section === 'home' ){
      ctrl.sectionH1 = "Home";
    }
  }

})();