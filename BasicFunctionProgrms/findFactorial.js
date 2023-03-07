// Write a program to find the factorial value of any number entered through the keyboard.

const findFactorial = (value,fact)=>{

fact = 1;
value = prompt("Enter any Number");

for(let i=1; i<=value;i++){
    fact = fact * i
}
return alert("The Factorial value of "+value+" is "+fact);
}
findFactorial();