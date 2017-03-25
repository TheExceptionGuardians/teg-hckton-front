'use strict';
(function () {

  describe('service messagesService', function () {
    var messagesService, httpBackend;

    beforeEach(module('app'));
    beforeEach(inject(function (_messagesService_, $httpBackend) {
      messagesService = _messagesService_;
      httpBackend = $httpBackend;

    }));

    it('should be registered', function () {
      expect(messagesService).not.toEqual(null);
    });

    describe('getMessages function', function () {
      it('should exist', function () {
        expect(messagesService.getMessages).not.toEqual(null);
      });

      it("should response a data", function () {
        var dataIn = {
        };

        //Datos de salida mockeados
        var responseService = [
            {
              "id": "122413",
              "msg": "mensaje de prueba"
            },
            {
              "id": "122123413",
              "msg": "mensaje de prueba 2"
            }
        ];

        //registro de mock de respuesta
        httpBackend.whenGET(/messages*/).respond(responseService);
        
        //llamada a funcion del servicio
        messagesService.getMessages(dataIn).then(function (dataOut) {
          //comprobamos respuesta del servicio
          expect(dataOut).toEqual(responseService);

        });

        //forzamos la respuesta del mock de backend
        httpBackend.flush();
      });

    });

  });
})();
