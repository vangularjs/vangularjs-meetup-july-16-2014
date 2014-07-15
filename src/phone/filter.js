'use strict';

angular.module('phoneFilter', ['ng'])

.filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});
