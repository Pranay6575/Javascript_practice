//Problem 1
let items = {
    Powder: 70,
    Cream: 120,
    Handwash: 100,
    Clothes: 400
  }
  
  for (let i = 0; i < Object.keys(items).length; i++) {
    console.log("The price of " + Object.keys(items)[i] + " are " + items[Object.keys(items)[i]])
  }
  
  //Problem 2
  
  for (let i in items) {
    console.log("The  price of " + i + " are " + items[i])
  }
  
  //Problem 3
  
  let rn = 70;
  let i
  while (i != rn) {
    i = prompt("Enter the Number")
    console.log("Sorry! Try again... ):")
  }
  console.log("You have enter a Right Number");
  
  //Problem 4
  
  const mean = (a, b , c, d) =>{
    return (a+b+c+d)/4
  }
  
  console.log(mean(4,5,9,97))
  