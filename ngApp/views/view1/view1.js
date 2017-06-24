'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'views/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $uibModal, $resource) {
  "ngInject";

  var itemResource = $resource('/api/v1.0/items/:itemId', { itemId: '@id' });

  // Load items list
  itemResource.get(function(data) {
    if (!!data && data.hasOwnProperty('items')) {
      $scope.itemList = angular.copy(data.items);
    }
  });

  // Open add Item modal
  $scope.openAddModal = function() {
    $scope.task = 'add';
    $scope.item = {};
    openModal();
  };

  // Open edit Item modal
  $scope.openEditModal = function(selectedItem) {
    $scope.task = 'edit';
    itemResource.get({ itemId: selectedItem.id }, function(data) {
      $scope.item = angular.copy(data.item);
      openModal();
    });
  };

  function openModal() {
    $uibModal.open({
      size        : 'md',
      templateUrl : 'views/view1/item-modal.html',
      scope       : $scope,
      controller  : function($scope, $uibModalInstance) {
        "ngInject";

        $scope.createNewItem = function() {
          itemResource.save($scope.item, function(data) {
            $scope.itemList.push(data.item);
            $uibModalInstance.close();
          });
        };

        $scope.saveItem = function() {
          itemResource.save($scope.item, function(data) {
            var listItem = $scope.itemList.getById(data.item.id);
            if (listItem) {
              angular.merge(listItem, data.item);
            }
            $uibModalInstance.close();
          });
        };

        $scope.removeItem = function() {
          itemResource.remove({ itemId: $scope.item.id }, function() {
            $scope.itemList.removeById($scope.item.id);
            $uibModalInstance.close();
          });
        };

      }
    });
  }

});