// Write a program for a matchstick game being played between
// the computer and a user. Your program should ensure that the
// computer always wins. Rules for the game are as follows:
// − There are 21 matchsticks.
// − The computer asks the player to pick 1, 2, 3, or 4
// matchsticks.
// − After the person picks, the computer does its
// picking.
// − Whoever is forced to pick up the last matchstick
// loses the game

const playGame = (userturn,computerturn)=>{
    let totalSticks = 21;
    
    
    while(totalSticks>=1){

        userturn = prompt("User Pickup the Sticks");

        if(userturn>4){
            return "Wrong Playing"
    
        }
        computerturn = 5-userturn;
        computerturn = prompt("Computer Pickup the Sticks");

        totalSticks = totalSticks - userturn - computerturn;
        if(totalSticks === 1){
            return "You have been lost by Computer! Better Luck Next Time"
            
        }
    }

}
console.log(playGame());