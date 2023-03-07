// Write a program to enter the numbers till the user wants and
// at the end it should display the count of positive, negative and
// zeros entered.

let positive = 0
let negative = 0;
let zero = 0;

let arr = [500];

let num = prompt("Enter A Number:")

for (let i = 0; i < num; i++) {
    arr[i]
}
for (let i = 0; i < num; i++) {
    if (arr[i] > 0) {
        positive++;
    }
    else if(arr[i]<0){
        negative++;
    }
    else if(arr[i] ===0){
        zero++
    }
    else{
        console.log("Wrong Input")
        break;
    }
}
console.log(positive)
console.log(negative)
console.log(zero)

