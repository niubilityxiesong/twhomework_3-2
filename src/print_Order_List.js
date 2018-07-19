module.exports = function print_Order_List(orderMenu, originPrice, discountMessage, discountName) {
  let resultList = '';
  let keyMenu = Object.keys(orderMenu);
  let keyPrice = Object.keys(originPrice);
  let keyMessage = Object.keys(discountMessage);
  let sumPrice = 0;
  for(let i in originPrice){
    sumPrice += originPrice[i];
  }

  resultList += "============= 订餐明细 =============\n"

  for (let i = 0; i < keyMenu.length; i++) {
    resultList += (keyMenu[i] + ' x ' + orderMenu[keyMenu[i]] + ' = ' + originPrice[keyPrice[i]] + '元');
    resultList += '\n';
  }
  resultList += '-----------------------------------\n';

  if(keyMessage[0] === "planA"){
    resultList += '使用优惠:\n';
    resultList += ('满30减6元，省' + (sumPrice - discountMessage["planA"]) + '元\n');
    resultList += '-----------------------------------\n';
    resultList += '总计：' + discountMessage['planA'] + '元\n';
  }

  if(keyMessage[0] === "planB"){
    resultList += '使用优惠:\n';
    resultList += ('指定菜品半价(' + discountName[0] + '，' + discountName[1] + ')，省' + (sumPrice - discountMessage["planB"]) + '元\n');
    resultList += '-----------------------------------\n';
    resultList += '总计：' + discountMessage['planB'] + '元\n';
  }

  if (keyMessage[0] === "none"){
    resultList += '总计：' + sumPrice + '元\n';
  }
  resultList += '===================================';
  return resultList;
}
