app.controller("requestCommitsController",["$scope","$routeParams","githubService",
  function($scope,$routeParams,githubService){
        $scope.myvar=true;
        $scope.vari=true;
        var userGit=$routeParams.username;
        var repoGit=$routeParams.repo;
        githubService.commitsQuery(userGit,repoGit)
        .then(
                function(result){
                    if(result._embedded.Commits[0]!=null){
                        $scope.myvar=true;
                        $scope.vari=false;
                        $scope.commits = result;
                    }
                    else{
                        $scope.myvar=false;
                        $scope.vari=true;
                        $scope.messageError = "NOT - Found";
                        $scope.errorNumber=404;
                    }                   
                },
                function(err,status){
                     $scope.commits = status;

        });

  
}]);
