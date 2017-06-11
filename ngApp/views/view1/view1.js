'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'views/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
  "ngInject";

  $scope.title = 'eeee';
  $scope.itemList = [
    { id: 1, name: 'First',  desc: 'The first element' },
    { id: 2, name: 'Second', desc: 'The second element' },
    { id: 3, name: 'Third',  desc: 'The third element' },
    { id: 4, name: 'Fourth', desc: 'The last element' }
  ]

});