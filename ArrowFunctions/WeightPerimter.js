const weightInLbs = (kgweight) =>{
let lbs = kgweight * 2.2;
if(lbs > 150){
    return "Obese";
}
else if(lbs >= 100 && lbs <= 150){
    return "You are Ok";
}
else{
    return "underWeight";
}
}
