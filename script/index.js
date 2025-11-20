const anyNumber=Math.floor(Math.random()*10);
let guess=null;
while(guess!==anyNumber){
    guess=prompt("Guess a number between 0 and 10:");
    guess=parseInt(guess)};

    if(guess>anyNumber) {
    
        
        console.log("Good guess!Maybe try a lower number?")}
        
    else (guess<anyNumber){
        
        console.log("Good guess!Maybe try a higher number?");}
       
    

console.log("Congratulations!You guessed the correct number:",anyNumber);