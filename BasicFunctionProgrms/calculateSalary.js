let basicSal = prompt("Enter Basic Salary");
let dearAllownce = basicSal/100*40;
alert("Your Dearness allowance is "+dearAllownce);

let houserentAllownce = basicSal/100*20;
alert("Your HouseRent allowance is "+houserentAllownce);
basicSal = (basicSal) + (dearAllownce) + (houserentAllownce);

 grossSal = basicSal;
alert("Your Gross Salary is "+grossSal);