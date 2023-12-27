(function () {
'use strict';
//var shoppingList1 = [{name:"Pasta", Quantity: "7"},{name:"Burger", Quantity: "5"}, {name:"Pizza",Quantity:"4" } , {name:"Cookies",Quantity:"7" }, {name:"Chocolate",Quantity:"9" }]

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var itemAdder = this;
var counter=0;

  ShoppingListService.inisiateArr() ;
  itemAdder.items = ShoppingListService.getItems();


itemAdder.addToList = function (itemIndex) {
counter= counter +1;

  ShoppingListService.removeItem(itemIndex);

itemAdder.itemsL =ShoppingListService.getItemsL();
if(itemAdder.itemsL === 0)
itemAdder.message1= true;

};


}


AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
   var showList = this;
  //
  // showList.items = ShoppingListService.getItems();
  //
  // showList.removeItem = function (itemIndex) {
  //   ShoppingListService.removeItem(itemIndex);
  // };

    showList.boughts = ShoppingListService.getItemsb();

showList.boughtsL = ShoppingListService.boughtsL;

}



function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [];

var boughts = [];

var itemsL=5;
var boughtsL =true;



service.inisiateArr = function(){
service.addItem("Pasta", "6");
service.addItem("Burger", "11");
service.addItem("Pizza","9");
service.addItem("Cookie","7");
service.addItem("Chocolate","4");
};



  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.addItemb = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughts.push(item);
  };

  service.removeItem = function (itemIndex) {

var arr = [];
arr =   service.getItems() ;
    var item = {
      name: arr[itemIndex].name,
      quantity: arr[itemIndex].quantity
    };
    boughts.push(item);

    items.splice(itemIndex, 1);

itemsL= itemsL-1;
// if(itemsL === 0)
boughtsL=false;

  };

  service.getItems = function () {
    return items;
  };

  service.getItemsL = function () {
    return itemsL;
  };

  service.getItemsb = function () {
    return boughts;
  };



}

})();
