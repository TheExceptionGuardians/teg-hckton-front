'use strict';
(function () {
  /**
     * @ngdoc component
     * @name app.component:mensaje
     *
     * @description
     * component mensaje. Load all necesary data for his childs components
     */
  angular
    .module('app')
    .component('message', {
      templateUrl: 'app/components/message/message.html',
      controller: messageController,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function messageController() {
    var vm = this;

    vm.text="welcome!!!";
  }

})();
