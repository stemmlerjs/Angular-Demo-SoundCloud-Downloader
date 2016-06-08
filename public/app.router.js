(function(){

  angular.module('routerRoutes', ['ngRoute'])
    // configure our routes
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider

        // Login and Signup Routes (go to /login when cannot auth)
        .when('/', { templateUrl: 'views/home.html', controller: 'HomeController' })

        .when('/search', { templateUrl: 'views/search.html', controller: 'SearchController'})

        .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
        
    });

}())