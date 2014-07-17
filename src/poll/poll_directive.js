// poll_directive.js

angular.module('pollDirective', ['ng', 'pollCtrl'])

.directive('poll', function() {
    return {
        restrict: 'A',

        // template: '<b>This is my directive</b>',
        templateUrl: 'src/poll/poll.html',

        controller: 'pollCtrl',

        scope: {},

        link: function($scope, $element, $attrs) {
        }
    };
});
