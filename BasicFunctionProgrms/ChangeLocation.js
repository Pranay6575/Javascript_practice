// Two numbers are input through the keyboard into two
// locations C and D. Write a program to interchange the
// contents of C and D.


var c =  prompt("Enter Value C");
var d =  prompt("Enter Value D");

var temp = c
c = d;
d = temp;
alert("The Value of C = "+c)
alert("The Value of D = "+d);