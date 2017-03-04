'use strict';
(function() {

  describe('service navbar paths', function() {
    var navbarPaths;

    beforeEach(module('app'));
    beforeEach(inject(function(_navbarPaths_) {
      navbarPaths = _navbarPaths_;
    }));

    it('should be registered', function() {
      expect(navbarPaths).not.toEqual(null);
    });

    describe('getPaths function', function() {
      it('should exist', function() {
        expect(navbarPaths.getPaths).not.toEqual(null);
      });

      it('should return a object', function() {
        var paths = navbarPaths.getPaths();
        expect(paths).not.toEqual(null);
      });
    });
  });
})();
