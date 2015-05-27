var app=angular.module('app',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
        controller:'',
        templateUrl:'partials/home.html'
    })
    .when('/:username',{
        controller:'requestRepoController',
        templateUrl:'partials/reposList.html'
    })
    .when('/:username/:repo',{
        controller:'requestCommitsController',
        templateUrl:'partials/commitsList.html'
    })
    .otherwise({
            redirectTo: '/'
    });
});