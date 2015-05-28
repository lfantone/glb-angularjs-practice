describe('Repositories Controller Test/', function() {
  var $controller;  
  beforeEach(function(){
    module('app');
    inject(function(_$controller_){
      $controller = _$controller_;
    });
  });  
  it('should test something', function() {
    var $scope = {};
    var controller = $controller('requestRepoController', { $scope: $scope });
    expect($scope.myvar).toBe(true);    
  });  
});