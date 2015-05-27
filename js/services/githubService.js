app.service("githubService",function($http,$q){
    this.reposQuery = function(userGit) {
       return $http({method:'GET',url:'http://localhost:3000/'+userGit});
    };
    this.commitsQuery = function(userGit,repoGit) {
       return $http({method:'GET',url:'http://localhost:3000/'+userGit+'/'+repoGit+'/commits'});
    };

});

