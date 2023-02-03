// // //Prob 1. Check if a number is odd or even in JavaScript
// // // function checkOddeven(num){
// // //     if(num%2==0){
// // //         console.log(`${num} is the Even Number`)
// // //     }
// // //     else{
// // //         console.log(`${num} is the odd Number`)
// // //     }
// // // }
// // // (checkOddeven(55));

// // // Prob.2. Check if input variable is a number or not
// // // function Notnumber(digit){
// // //     if(isNaN(digit)){
// // //         console.log(`${digit} it is Not a Number`)
// // //     }
// // //     else{
// // //         console.log(`${digit} is the NUmber`)
// // //     }
// // // }
// // // Notnumber(78)
// // // Notnumber("Syntax")
// // // Notnumber(45)
// // // Notnumber("xyz")

// // //Prb. 3. Find the largest of two number
// function LargeNumber(num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} is the Largest Number`)
//     }
//     else if (num1 < num2) {
//         console.log(`${num2} is the Largest Number`)
//     }
//     else {
//         console.log("Both Numbers are Equal")
//     }
// }
// LargeNumber(42, 48)
// LargeNumber(78, 100)
// LargeNumber(425, 418)

// Prb 5. Check if a triangle is equilateral, scalene, or isosceles
// function findTriangle(side1 , side2, side3){
//     if(side1 == side2 && side1 == side3){
//         console.log("The type is Equilateral Triangle")
//     }
//     else if(side1 == side2 || side2 == side3){
//         console.log("The type is Isosceles Triangle")
//     }
//     else{
//         console.log("The type is Scalene Triangle")
//     }
// }
// findTriangle(45,55,60);
// findTriangle(40,60,60);
// findTriangle(35,35,35);
// Prb 6. Find the a number is present in given range

// function RangeNumber(num1, first, last) {
//     if (num1 >= first && num1 <= last) {
//         console.log(`${num1} is in range of ${first} to ${last}`)
//     }
//     else {
//         console.log(`${num1} is the out of Range`)
//     }
// }
// RangeNumber(45, 40, 50)
// RangeNumber(115, 100, 150)
// RangeNumber(245, 200, 250)
// RangeNumber(245, 500, 550)

// Prb. 7. Perform arithmetic operations on two numbers

// function solveMath(inp1, inp2, opr){
//     if(opr == "add"){
//         console.log(`The addition of ${inp1} and ${inp2} is  ${inp1 + inp2}`)
//     }
//     else if(opr == "sub"){
//         console.log(`The Subtraction of ${inp1} and  ${inp2} is ${inp1-inp2}`)
//     }
//     else if(opr == "mult"){
//         console.log(`The Multiplication of ${inp1} and  ${inp2} is ${inp1*inp2}`)
//     }
//     else if(opr == "div"){
//         console.log(`The Division of ${inp1} and  ${inp2} is ${inp1/inp2}`)
//     }
//     else if(opr == "modulus"){
//         console.log(`The Modulus of ${inp1} and  ${inp2} is ${inp1%inp2}`)
//     }
//     else{
//         console.log("Given inputs are Invalid")
//     }
// }
// solveMath(45,54,"add");
// solveMath(65,54,"sub");
// solveMath(45,54,"mult");
// solveMath(45,4,"div");
// solveMath(45,2,"modulus");









