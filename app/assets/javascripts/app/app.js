'use strict';

angular.module('quickDecision', [
        'quickDecision.services',
        'quickDecision.controllers',
        'ngRoute'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when("/welcome", { templateUrl: "partials/welcome.html", controller: "welcomeController" }).
            otherwise({redirectTo: '/welcome'});
    }]);