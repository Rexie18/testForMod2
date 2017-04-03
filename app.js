(function () {
'use strict';
  
  
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var itemAdder = this;
  itemAdder.shoppingList2 = ShoppingListService.shoppingList2;
  
  itemAdder.remove = function (itemIndex){
  ShoppingListService.remove(itemIndex)
 };
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
 var boughtItem = this;
  boughtItem.boughtList = ShoppingListService.getItems();
}

function ShoppingListService( ) {
  var service = this;
  
  
  service.shoppingList2 = [
  {
    "name": "Milk",
    "quantity": "2"
  },
  {
    "name": "Donuts",
    "quantity": "200"
  },
  {
    "name": "Cookies",
    "quantity": "300"
  },
   {
    "name": "Musli",
    "quantity": "10"
  },
  {
    "name": "Chocolate",
    "quantity": "5"
  }
];
	
    
 
service.bought = [];

	$scope.remove = function(items, shoppingList2, bought) {

        service.forEach(function(item) {
          var idx = from.indexOf(item);
          if (idx != -1) {
              shoppingList2.splice(idx, 1);
              bought.push(item);      
          }
    };

	service.getItems = function(){
		return bought;
	};
	
	
}
   
})();
