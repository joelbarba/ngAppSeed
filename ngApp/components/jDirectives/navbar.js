'use strict';

angular.module('myApp.jDirectives', []).directive('navbar', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {},
    templateUrl: 'components/jDirectives/views/navbar.html',
    controller: function() {

    }
  };
});
