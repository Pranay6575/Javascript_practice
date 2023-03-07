// The policy followed by a company to process customer orders
// is given by the following rules:
// (a) If a customer order is less than or equal to that in stock
// and has credit is OK, supply has requirement.
// (b) If has credit is not OK do not supply. Send him
// intimation.
// (c) If has credit is Ok but the item in stock is less than has
// order, supply what is in stock. Intimate to him data the
// balance will be shipped.
// Write a program to implement the company policy.



function supplyStock(customrOrder, limit) {
    let customrOrder = 20;
    let limit = 2000000;
    let totalStock = 1000;
    let unitPrice = 15000;

    let totalorderPrice = unitPrice * customrOrder;

    if (customrOrder <= totalStock) {
        if (limit > totalorderPrice) {

            totalStock = totalStock - customrOrder;
            limit = limit - totalorderPrice;    // 1st Condition
        }
        else {
            console.log("Sorry We are unable to place your order")   // 2nd condition 
        }
    }
    if (customrOrder > totalStock) {
        console.log("Order Demand: " + customrOrder + "is greater than our stock: " + totalStock + "hence only " + totalStock + "will be supplied and remaining :" + (customrOrder - totalStock))
        totalStock = totalStock - customrOrder;
        limit = limit - totalorderPrice;
    }
    else {
        console.log("Order Demand: " + customrOrder + "is greater than our stock: " + totalStock + "as well as insufficient credit limit is: " + limit)
    }
}
console.log(supplyStock())
















