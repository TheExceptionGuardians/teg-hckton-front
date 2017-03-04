'use strict';
describe('Test myFormat filter', function () {

  var $filter;

  beforeEach(function () {
    module('app');
    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should decore a string', function () {
    // Arrange.
    var foo = 'hello world', result;
    // Act.
    result = $filter('myFormat')(foo);
    // Assert.
    expect(result).toEqual('- hello world -');
  });
});
