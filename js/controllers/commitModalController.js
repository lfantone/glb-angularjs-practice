app.controller('commitModalController',["$scope", "$modalInstance","githubService", "items",
  function ($scope, $modalInstance,githubService,items) {
    $scope.myvar = true;
    $scope.vari = true;
    $scope.shaNumber=items.sha;
  githubService.getSingleCommit(items.username,items.repository,items.sha)
              .then(
                function(result) {
                  $scope.myvar = true;
                  $scope.vari = false;
                  $scope.response=result;
                },
                function(err, status) {
                  $scope.myvar = false;
                  $scope.vari = true
                  $scope.errorMessage = err;
                });

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);