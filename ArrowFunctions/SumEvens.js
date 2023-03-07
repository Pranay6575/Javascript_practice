const evenSum = (arr)=>{
    let sum = 0;
    for(let num of arr){
        if(num % 2 ===0){
            sum += num;
        }
    }
    return sum;
}
let values = [2,0,5,6,7,4];
console.log(evenSum(values))