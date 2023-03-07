const multiplyIFOdd = (arr) =>{
    let total = 1;
    for(let num of arr){
        if(num % 2 !== 0){
            total *= num;
        }
    }
    return total;
}
let newar = [1,8,5,3,11,9];
console.log(multiplyIFOdd(newar));