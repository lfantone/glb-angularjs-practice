app.controller('pullRequestModalController',["$scope", "$modalInstance","githubService", "items",
  function ($scope, $modalInstance,githubService,items) {
    $scope.myvar = true;
    $scope.vari = true;
    $scope.idNumber=items.id;
  githubService.getSinglePullRequest(items.username,items.repository,items.number)
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