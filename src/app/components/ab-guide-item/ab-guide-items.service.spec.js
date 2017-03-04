'use strict';
(function() {

  describe('service guideItems', function() {
    var guideItems;

    beforeEach(module('app'));
    beforeEach(inject(function(_guideItems_) {
      guideItems = _guideItems_;
    }));

    it('should be registered', function() {
      expect(guideItems).not.toEqual(null);
    });

    describe('getItems function', function() {
      it('should exist', function() {
        expect(guideItems.getItems).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = guideItems.getItems();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
