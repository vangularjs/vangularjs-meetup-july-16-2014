// poll_ctrl.js

angular.module('pollCtrl', ['ng'])

.controller('pollCtrl', function($scope, $http) {
    $scope.text = 'Hello World';

    $http.get('api/polls/1.json').then(function(result) {
        $scope.poll = result.data;
    });

    this.pickAnswer = $scope.pickAnswer = function(answerId) {
        // TODO: Maybe save this to an API for recording?
        alert(answerId);
    };
});
