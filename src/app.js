// app.js
'use strict';

angular.module('TestApp', [
    'ng',
    'ngRoute',
    'ngAnimate',

    'phoneCtrl',
    'phoneFilter',

    'pollCtrl',
    'pollDirective',
    'pollAnswer'
])
.config(function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/phones'
    });
});
