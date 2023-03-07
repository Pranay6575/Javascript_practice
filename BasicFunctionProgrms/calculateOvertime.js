const calculateTime = (hours) => {
  hours = prompt("Enter total Hours of Work");
  let count = 1;
  let overTime = 0;
  let overTimepay = 12;       // 12rs per hour

  while (count <= 10) {
    if (hours > 40) {
      overTime = overTime + (hours - 40);
      overTimepay = overTimepay * overTime
      return "Your worked for " + hours + " hours and your overtime are " + overTime + " hours So, Your total Over-time Pay is Rs. " + overTimepay;
    }
    else {
      return "You worked for " + hours + " hours so, you are not eligible for Over_time Pay";
    }
  }
  count++;
}
console.log(calculateTime());