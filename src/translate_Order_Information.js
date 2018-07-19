module.exports = function translate_Order_Information(inputIds, menuData) {
  let orderMenu = [];
  let locationX = [];

  for (let i = 0; i < inputIds.length; i++) {
    for (let j = 0; j < inputIds[i].length; j++) {
      if(inputIds[i][j] === 'x'){
        locationX.push(j);
      }
    }
  }

  for (let i = 0; i < inputIds.length; i++) {
    for (let j = 0; j < menuData.length; j++) {
      if(menuData[j]["id"] === inputIds[i].slice(0,locationX[i] - 1)){
        orderMenu[menuData[j]["name"]] = parseInt(inputIds[i].slice(locationX[i] + 2));
      }
    }
  }

  return orderMenu;
}

//split;
