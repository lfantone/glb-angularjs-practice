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


  $scope.openPullRequest = function (number,id) {
      var items={username:username,repository:repository,number:number,id:id};
      var modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '../partials/pullRequestModalContent.html',
                    controller: 'pullRequestModalController',
                    resolve:{
                      items:function(){
                        return items;
                      }
                    }
      });
  };

  $scope.openCommit = function (sha) {
      var items={username:username,repository:repository,sha:sha};
       var modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '../partials/commitModalContent.html',
                    controller: 'commitModalController',
                    resolve:{
                      items:function(){
                        return items;
                      }
                    }
      });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };


}]);

