module.exports = function lowest_Price_Programme(discountData, originPrice) {
  let keyPrice = Object.keys(originPrice);
  let sumPrice = 0;
  for(let i in originPrice){
    sumPrice += originPrice[i];
  }
  let have30RMB = Math.floor(sumPrice / 30);
  let planA = 0;
  let planB = 0;
  let discountMessage = [];

  if(have30RMB != 0){
    planA = 6 * have30RMB;
  }

  for (let i = 0; i < keyPrice.length; i++) {
    if(discountData.indexOf(keyPrice[i]) != -1){
      planB += (originPrice[keyPrice[i]] / 2);
    }
  }



  if(planA === 0 && planB === 0){
    discountMessage["none"] = sumPrice;
  }
  else if(planA > planB){
    discountMessage["planA"] = sumPrice - planA;
  }
  else {
    discountMessage["planB"] = sumPrice - planB
  }
  return discountMessage;
}
