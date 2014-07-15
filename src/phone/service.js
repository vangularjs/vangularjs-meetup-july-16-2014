'use strict';

angular.module('phoneService', ['ng', 'ngResource'])

.factory('Phone', function($resource) {
    return $resource('api/phones/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: { phoneId: 'phones' },
            isArray: true
        }
    });
});
