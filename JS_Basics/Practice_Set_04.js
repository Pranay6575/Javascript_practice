// Practice Set 04 
// console.log("har\"".length)

let sentence = " The food there is never any good "
let check = "nevr"
console.log(sentence.includes(check))

let mother = "Everyone respects her and loves her"
let result = " loves"
console.log(mother.includes(result))

let school = " I go to school by bus"
 let con = "sool"
console.log(school.includes(con))

// Problem 3
let str1 = "I recieved Rs 5000"
let money = Number.parseInt(str1.slice(14))
console.log(money)
console.log(typeof money)