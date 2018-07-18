module.exports = function origin_Every_Price(orderMenu, menuData) {
  let originPrice = [];
  let keyName = Object.keys(orderMenu);

  console.log(keyName);
  for (let i = 0; i < keyName.length; i++) {
    for (let j = 0; j < menuData.length; j++) {
      if(keyName[i] === menuData[j]["name"]){
        originPrice.push(parseInt(menuData[j]["price"]) * orderMenu[keyName[i]]);
      }
    }
  }

  return originPrice;
}
