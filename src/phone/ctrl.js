'use strict';

angular.module('phoneCtrl', ['ng', 'phoneService'])

.config(function($routeProvider) {
    $routeProvider.when('/phones', {
        templateUrl: 'src/phone/phone-list.html',
        controller: 'PhoneListCtrl'
    });

    $routeProvider.when('/phones/:phoneId', {
        templateUrl: 'src/phone/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    });
})

.controller('PhoneListCtrl', function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
})

.controller ('PhoneDetailCtrl', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({
                        phoneId: $routeParams.phoneId
                    }, function(phone) {
                        $scope.mainImageUrl = phone.images[0];
                    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
});
