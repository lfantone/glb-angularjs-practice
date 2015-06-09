var app=angular.module('app',['ngRoute']);
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
    .when('/:username/:repo',{
        controller:'commitsController',
        templateUrl:'partials/commitsListView.html'
    })
    .otherwise({
            redirectTo: '/'
    });
});