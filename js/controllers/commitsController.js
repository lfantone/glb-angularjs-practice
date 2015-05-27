app.controller("requestCommitsController",["$scope","$http","$routeParams","githubService",
  function($scope,$http,$routeParams,githubService){

        var userGit=$routeParams.username;
        var repoGit=$routeParams.repo;
        githubService.commitsQuery(userGit,repoGit)
        .success(function(data) {
            $scope.commits = data;
        })
        .error(function(status){
            $scope.commits = status;
        });

  
}]);