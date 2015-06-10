app.controller("pullsAndCommitsController", ["$scope", "$routeParams", "githubService",
    function($scope, $routeParams, githubService) {
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


    }
]);

