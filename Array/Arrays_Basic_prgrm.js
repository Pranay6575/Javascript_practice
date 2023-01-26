let marks_12_cls = [87, 68, 74, 97, 88, null , true]
console.log(marks_12_cls[0])
console.log(marks_12_cls[1])
console.log(marks_12_cls[2])
console.log(marks_12_cls[3])
console.log(marks_12_cls[4])
console.log(marks_12_cls[5])
console.log(marks_12_cls[6])
console.log(marks_12_cls[7])
console.log("The marks_12_cls  are "+ marks_12_cls.length)
marks_12_cls[7] = 99 // Arrays are Mutable so it can changed //
marks_12_cls[0] = 66 // Changed the valuse of an array index
console.log(marks_12_cls)
console.log(typeof marks_12_cls)

let bank = ["icici", "kotak", "axis", "idbi" , "hdfc ", "sbi"]
for(let i =0; i < bank.length; i++){
  console.log(bank[i]);
}

// ===============================================================================================================================================
// Array Methods
let num = [ 45, 54, 58, 89 , 99]
let noom = num.toString()              // noom is also now a String by toString()
console.log(noom)

let c = num.join(" & ")
console.log(c, typeof c)

let d = num.pop()                      // Pop returns the pop element
  console.log(num , d)

let e = num.push(55)                   // Push returns the new array length
console.log(num, e )

let t = num.shift()                       // Shift remove the element
console.log(t , num)

let u = num.unshift(66)                        //  Unshift add the new length into the array
console.log(u , num)

let boys = ["John", "Martin", "Adam" , "Pop", "Jack"]
let girls = ["Selena", "Sama", "Rebecca", "Ana"]
let peer = boys.concat(girls)
console.log(peer)
boys.splice(1,3, "Robot", "Philip", "rock")
console.log(boys);


  


