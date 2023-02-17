let age = prompt("Whats Your age");
age = Number.parseInt(age);
if(age < 0){
  alert("This an Invalid Age")
}
else if(age < 9){
  alert("You cant even think of driving dude")
}
else if(age < 18 && age >=9){
  alert("You can even think of driving after completing 18+")
}
else if(age > 18){
  alert("You Age is Perfect and Now You are  an Adult")
}