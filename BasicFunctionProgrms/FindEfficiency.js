// In a company, worker efficiency is determined on the basis of
// the time required for a worker to complete a particular job. If the time taken by the worker is 
// between 2 – 3 hours, then the worker is said to be highly efficient. If the time required by
// the worker is between 3 – 4 hours, then the worker is ordered to improve speed. If the time taken is between 4 – 5 hours, 
// the worker is given training to improve his speed, and if the timetaken by the worker is more than 5 hours, 
// then the worker has to leave the company. If the time taken by the worker is 
// input through the keyboard, find the efficiency of the worker.

function findEfficiency(hrs){
hrs = prompt("Enter time");
if(hrs >=2 && hrs <=3){
    alert(("You are Highly Efficient!"))
}
else if(hrs >3 && hrs <=4){
    alert(("You need to improve speed !"))
}
else if(hrs >4 && hrs <=5){
    alert(("You need Training to improve speed!"))
}
else{
    alert(("Leave the Company!"))
}
}
console.log(findEfficiency());