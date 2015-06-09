app.service("githubService", ["$http", "$q", function($http, $q) {
    this.getRepositoriesByUser = function(username) {
        var defer = $q.defer();
        $http.get('http://localhost:3000/' + username)
            .success(function(res) {
                defer.resolve(res);
            })
            .error(function(err, status) {
                defer.reject(err);
            })
        return defer.promise;
    };
    this.getCommitsByRepository = function(username, repository) {
        var defer = $q.defer();
        $http.get('http://localhost:3000/' + username + '/' + repository + '/commits')
            .success(function(res) {
                defer.resolve(res);
            })
            .error(function(err, status) {
                defer.reject(err);
            })
        return defer.promise;
    };
    this.getPullRequestByRepository = function(username, repository) {
        var defer = $q.defer();
        $http.get('http://localhost:3000/' + username + '/' + repository + '/pulls')
            .success(function(res) {
                defer.resolve(res);
            })
            .error(function(err, status) {
                defer.reject(err);
            })
        return defer.promise;
    };
    this.getSingleRepository = function(username, repository) {
        var defer = $q.defer();
        $http.get('http://localhost:3000/' + username + '/' + repository)
            .success(function(res) {
                defer.resolve(res);
            })
            .error(function(err, status) {
                defer.reject(err);
            });
        return defer.promise;
    };
    this.getSingleCommit = function(username, repository, sha) {
        var defer = $q.defer();
        $http.get('http://localhost:3000/' + username + '/' + repository + '/commits/' + sha)
            .success(function(res) {
                defer.resolve(res);
            })
            .error(function(err, status) {
                defer.reject(err);
            });
        return defer.promise;
    };
    this.getSinglePullRequest = function(username, repository, number) {
        var defer = $q.defer();
        $http.get('http://localhost:3000/' + username + '/' + repository + '/pulls/' + number)
            .success(function(res) {
                defer.resolve(res);
            })
            .error(function(err, status) {
                defer.reject(err);
            })
        return defer.promise;
    };

}]);
