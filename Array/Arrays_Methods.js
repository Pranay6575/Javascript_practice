//                   An array is a special variable, which can hold more than one value...!

//for example - 
//let cars = ["Volvo","Suzuki","Honda","Audi"]

// You access an array element by referring to the index number:
// const cars = ["Volvo" , "BMW", "MG", "Ford"]
// let car = cars[1];
// console.log(car)

// This statement changes the value of the first element in cars
// const cars = ["Volvo" , "BMW", "MG", "Ford"]
// cars[2] ="Mercedes"
// console.log(cars)

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// const employee = ["worker", "operator","Auditor","Helper"]
// console.log(typeof(employee))

// Objects use names to access its "members". In this example, person.firstName returns John
// const person = {firstName:"David",lastName:"Philips",age:47}
// console.log(person)

// myArray[0] = Date.now
// myArray[1] = myFunction;
// myArray[2] = myCars;

// The length Proerty
// The length property of an array returns the length of an array (the number of array elements).

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// let fruit = fruits.length
// console.log(fruit);

//How to accessing the last element
// const banks = ["Hdfc","Sbi","RBl","Std chant","Axis"]
// let bank = banks[banks.length-1];
// console.log(bank)

// Looping Array Elements
// const countries = ["Norway","Canada","Singapore","Malasia"]
// countries.forEach(function(countries){
// console.log(countries)
// })

//
// const banks = ["Hdfc","Sbi","RBl","Std chant","Axis"]
// for(let i =1; i<banks.length; i++){
//     console.log(banks[i])
// }

// The easiest way to add a new element to an array is using the push() method:
// const countries = ["Norway","Canada","Singapore","Malasia"]
// countries.push("United Kingdom") // Adds new element (UK) in to countries
// console.log(countries)

// New element can also be added to an array using the length property:
// const vegies =["Beans","Brocoli","Brinjal"]
// vegies[vegies.length] = "Tomato"
// console.log(vegies)

// const devices = ["Earphone","Mobile","Printer"]
// devices.push("Laptop")
// console.log(devices)

// const games = ["Cricket","FootBall","Tennis","Swimming"];
// games[6]= "Hockey"
// console.log(games)

// WHen to use Objects and Numbers 
// const people = {Job:"Auditor",Dept:"E-com",Years:"3 yr"}
// console.log(people.Job)

// JavaScript, arrays use numbered indexes.
// let online = [];
// online ["rating"] = "Five Stars";
// online ["Feedback"] = "Excellent";
// online ["Filter"] = "Low to High";
// online ["Payment"] = "Debit/Credit";

// console.log(online.rating)
// Arrays to String Conversion using toString()

// let techCompny = ["Google", "HP", "Dell","Samsung"];
// techCompny= techCompny.toString();
// console.log(techCompny)

// Join Method 
// let shopSites = ["Amazon" , "Flipkart", "Myntra","BlinkIt","JioMart"]
// let newSites = shopSites.join("-")
// console.log(newSites)

// Pop Method 
// let fontStyle = ["Devnagri" ,"Italian","Bold","Calibri","Axial"]
//  fontStyle =  fontStyle.pop();
//  console.log(fontStyle)

//Push Method 
// let searchEngine = ["Google","Safari","Yahoo","Bing"]
// let length = searchEngine.push("Onion");
// console.log(searchEngine)

// let cities =["Newyork","Mumbai","LasVegas","Torranto"]
// let newCities= cities.push("Berlin")
// console.log(cities)

// Shift() is bit similar of pop() that it removes 1st item instead of last
// let fruit = ["Dragonfruit","Watermelon","Avacado","Papaya"]
// console.log(fruit.shift());

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// let animal = ["Cat","Dog","Tiger","Monkey"]
// animal.unshift("Horse");
// console.log(animal)

// let firstName = ["Michael","James","David","Albert"]
// let surName = ["Jakson","Sponser","Mills","Roziki"]
// let merge = firstName.concat(surName)
// console.log(merge)

// Slicing method is used to Join or Add new elements and also if you want delete items
// let autoMobiles = ["Volkwagen","Skoda","Suzuki","Peigon","Renualt","Kia"]
// autoMobiles.splice(2,2,"Mahindra","Tata")
// console.log(autoMobiles)

// let bikeAutos = ["TVS","Hero","Yamaha","Jawa"]
// bikeAutos.splice(3,0,"Ducati","BMW");
// console.log(bikeAutos)

// The slice() method slices out a piece of an array into a new array.

// let upiApp = ["GPay","PhonePe","PayTm","Airtel","AmazonPay"]
// let newApp = upiApp.slice(2);
// console.log(newApp)

// Sorting method in an Array 
// let greeting =["Good Morning","Good Evening","Good Day","Good Night"]
// greeting.sort();
// console.log(greeting);

// let digits =[75,45,25,72,55,83]
// digits.sort()
// console.log(digits)

// let Number = [415,94,100,168,264,176,211]
// Number.sort(function(a,b){return b-a})
// console.log(Number)

// Sorting an Object Arrays

// let extantFish = [
//     {name: "Whale Shark", length: "61.7" }
//     { name: "Basking Shark", length: "46" }
//     { name: "Tiger Shark", length: "25" }
//     { name: "White Shark", length: "23" }
// ];
// extantFish.sort(function (a, b) { return a.length - b.length })







