'use strict';

var jDirectives = angular.module('myApp.jDirectives', []);

jDirectives.directive('navbar', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {},
    templateUrl: 'components/jDirectives/views/navbar.html',
    controller: function() {

    }
  };
});



/**
 * @ngdoc directive
 * @name confirm
 * @requires $uibModal
 * @param {confirm=} confirm - (Optional) Text to display
 * @description
 *  Opens a modal to confirm an action
 * @example
 */
jDirectives.directive('confirm', ['$uibModal', function($uibModal) {
  return {
    priority: 1,
    restrict: 'A',
    scope: {
      confirm: '@?',
      ngClick: '&'
    },
    link: function(scope, element, attrs) {
      element.unbind('click').bind('click', function($event) {
        $event.preventDefault();

        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'components/jDirectives/views/confirm.html',
          size: 'sm',
          resolve: {
            Message: function () {
              return scope.confirm;
            }
          },
          controller: function($scope, Message, $uibModalInstance) {
            "ngInject";
            $scope.message = Message || 'Are you sure?';
            $scope.ok = function() {
              $uibModalInstance.close('ok');
            };
            $scope.cancel = function() {
              $uibModalInstance.dismiss();
            };
          }
        }).result.then(function(res) {
          // ok
          scope.ngClick();
        }).catch(function(res) {
          // cancel
          // console.log('modal canceled');
        });
      });

    }
  };
}]);