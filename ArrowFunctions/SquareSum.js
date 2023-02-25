let nums = [2,4,5]
const squareSum = nums.reduce((len , num) => len + num * num,0)
    let findAvg = squareSum / nums.length;
    console.log(findAvg);


