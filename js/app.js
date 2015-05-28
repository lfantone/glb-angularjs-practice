var app=angular.module('app',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
        controller:'homeController',
        templateUrl:'partials/home.html'
    })
    .when('/:username',{
        controller:'requestRepoController',
        templateUrl:'partials/repositoriesList.html'
    })
    .when('/:username/:repo',{
        controller:'requestCommitsController',
        templateUrl:'partials/commitsList.html'
    })
    .otherwise({
            redirectTo: '/'
    });
});