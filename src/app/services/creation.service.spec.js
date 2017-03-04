'use strict';
(function() {

  describe('service creation', function() {
    var creation;

    beforeEach(module('app'));
    beforeEach(inject(function(_creation_) {
      creation = _creation_;
    }));

    it('should be registered', function() {
      expect(creation).not.toEqual(null);
    });

    describe('getDate function', function() {
      it('should exist', function() {
        expect(creation.getDate).not.toEqual(null);
      });

      it('should return a number', function() {
        var date = creation.getDate();
        expect(date).not.toEqual(null);
      });
    });
  });
})();
