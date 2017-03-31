'use strict';
(function () {
    /**
       * @ngdoc component
       * @name app.component:createMessage
       *
       * @description
       * component createMessage. Load all necesary data for his childs components
       */
    angular
        .module('app')
        .component('createMessage', {
            templateUrl: 'app/components/createMessage/createMessage.html',
            controller: createMessageController,
            controllerAs: 'vm'
        });

    /** @ngInject */
    function createMessageController() {
        var vm = this;

        vm.message = undefined;
        vm.submitCreateMessage = createMessage();
    }

    function createMessage() {
        //Invoke service
    }
})();