'use strict';
(function () {
    /**
     * @ngdoc service
     * @name app.service:messages
     *
     * @description
     * Service para la obtencion de los mensajes
     */
    angular
        .module('app')
        .factory('messagesService', messagesService);

    /** @ngInject */
    function messagesService($q, $http, EnvironmentConfig) {
        var self = this;

        /**
         * @ngdoc function
         * @name app.service#getMessages
         * @methodOf  app.service:messages
         * @description
         * Obtiene todos los mensajes
         * @returns {object} lista de mensajes
         */
        self.getMessages = function (dataIn) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url = EnvironmentConfig.api + "/messages";

            $http({
                method: "GET",
                url: url,
                params: dataIn
            }).then(function (dataOut) {
                deferred.resolve(dataOut.data);
            }, function (error) {
                deferred.reject(error);
            });

            //Devolvemos la promesa del deferred
            return promise;
        };

        return self;
    }
})();
