app.controller("requestRepoController",["$scope","$http","$routeParams","githubService",
  function($scope,$http,$routeParams,githubService){

        var userGit=$routeParams.username;
        githubService.reposQuery(userGit)
        .success(function(data) {
            $scope.repos = data;
        })
        .error(function(status){
            $scope.repos = status;
        });

  
}]);