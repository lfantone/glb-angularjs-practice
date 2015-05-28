app.service("githubService",["$http","$q",function($http,$q){

    this.reposQuery = function(userGit){
    
    var defer = $q.defer();

    $http.get('http://localhost:3000/'+userGit)
    .success(function(res){
      defer.resolve(res);
    })
    .error(function(err, status){
      defer.reject(err);
    })

    return defer.promise;
  };


  this.commitsQuery = function(userGit,repoGit){
    
    var defer = $q.defer();

    $http.get('http://localhost:3000/'+userGit+'/'+repoGit+'/commits')
    .success(function(res){
      defer.resolve(res);
    })
    .error(function(err, status){
      defer.reject(err);
    })

    return defer.promise;
  };



}]);