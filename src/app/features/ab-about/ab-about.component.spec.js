'use strict';
(function() {

  describe('about component', function() {

    var $componentController, newScope;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_, $rootScope) {
      $componentController = _$componentController_;
      newScope = $rootScope.$new();
    }));

    it('should have a specific sectionTest', function() {
      var vm = $componentController('abAbout', {$scope: newScope}, null);
      expect(vm.pageData.sectionText).toEqual("About Section");
    });

  });
})();


