app.controller("repositoriesController", ["$scope", "$routeParams", "githubService",
    function($scope, $routeParams, githubService) {
        $scope.myvar = true;
        $scope.vari = true;
        var username = $routeParams.username;
        githubService.getRepositoriesByUser(username)
            .then(
                function(result) {
                    $scope.myvar = true;
                    $scope.vari = false;
                    $scope.repos = result;
                },
                function(err, status) {
                    $scope.myvar = false;
                    $scope.vari = true
                    $scope.errorMessage = err;
                });


}]);
