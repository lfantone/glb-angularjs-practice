app.controller("requestRepoController",["$scope","$routeParams","githubService",
  function($scope,$routeParams,githubService){
        $scope.myvar=true;
        $scope.vari=true;
        var userGit=$routeParams.username;
        githubService.reposQuery(userGit)
        .then(
          function(result){
                  console.log(result);
                  $scope.myvar=true;
                  $scope.vari=false;
                  $scope.repos = result;

          },
          function(err,status){
                  $scope.myvar=false;
                  $scope.vari=true;
                  $scope.errorMessage = err;
        });
  
}]);