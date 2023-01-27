// // // // // Functions without value
// // // // const hello =()=>{
// // // //     console.log("What is your answer? My answer is also same")
// // // //   }

// // // //   // Function with value
// // // //   const pushpa =()=>{
// // // //     console.log("Hey Man")
// // // //     return "fire hai main"
// // // //   }

// // // //   // Sum program by function

// // // //   const sum = (j,k)=>{
// // // //     return j+k
// // // //   }

//   // Average programe by functon
//   function myfun(x , y){
//     console.log("Done")
//     return Math.round((x + y)/2)
//   }

//   let a = 10;
//   let b = 20;
//   let c = 5;
//   let v = pushpa();
//    hello();
//   console.log(sum(9,8))
//   console.log(v)
//   console.log("Average of a and b", myfun(a,b))
//   console.log("Average of b and c", myfun(b,c))
//   console.log("Average of a and c", myfun(a,c))

// *****************************************************************************************************************
// Prb 1. Write a JavaScript function to print the “Hello World” message

function showOutput(){
 console.log("Your Output is Here")
  return "My output"
}
showOutput();
 let inp = showOutput();
 console.log(inp)

 //Prb 2. Write a function that returns the square of a number

function findSquare(num) {
  return num * num;
}
let val1 = 2;
let val2 = 9;
let val3 = 13;
let val4 = 18;
console.log("The Square of Val1 is " + findSquare(val1))
console.log("The Square of Val2 is " + findSquare(val2))
console.log("The Square of Val3 is " + findSquare(val3))
console.log("The Square of Val4 is " + findSquare(val4))

// Prb.3. Write a function to convert Celsius to Fahrenheit

function celFarenheit(cel){
  return (cel * 9/5)+32
}
let cel1 = 52;
let cel2 = 35;
let cel3 = 47;
 console.log("The Conversion of cel1 to farenheit is "+ celFarenheit(cel1))
console.log("The Conversion of cel2 to farenheit is "+ celFarenheit(cel2))
console.log("The Conversion of cel3 to farenheit is "+ celFarenheit(cel3))

//Prb.4. Write a function to find the area of a given Rectangle

function rectangleArea(inp1 , inp2){
  return inp1 * inp2;
}
console.log("The Area of Rectangles is "+ rectangleArea(15 , 25))

//Prb 5. Write a function to find the area and perimeter of a Circle

function findArea(radius){
return Math.PI* radius
}
let num1 = 35;
console.log("The Area of a Circle is "+findArea(num1))

function findPermieter(radius){
  return 2*Math.PI*radius
}
let num2 = 44;
console.log("The Parameter of Circle is "+findPermieter(num2))

// Prb 6. Write a function to reverse a number

function reverseNumber(digit){
  var reverse = 0;
  while(digit !=0){
    reverse = reverse * 10;
    reverse = reverse + digit%10;
    digit = Math.trunc(digit/10)
  }
  return reverse
}
console.log(reverseNumber(7458));
console.log(reverseNumber(3031));

// Prb 7. Count number of Vowels in String

function countVowel(str) {
  let count = 0;
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      count++;
    }
  }
  return count;
}

console.log(countVowel("MyProgram"));
console.log(countVowel("Codertrick"));


// Prb. 8. Flatten array of arrays using JavaScript reduce

let message = ["Java","Script ", "is ", "Programming ", "Language "]
function FlattenArray(accumlator, currentvalue){
  return (accumlator + currentvalue)
}
let arr = message.reduce(FlattenArray);
console.log(arr);

let msg1 = [["10","11"],["12","13"],["14","15"]]
function joinArray(acc, currnt){
  return (acc.concat(currnt))
}
let arr2 = msg1.reduce(joinArray)
console.log(arr2)

// Prb 9. Write a function to check if an input string is a palindrome

function PalinDrome(strings){
  for(let i = 0; i< strings.length; i++){
    if(strings.charAt(i)!=charAt(strings.length-i-1)){
      return false;
    }
  } 
  return true;
  } 
console.log(PalinDrome("Trilogy"));
console.log(PalinDrome("Rotator"));
console.log(PalinDrome("Repaper"));

// Prb.10. Write a function to calculate simple interest based on the principle amount

function SimpleIntrest(principle, rate, time){
  let finalamt = principle*(1+ rate*time)
  return finalamt;
}

console.log("Your SI is "+ SimpleIntrest(15000,3,2));
console.log("Your SI is "+ SimpleIntrest(10000,5,3));
console.log("Your SI is "+ SimpleIntrest(25000,4,3));

//Prb.11. Write a function to calculate compound interest based on the principle amount

function CompoundInt(principle,rate,n,time){
  let finalamount = principle *(Math.pow((1+(rate/n)), (n*time)))
  return finalamount
}
console.log("You Compound Intrest is. "+ CompoundInt(12000,5,4,3))

// Prob.13. Write a function to find Factorial of a number
function getFactorial(number){
  if(number==1){
    return 1;
  }
  if(number==0 || number<0){
    return 0;
  }
  
    return number * getFactorial(number-1);
  }
  console.log(getFactorial(5))
  console.log(getFactorial(1))
  console.log(getFactorial(10))

// Prob.14. Write a function to add unlimited numbers

let list = [21,54,84,66,10,54]
let sum = list.reduce(function(num1, num2){
  return num1 + num2
})
console.log("The addition of all numbers "+sum)

                       OR
function AddnewNumbers(first, end){       
  return first+end                          // Not possible for unlimited value a
}
console.log(AddnewNumbers(55,88))

