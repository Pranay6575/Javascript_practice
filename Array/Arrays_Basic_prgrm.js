// Prb, 1 Write a JavaScript function to check whether an 'input' is an array or not.

// function is_Array(input){
//     if(toString.call(input) == "[object Array]")
//     return true;
//     return false;
// }
// console.log(is_Array(['innovative'])) ; 
// console.log(is_Array(['45781296'])) ; 

// Prob. 2 Write a JavaScript function to clone an array.
// let cloneArray = [4,6,8,10,12,14]
// console.log(cloneArray);
// console.log("Above is the Original Array");
// let newClone = Array.from(cloneArray);
// console.log("Below is the Clone Array")
// console.log(newClone)

// Prb 3 Write a JavaScript function to get the first element of an array. 
//       Passing a parameter 'n' will return the first 'n' elements of the array.

// function removeItems(array , n){
//     if (array == null)
//     return 0;
//     if(n == null)
//     return array[0]
//     if(n < 0)
//     return []
//     return array.slice(0,n)
// };

// console.log(removeItems([4,48,8,88,10],-1))
// console.log(removeItems([45,52,11,80,101],2))
// console.log(removeItems(["Cat","Dog","Horse","MOnkey","Snake"],3))

// Prb 4. Write a simple JavaScript program to join all elements of the following array into a string.
// function joinArray(inp){
//     return joinArray.join();
// }
// console.log("Car","Truck","Plane","Jet","Train")
                // OR
//   let CompanyArray= ["Infosys","IBM","Capgemini","JP Morgan","M Stanley"]
//   console.log(CompanyArray)
//   console.log(CompanyArray.join())
//   console.log(CompanyArray.join(" + "))

// Prb 5.  Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 

// const num = window.prompt("Enter Numb");
// const str =num.toString();
// const result = [str[0]];

// for(let i=1; i<str.length; i++){
//     if((str[i-1]%2 ==0) && (str[i]%2 == 0)){
//         result.push('-')
//     }
//     else
//     {
//         result.push(str[i]);
//     }
// }
// console.log(result.join(''))

// Prob. 6 How would you remove and return the last element from an array in JavaScript
// let banks = ["Deutch","Citi","Yes","Doyce"]
// banks.pop();
// console.log(banks)
