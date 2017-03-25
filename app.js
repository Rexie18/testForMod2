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
function ShoppingListController($scope) {
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
function BoughtController($scope) {
  $scope.boughtList = boughtList;

  
  $scope.move = function() {
    	var entries = $scope.shoppingList2.splice(1,1);
      $scope.boughtList.push(entries[0]);
    };
}
  
})();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// (function () {
// 'use strict';

   
// angular.module('ShoppingListApp', [])
// .controller('ShoppingListController', ShoppingListController)
// .controller('ShoppingListShowController', ShoppingListShowController)
// .service('ShoppingListService', ShoppingListService);

// ShoppingListController.$inject = ['ShoppingListService'];
// function ShoppingListAddController(ShoppingListService) {
//   var itemAdder = this;

//   itemAdder.item = shoppingList2;
  
//   itemAdder.addItem = function () {
//     ShoppingListService.addItem(itemAdder.item);
//   }
// }


// ShoppingListShowController.$inject = ['ShoppingListService'];
// function ShoppingListShowController(ShoppingListService) {
//   var showList = this;

//   showList.items = ShoppingListService.getItems();

//   showList.removeItem = function (itemIndex) {
//     ShoppingListService.removeItem(itemIndex);
//   };
// }


// function ShoppingListService() {
//   var service = this;

//   // List of shopping items
//   var items = [];

//   service.addItem = function (itemName, quantity) {
//     var item = {
//       name: itemName,
//       quantity: quantity
//     };
//     items.push(item);
//   };

//   service.removeItem = function (itemIdex) {
//     items.splice(itemIdex, 1);
//   };

//   service.getItems = function () {
//     return items;
//   };
// }

// })();

