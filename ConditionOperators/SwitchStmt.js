const value = 'Apples';
switch(value){
    case"Oranges":
    console.log("Oranges are Rs. 150 per dozen");
    break;
    case"Mangoes":
    case"Apples":
    console.log("Mangoes & Apples are are 250/ kg")
    break;
  default:
    console.log("Sorry we are ou of {value} .");
}