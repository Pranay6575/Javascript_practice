// first write no of day 


const libraryFine = (days) =>{
    days = prompt("Enter No  of days")

    if(days <=5){
        return "You are "+days+" days late for returning the Book your & late fine is 50 Paise"
    }
    else if(days >=6 && days <=10){
        return "You are "+days+" days late for returning the Book & your late fine is 1 Rs. "
    }
    else if(days > 10 && days < 30){
        return "You are "+days+" days late for returning the Book & your late fine is 5 Rs"
    }
    else if(days > 30 ){
        return "Sorry! you are "+days+" days late hence we Cancelled your Membership"
    }
}
console.log(libraryFine())