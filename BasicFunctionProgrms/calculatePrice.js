// If the total selling price of 15 items and the total profit earned on them is input through the keyboard,
// write a program to find the cost price of one item.

function calculatePrice(sellPrice, profit) {
    sellPrice = prompt("Enter Selling Price")
    profit = prompt("Enter Profit ")
    let items = 15;

    let cost = sellPrice - profit;
    alert("A Price of Each item is : " + cost / items);
}
calculatePrice();