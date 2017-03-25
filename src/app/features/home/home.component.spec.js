'use strict';
(function() {

  describe('home component', function() {

    var $componentController;
    var newScope;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_, $rootScope) {
      $componentController = _$componentController_;
      newScope = $rootScope.$new();
    }));

    it('should have a specific sectionTest', function() {
      var vm = $componentController('home', {$scope: newScope}, null);

      expect(vm.text).toEqual("welcome!!!");
    });

  });
})();

