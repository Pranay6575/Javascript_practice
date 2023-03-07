// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the  withdrawer.


function findCurrency(){
let inputCash = prompt("Enter Amount in Hundred ")

let TenDenomination = inputCash / 10;
let FiftyDenomination = inputCash / 50;
let HundredDenomination = inputCash / 100;

alert("Total Notes of Rs.10 will be "+TenDenomination);
alert("Total Notes of Rs.50 will be "+FiftyDenomination);
alert("Total Notes of Rs.100 will be "+HundredDenomination);
}
findCurrency();