const loadAllItems = require('../src/items');
const loadPromotions = require('../src/promotions');
const translate_Order_Information = require('../src/translate_Order_Information');
const origin_Every_Price = require('../src/origin_Every_Price');
const lowest_Price_Programme = require('../src/lowest_Price_Programme');


module.exports = function bestCharge(selectedItems) {

  let menuData = loadAllItems();
  let discountData = loadPromotions();
  let orderMenu = [];
  let originPrice = [];
  let discountMessage =[];
  let orderList = '';

  orderMenu = translate_Order_Information(selectedItems, menuData);
  originPrice = origin_Every_Price(orderMenu, menuData);
  discountMessage = lowest_Price_Programme(discountData[1]["items"], originPrice);
  orderList = print_Order_List(orderMenu, originPrice, discountMessage);

  return orderList;

}

