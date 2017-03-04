'use strict';
(function() {

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);
    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 1500;
    toastrConfig.positionClass = 'toast-bottom-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
