// Write a program to print out all Armstrong numbers between
// 1 and 500. If sum of cubes of each digit of the number is
// equal to the number itself, then the number is called an Armstrong number. 
// For example, 153 = ( 1 * 1 * 1 ) + ( 5 * 5* 5 ) + ( 3 * 3 * 3 )

let count = 1;
let reminder;
let sum = 0;
let num;

while (count <= 500) {

    num = count;
    while (num > 0) {
        reminder = num % 10;
        sum = sum + (reminder*reminder*reminder);
        num = num / 10;
    }
    if(count === sum){
        console.log(count)
    }
return 0;
}