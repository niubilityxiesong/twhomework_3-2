const loadAllItems = require('../src/items');
const loadPromotions = require('../src/promotions');
const translate_Order_Information = require('../src/translate_Order_Information');
const origin_Every_Price = require('../src/origin_Every_Price');
const lowest_Price_Programme = require('../src/lowest_Price_Programme');
const print_Order_List = require('../src/print_Order_List');
const get_Discount_Name = require('../src/get_discount_name');


module.exports = function bestCharge(selectedItems) {

  let menuData = loadAllItems();
  let discountData = loadPromotions();
  let orderMenu = [];
  let originPrice = [];
  let discountMessage =[];
  let discountName = [];
  let orderList = '';

  orderMenu = translate_Order_Information(selectedItems, menuData);
  originPrice = origin_Every_Price(orderMenu, menuData);
  discountMessage = lowest_Price_Programme(discountData[1]["items"], originPrice);
  discountName = get_Discount_Name(originPrice, discountData[1]["items"], menuData);
  orderList += print_Order_List(orderMenu, originPrice, discountMessage, discountName);

  console.log(orderList);
  return orderList;

}

