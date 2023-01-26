let a = prompt("Whats Your age");
a = Number.parseInt(a);
if(a < 0){
  alert("This an Invalid Age")
}
else if(a < 9){
  alert("You cant even think of driving dude")
}
else if(a < 18 && a >=9){
  alert("You can even think of driving after completing 18+")
}
else if(a > 18){
  alert("You Age is Perfect and Now You are  an Adult")
}

//////////////////////////////////////////////////////////////////////////

// Problem On Ternary Opeartors

const expr = 'Apples';
switch(expr){
    case"Oranges":
    console.log("Oranges are Rs. 150 per dozen");
    break;
    case"Mangoes":
    case"Apples":
    console.log("Mangoes & Apples are are 250/ kg")
    break;
  default:
    console.log("Sorry we are ou of {expr} .");
}
  