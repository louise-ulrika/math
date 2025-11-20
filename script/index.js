const anyNumber=Math.floor(Math.random()*10);
let guess=null;
while(guess!==anyNumber){
    guess=parseFloat(prompt("Guess a number between 0 and 10:"));
    

    if(guess<anyNumber){
        console.log("Too low! Try again.");
    }else if(guess>anyNumber){
        console.log("Too high! Try again.");
    }
       
 
}
console.log("Congratulations!You guessed the correct number:",anyNumber);
