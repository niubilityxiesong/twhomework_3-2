const loadAllItems = require('../src/items');
const loadPromotions = require('../src/promotions');

module.exports = function bestCharge(selectedItems) {
  console.log(loadAllItems());
  console.log(loadPromotions());
  return '1';
}
