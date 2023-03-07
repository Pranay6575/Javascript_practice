// Temperature of a city in Fahrenheit degrees is input through
// the keyboard. Write a program to convert this temperature
// into Centigrade degrees.

function findTemprature(){
let Fahrenheit = prompt("Enter Temprature here");
let Celcius = (Fahrenheit-32)/1.8;

alert((Celcius+" Degree Celcius"));
}
findTemprature();