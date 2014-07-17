// poll_answer.js

angular.module('pollAnswer', ['ng', 'pollCtrl'])

.directive('pollAnswer', function($rootScope) {
    return {
        restrict: 'A',

        require: '^poll',

        replace: true,

        transclude: true,

        template: '<button class="btn btn-block btn-default"><span ng-transclude></span></button>',

        scope: {
            answerId: '=answer'
        },

        link: function($scope, $element, $attrs, ctrl, $transclude) {
            $element.on('click', function() {
                ctrl.pickAnswer($scope.answerId);

                $rootScope.$emit('pickedAnswer', $scope.answerId);
            });
        }
    };
});
