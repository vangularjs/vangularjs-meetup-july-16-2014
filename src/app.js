'use strict';

angular.module('TestApp', [
    'ng',
    'ngRoute',
    'ngAnimate',

    'phoneCtrl',
    'phoneFilter'
])
.config(function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/phones'
    });
});
