// If cost price and selling price of an item is input through the
// keyboard, write a program to determine whether the seller has
// made profit or incurred loss. Also determine how much profit
// he made or loss he incurred.



function calculateProfit() {
  const sellPrice = prompt("Enter Sell-Price");
  const costPrice = prompt("Enter Cost-Price");
  const diff = sellPrice - costPrice;

  if (diff > 0) {
    return "It is a Profit of INR: " + diff;
  }
  else if (diff < 0) {
    return "It is a Loss of INR: " + Math.abs(diff);
  }
  else if (diff === 0) {
    return "It is No-Profit & No-Loss:"
  }
}
console.log(calculateProfit());






























  // let cp = prompt("Enter CP");
  // let  sp = prompt("Enter SP");
  // let  np = prompt("Enter NP");

  // let profit = (sp - cp)

  //   if(sp > cp){
  //   alert(("Your Profit is"+ profit));
  //   }
  //   else if(sp < cp){
  //   alert(("Your Loss is "+Math.abs(profit)));
  //   }





