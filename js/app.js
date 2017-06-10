// app module
var PersPagesApp = angular.module('PersPagesApp', []);

// routes
PersPagesApp.config(function ($routeProvider) {

   $routeProvider
    .when('/',
        {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
    .when('/realisations',
        {
            controller: 'RealController',
            templateUrl: 'views/realisations.html'
        })
    .when('/projets',
        {
            controller: 'ProjController',
            templateUrl: 'views/projets.html'
        })
    .otherwise({ redirectTo: '/' });

});
