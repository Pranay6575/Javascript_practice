// Write a program to find the range of a set of numbers. Range is the difference between 
// the smallest and biggest number on the list.

function rangeNumber(num, max, min, range, count) {
     num = prompt("Enter number");
    count = 
    max;
    min;
    range;

    for (let i = 1; i < count; i++) {
        if(num > max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }
    range =max -min;
    return  console.log("The range of number is "+range)
   
}
rangeNumber();