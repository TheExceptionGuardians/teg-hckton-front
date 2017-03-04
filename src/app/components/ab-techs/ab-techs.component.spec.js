'use strict';
(function() {

  describe('techs component', function() {

    var $componentController, techs, item, bindings, newScope, itemList;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_ , _techs_, $rootScope) {
      $componentController = _$componentController_;
      //Getting data from the service
      techs = _techs_;
      itemList = techs.getTechs();
      item = itemList[0];
      //Defining the binding for the component data
      bindings = {item: item};
      //New scope
      newScope = $rootScope.$new();
    }));

    it('should have data from the service ', function() {
      // Here we are passing actual bindings to the component
      var vm = $componentController('abTechs', {$scope: newScope}, bindings);
      //Check if the binding is working
      expect(vm.item.url).toBe(item.url);
    });

  });
})();

