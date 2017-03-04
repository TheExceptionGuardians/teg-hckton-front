'use strict';
(function() {

  angular
    .module('app')
    .run(runBlock);

  /** @ngInject */
  function runBlock(toastr) {
    toastr.info("Application kickstart","Info");
  }

})();
