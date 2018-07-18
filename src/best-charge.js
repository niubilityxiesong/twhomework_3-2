const loadAllItems = require('../src/items');
const loadPromotions = require('../src/promotions');
const translate_Order_Information = require('../src/translate_Order_Information')

module.exports = function bestCharge(selectedItems) {

  let menuData = loadAllItems();
  let discountData = loadPromotions();
  let orderMenu = [];

  orderMenu = translate_Order_Information(selectedItems);

  return '11';

}

