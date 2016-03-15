(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('SwolecietyApp', [
        'ngRoute',
        'SwolecietyControllers',
        'SwolecietyServices',
        'firebase'
    ]).
    config(configFunction); 

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/exercises', {
            templateUrl: 'partials/exercises-list.html',
            controller: 'MainController'
            })
            .when('/calendar', {
            templateUrl: 'partials/calendar.html',
            controller: 'CalendarController'
           })
            .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
            })    
          .otherwise( {
            redirectTo: '/exercises'
          });
    }
})();

    
  

