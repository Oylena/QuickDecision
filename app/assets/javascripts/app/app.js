'use strict';

angular.module('quickDecision', [
        'quickDecision.controllers',
        'ngRoute'
    ]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when("/welcome", { templateUrl: "templates/welcome.html", controller: "welcomeController" }).
            when("/login", { templateUrl: "templates/login.html", controller: "welcomeController" }).
            otherwise({redirectTo: '/welcome'});
    }])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);