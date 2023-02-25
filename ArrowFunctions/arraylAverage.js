let arrayAverage = (arr) =>{
    let total =0;
    for(let number of arr){
        total += number;
    }
    return total / arr.length;
}
let ar = [1,5,9,12,0];
console.log(arrayAverage(ar))