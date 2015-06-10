app.controller("pullsAndCommitsController", ["$scope", "$routeParams", "githubService","$modal","$log",
    function($scope, $routeParams,githubService,$modal,$log) {

        $scope.myvar = true;
        $scope.vari = true;
        var username = $routeParams.username;
        var repository = $routeParams.repository;
        githubService.getPullsAndCommits(username, repository)
            .then(
                function(result) {
                    $scope.myvar = true;
                    $scope.vari = false;
                    $scope.response = result;
                },
                function(err, status) {
                    $scope.myvar = false;
                    $scope.vari = true
                    $scope.errorMessage = err;
                });

  
   $scope.animationsEnabled = true;

  $scope.openPullRequest = function (size) {

    var number=size;

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '../partials/myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        items: function () {
          return number;
        }
      }
    });

  
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };




}]);

