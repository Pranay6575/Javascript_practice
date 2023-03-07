// The length & breadth of a rectangle and radius of a circle are
// input through the keyboard. Write a program to calculate the
// area & perimeter of the rectangle, and the area &
// circumference of the circle.


function findArea(){
let length = prompt("Enter Length");
let breadth = prompt("Enter Breadth");

let rectangleArea = (length * breadth);
alert(("Area is " + rectangleArea));

let perimeter = (2 * length + 2 * breadth);
alert(("Perimter is " + perimeter))

let radius = prompt("Enter Value of r")
let AreaCircle = (Math.PI) * radius * radius;
alert((AreaCircle + " This is Are of Circle"))

let cicumfernce = 2 * (Math.PI * radius)
alert((cicumfernce + " This is Circumfernce"))

}
findArea();