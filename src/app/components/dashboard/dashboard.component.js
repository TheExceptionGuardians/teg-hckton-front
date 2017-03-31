'use strict';
(function () {
  /**
     * @ngdoc component
     * @name app.component:dashboard
     *
     * @description
     * component dashboard. Load all necesary data for his childs components
     */
  angular
    .module('app')
    .component('dashboard', {
      templateUrl: 'app/components/dashboard/dashboard.html',
      controller: dashboardController,
      controllerAs: 'vm'
    });

  /** @ngInject */
  function dashboardController() {
    var vm = this;

    vm.messages = [
        {
          id: '00001',
          msg:"Deportivamente sería una competición mucho más interesante que el churro de la última Eurocopa en la que sólo faltaron por jugar Andorra o Gibraltar. Eso sí... que los europeos se lleven espinilleras de titanio, que las van a necesitar...",
          created : "2017-03-12T05:33:51.492Z",
          user: {
            name : "Damian",
            id : "askmd324frfeowkmf"
        }
      },
       {
          id: '00002',
          msg:"Lo que ocurre es que si se invitase también a Alemania, no habría mucha diferencia con un Mundial (vaya, es que si se incluye además a Inglaterra ya están todas las selecciones que lo han ganado)",
          created : "2017-03-12T08:27:51.492Z",
          user: {
            name : "Javier",
            id : "askmd324frfeowkmwd"
          }
      } 
   ];

  }

})();
