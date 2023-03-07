function convertDistance(totalDistance){
 totalDistance = prompt("Enter the distance in Km !");

let InMeters = totalDistance*1000;
alert(InMeters +" Meters");

let InFeets = InMeters*3.28084;
alert(InFeets+" Feets")

let InInches = InMeters * 39.3701;
alert(InInches+" In inches");

let InCentimtrs = InMeters * 100;
alert(InCentimtrs+" Cms");
}
convertDistance();