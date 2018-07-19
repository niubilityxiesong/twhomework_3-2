module.exports = function get_Discount_Name(originPrice, discountData, menuData) {

  let discountName = [];
  let discountId = [];
  let keyMessage = Object.keys(originPrice);


  for (let i = 0; i < keyMessage.length; i++) {
    if(discountData.indexOf(keyMessage[i]) != -1){
      discountId.push(keyMessage[i]);
    }
  }

  for (let i = 0; i < discountId.length; i++) {
    for (let j = 0; j < menuData.length; j++) {
      if(menuData[j]["id"] === discountId[i]){
        discountName.push(menuData[j]["name"]);
      }
    }
  }
  return discountName;
}
