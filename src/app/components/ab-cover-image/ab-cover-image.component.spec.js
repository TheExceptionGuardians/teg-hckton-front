'use strict';
(function() {

  describe('abCoverImage component', function() {

    var $componentController;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_) {
      $componentController = _$componentController_;
    }));

    it('should have a home section defined', function() {
      // Here we are passing actual bindings to the component
      var bindings = {section: 'home'};
      var ctrl = $componentController('abCoverImage', null, bindings);
      expect(ctrl.section).toEqual(jasmine.any(String));
      expect(ctrl.section).toEqual('home');
    });

    it('should have a about section defined', function() {
      // Here we are passing actual bindings to the component
      var bindings = {section: 'about'};
      var ctrl = $componentController('abCoverImage', null, bindings);
      expect(ctrl.section).toEqual(jasmine.any(String));
      expect(ctrl.section).toEqual('about');
    });

  });
})();

