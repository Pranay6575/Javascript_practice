// Two numbers are entered through the keyboard. Write a
// program to find the value of one number raised to the power of another.

const findPower = (num1,num2)=>{
    num1 = prompt("Enter Number 1");
    num2 = prompt("Enter Number 2");
    let result = Math.pow(num1,num2);
    return alert("The value of power of another number is "+ result)
}
findPower();