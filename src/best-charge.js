const loadAllItems = require('../src/items');
const loadPromotions = require('../src/promotions');
const translate_Order_Information = require('../src/translate_Order_Information');
const origin_Every_Price = require('../src/origin_Every_Price');


module.exports = function bestCharge(selectedItems) {

  let menuData = loadAllItems();
  let discountData = loadPromotions();
  let orderMenu = [];
  let originPrice = [];

  orderMenu = translate_Order_Information(selectedItems, menuData);
  originPrice = origin_Every_Price(orderMenu, menuData);

  return '11';

}

