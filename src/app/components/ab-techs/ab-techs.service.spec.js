'use strict';
(function() {

  describe('service techs', function() {
    var techs;

    beforeEach(module('app'));
    beforeEach(inject(function(_techs_) {
      techs = _techs_;
    }));

    it('should be registered', function() {
      expect(techs).not.toEqual(null);
    });

    describe('getTec function', function() {
      it('should exist', function() {
        expect(techs.getTechs).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = techs.getTechs();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
