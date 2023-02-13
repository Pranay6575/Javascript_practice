// NN SS BB U
let type1 = null;
let type2 = 500;
let type3 = "Happy Holidays";
let type4 = Symbol("I am Good");
let type5 = true;
let type6 = BigInt("315")+ BigInt("5")
let type7 =  undefined;

console.log(type1,type2,type3,type4,type5,type6,type7);
console.log(typeof type3,type4,type5);

// Objects in JS

// Non-Primitive Datatypes (Means Objects)
const places = {
  "Thane": null,
  "Andheri" : undefined,
  "Dadar" : false,
  "Kurla" : 786 
}
console.log(places["Dadar"])