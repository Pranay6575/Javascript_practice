const typeTraingle = (side1, side2, side3)=>{
    side1 = prompt("enter value of Side1")
    side2 = prompt("enter value of Side2")
    side3 = prompt("enter value of Side3") 

    if(side1 === side2  || side1 === side3 || side2 === side3){
        return "Type of traingle is Isosceles traingle";
    }
    else if(side1 === side2 === side3){
        return " Type of triangle is Equilateral Triangle"
    }
    else {
        return "Type of traingle is Scalene Traingle"
    }
}
console.log(typeTraingle());