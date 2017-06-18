'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'views/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $uibModal) {
  "ngInject";

  $scope.title = 'eeee';
  $scope.itemList = [
    { id:  1, name: 'First',  desc: 'The first element' },
    { id:  2, name: 'Second', desc: 'The second element' },
    { id:  3, name: 'Third',  desc: 'The third element' },
    { id:  4, name: 'Fourth', desc: 'The last element' },
    { id:  5, name: 'Fourth', desc: 'The last element' },
    { id:  6, name: 'Fourth', desc: 'The last element' },
    { id:  7, name: 'Fourth', desc: 'The last element' },
    { id:  8, name: 'Fourth', desc: 'The last element' },
    { id:  9, name: 'Fourth', desc: 'The last element' },
    { id: 10, name: 'Fourth', desc: 'The last element' },
    { id: 11, name: 'Fourth', desc: 'The last element' },
    { id: 12, name: 'Fourth', desc: 'The last element' },
    { id: 13, name: 'Fourth', desc: 'The last element' },
    { id: 14, name: 'Fourth', desc: 'The last element' }
  ];

  $scope.openItemModal = function(selectedTask) {
    $scope.task = selectedTask;
    $uibModal.open({
      size        : 'md',
      templateUrl : 'views/view1/item-modal.html',
      scope       : $scope,
      controller  : function() {

      }
    });


  };

});