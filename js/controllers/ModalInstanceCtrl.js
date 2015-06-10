app.controller('ModalInstanceCtrl',["$scope", "$modalInstance", function ($scope, $modalInstance, result) {

  $scope.pullRequests = result;
  
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);