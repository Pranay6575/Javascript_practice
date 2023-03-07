// Ramesh’s basic salary is input through the keyboard. His
// dearness allowance is 40% of basic salary, and house rent, allowance is 20% of basic salary.
 //Write a program to calculate his gross salary

 function calculateSalary(basicSalary,dearAllownce){
basicSalary = prompt("Enter Basic Salary");
 dearAllownce = (basicSalary)/100*40;
alert("Your Dearness allowance is "+dearAllownce);

let houserentAllownce = basicSalary/100*20;
alert("Your HouseRent allowance is "+(houserentAllownce));
basicSalary = (basicSalary) + (dearAllownce) + (houserentAllownce);

let grossSal = basicSalary;
alert("Your Gross Salary is "+(grossSal));
 }
 calculateSalary();