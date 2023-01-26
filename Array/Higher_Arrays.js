// Map () function
let num = [57,24,47]
//console.log(num)

// let str = num.map((elemnt)=>{
//   console.log(elemnt) 
//   return elemnt*2
// })
// console.log(str)

// Map () makes new array 

// let cld = num.map((elmnt, index, array)=>{
//   console.log(elmnt , index, array)
//   return elmnt + 10
// })
//  console.log(cld)

// Filter method
let arr1 = [34,45,13,52,12,27,17]
// let acr = arr1.filter((value)=>{
//   return value > 20
// })
// console.log(acr)

// Reduce function

let arr3 = [3,5,6,2,9,3]
// let str3 = arr3.reduce((h1, h2)=>{
// return h1*h2
// })
// console.log(str3)

const reduce_func = (h1 , h2)=>{ // U can make function inside function
  return h1+h2
}
let func = arr3.reduce(reduce_func)
console.log(func)



