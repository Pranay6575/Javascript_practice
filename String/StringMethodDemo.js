let place= "Newyork"

console.log(place.length)
console.log(place.toUpperCase())
console.log(place.toLowerCase())
console.log(place.slice(2 , 6))
console.log(place.slice(2))

console.log(place.replace("New", "Old"))

let name = "Ravikisan"
console.log(place.concat(" Police saw ", name))
let fruit = "           Avacado        "
console.log(fruit.trim())

let naav = "Shivika"
for(let i=0; i<naav.length; i++){
  console.log(naav);
}

let rbg ="Crocodile"
console.log(rbg.substr(1, 5))
console.log(rbg.slice(1, 5))
console.log(rbg.substring(1,5))

let bgr = "   Hey There     "
console.log(bgr.trimStart())

 let pin = "8"
console.log(pin.padStart(8, "X"))

let loc = "Find my Device"
console.log(loc.indexOf("Device"))