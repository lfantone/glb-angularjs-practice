var app=angular.module('app',['ngRoute','ngLoadingSpinner']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
        controller:'homeController',
        templateUrl:'partials/homeTemplate.html'
    })
    .when('/:username',{
        controller:'repositoriesController',
        templateUrl:'partials/repositoriesListView.html'
    })
    .when('/:username/:repository',{
        controller:'pullsAndCommitsController',
        templateUrl:'partials/pullsAndCommitsListView.html'
    })
    .otherwise({
            redirectTo: '/'
    });
});