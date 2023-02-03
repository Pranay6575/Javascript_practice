//Problm 1. Write a JavaScript function to check whether a string is blank or not. 
// function Isblank(input){
//     if(input.length ==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(Isblank('xyz'))
// console.log(Isblank(""))

// //Problem 2.Write a JavaScript function to split a string and convert it into an array of words.
// let str_method = function(input){
//     return str_method.split("")
// }
// console.log(str_method("Tech Mahindra"))

//Prob 3. Write a JavaScript function to capitalize the first letter of a string.
// function capitalFirst(inp){
//     return inp.charAt(0).toUpperCase() + inp.slice(1)
// }
// console.log(capitalFirst("javascript is the best language"))   // This is the inp value

//Prob 4. Write a JavaScript function to capitalize the first letter of each word in a string.
// let myWords="we love javascript";
//     let words = myWords.split(" ");

//     for(let i =0; i<words.length; i++){
//         words [i] = words [i] [0].toUpperCase() +  words[i].substring[1]
// }
// words.join(" ");

// Prob. 5 Complete the function that receives as input a string, and produces outputs 
//according to the following table:



// function produceNew(word){
//     if(word == "Jabroni"){
//         return "Patron Tequila"
//     }
//     else if(word == "School Counselor"){
//     return "School Counselor"
//     }
//     else if(word == "Programmer"){
//     return "Hipster Craft Beer"
//     }
//     else if(word == "Bike Gang Member"){
//     return "Moonshine"
//     }
//     else if(word == "Politician"){
//     return "Your tax dollars"
//     }
//     else if(word == "Rapper"){
//     return "Cristal"
//     }
//     else{
//         return "Beer"
//     }
// }

// console.log(produceNew("Polihbfjr"))

// Prob 6 Write a function that returns a sequence (index begins with 1) of all the even characters from a string. 
//If the string is smaller than two characters or longer than 100 characters, the function should return “invalid string”.

// function CheckString(str1){
//     if(Str1.length < 2 || str1.length >100 ){
//         return "Invalid String"
//     }
//     let evenIndex = []
// }

//Prob 7

// function evenChars2(string) {
//     return (string.length < 2 || string.length > 100 ? "invalid string" : [...string].filter((char, index) => index % 2)
//     );
//   }
  
//   console.log(evenChars2("abcdefghijklm")); // ["b", "d", "f", "h", "j", "l"]
//   console.log(evenChars2("a")); // "invalid string"

// Prb 8. Return the number (count) of vowels in the given string.
// function letCount(strng){
//     let vowelcount = 0;
//     let vowels = ["a","e","i","o","u"]

//     for(let char of strng){
//         if(vowels.includes(char)){
//             vowelcount++
//         }
//     }
//     return vowelcount;
// }
// console.log(letCount("perfect english"))

//Prb. 10 Write a JavaScript function to humanized number (Formats a number to a human-readable string.) 
// //        with the correct suffix such as 1st, 2nd, 3rd or 4th.
// function suffixNo(num){
//     let n1 = num % 10
//     let n2 = num % 11
//     if(n1 == 1 && n2 != 11){
//         return num + "st"
//     }
//     if(n1 == 2 && n2 != 12){
//         return num + "nd"
//     }
//     if(n1 == 3 && n2 != 13){
//         return num + "rd"
//     }
//     return num + "th"
// }
// console.log(suffixNo(662))
// console.log(suffixNo(154))
// console.log(suffixNo(205))
// console.log(suffixNo(211))