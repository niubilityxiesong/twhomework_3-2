module.exports = function origin_Every_Price(orderMenu, menuData) {
  let originPrice = [];
  let keyName = Object.keys(orderMenu);

  for (let i = 0; i < keyName.length; i++) {
    for (let j = 0; j < menuData.length; j++) {
      if(keyName[i] === menuData[j]["name"]){
        originPrice[menuData[j]["id"]] = (parseInt(menuData[j]["price"]) * orderMenu[keyName[i]]);
      }
    }
  }

  return originPrice;
}
