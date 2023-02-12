//The map() method creates a new array populated with the results of calling

// let arr1 = [2,4,6,8,10,12]
// let newArr = arr1.map(x => x*2)
// console.log(newArr);

// Multiply all the values in an array with 10:

// let values =[1,5,10,15,20,25];
// let newValues = values.map(x => x *10);
// console.log(newValues);

//Prb. 1 

// const players = [
//     {firstname : "David", lastname: "Malan"},
//     {firstname: "Joe", lastname: "Root"},
//     {firstname: "Michael", lastname: "Jordan"}

// ];

// players.map(getfullName);

// function getfullName(element){
//     return  [element.firstname, element.lastname].join(" ");
// }

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

//   persons.map(getFullName);

//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }

// Prb .2 
// let numbers = [20,40,60,80]
// let newMap = numbers.map((value, index, array)=>{
//   console.log(value, index, array)
//   return value *2;
// })
// console.log(newMap);

// Prb. 3

// let empName = ["Aryan", "Kumar","Devajit"];
// let newName = empName.map((first)=>{
// console.log(first + " Is the best employees");
// return first     // Without return it cannot shows on console.
// })
// console.log((newName.join(" & ")));

// Prb 4) Make an array of numbers that are doubles of the first array

// function doubleNumbers(arr){
//   return arr.map(arr => arr*2);
// }
// console.log(doubleNumbers([5,10,200]))

// // Prb . 5) Take an array of numbers and make them strings
// function StringitUp(str){
//     return str.map(str => str+" ")
// }
// console.log(StringitUp([50,100,150]))

// //Prb . 6) Make an array of strings of the names
// function namesOnly(arr){
//   // your code here
//   return (arr.map(arr => arr.name, arr.age))
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 

// ================================================================================================================

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// prb 1) Find the numbers in an array 

// let arr1 = [45,25,15,11,23,27];
// let newArr=  arr1.filter((value) => {
//     return value<30;
//   })
//   console.log(newArr)

// // Prb . 2)
//  let ages = [18,25,14,22,45,33];
//  let result = ages.filter(checkAdult);

//  function checkAdult(age){
//     return age >=18;
//  }
// console.log(result)

// Prb 3) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// let numbrs = [7,10,8,2,1,5,40];
// let newNumbrs = numbrs.filter(GreatrNumb);

// function GreatrNumb(number){
//     return number >=5
// }
// console.log(newNumbrs)

// Prb. 4)  Given an array of numbers, return a new array that only includes the even numbers.

// let num1 = [3,6,8,5,2,4];
// let num2 = num1.filter(checkEven);

// function checkEven(digit){
//     return digit%2 ===0;
// }
// console.log(num2);

// Prb 5.) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// const fishes = ["Flipper","Sykes","Leny","Oscar","Salmon"];
// const fishName = fishes.filter(checkLength);

// function checkLength(str){
//     return str.length >= 5;
// }
// console.log(fishName);

// Prb .6) Given an array of people objects, return a new array that has filtered out all those 
// who don't belong to the club.

// const members = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]
// const member2 = members.filter(clubMember)

// function clubMember(emp){
//     return (emp.name, emp.member === true)
// }
// console.log(member2)

// Prb. 7 Check the values of an array and return the values of in a new array if they are multiplies of 2.

// const numb = ["20","10","11","23","33","50"]
// const NewNumb = numb.filter(modulsuFunc);

// function modulsuFunc(inp){
//     return inp % 2 ==0;
// }
// console.log(NewNumb)

// ===============================================================================================================

//  The reduce() method executes a reducer function for array element.
//The reduce() method returns a single value: the function's accumulated result.
//The reduce() method does not execute the function for empty array elements.

// Prb. 1) Turn an array of numbers into a total of all the numbers

// let values = [11,22,33,44,55,00]
// const add_Reduce = (num1,num2)=>{
//     return num1 + num2;
// }
// let newValues = values.reduce(add_Reduce);
// console.log(newValues);

// Prb. 2) Turn an array of numbers into a long string of all those numbers.

// let digits = [4,6,8,10,2];
// const long_String = (h1,h2) => {
//     return h1+h2;
// }
// let newDigits = digits.reduce(long_String);
// console.log(newDigits);

// Prb.  3) Subtract all numbers in an array:

// let numbers = [44,10,5,2,0,6];
// let newNumbers = numbers.reduce(subtract_num)
// function subtract_num(num1,num2){
// return num1 - num2;
// }
// console.log(newNumbers);

// Prb .4) Round all the numbers and display the sum in a new array:

// let decimal = [44.2,55.5,22.2,33.78,11.41];
// let newDecimal = decimal.reduce(roundall_Numbers) // OR else we can use 0 as an arguments in reduce Function.
// function roundall_Numbers(n1, n2){
//     return Math.round(n1) + Math.round(n2);
// }
// console.log(newDecimal);

// Prb. 5) Find the lowest number by using the reduce-function

// let values = [22,55,101,78,4,66];
// let newValues = values.reduce(lowest_Number);
// function lowest_Number(h1 , h2){
//     return Math.min(h1) < Math.min(h2);
// }
// console.log(newValues);



