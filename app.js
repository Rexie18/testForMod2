(function () {
'use strict';

var boughtList = [{
    name: " ",
    quantity: " "
  }
];

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Musil",
    quantity: "10"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.controller('BoughtController', BoughtController);


ShoppingListController.$inject = ['$scope'];
function ShoppingListController(ShoppingListService) {
  $scope.shoppingList2 = shoppingList2;

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList2.push(newItem);
  };
}

  BoughtController.$inject = ['$scope'];
function BoughtController(ShoppingListService) {
 $scope.boughtList = boughtList;

    $scope.move = function() {
    	var entries = $scope.shoppingList2.splice(1,1);
      $scope.boughtList.push(entries[0]);
        };
    };
}
  
})();
