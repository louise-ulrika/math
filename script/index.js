
const anyNumber=Math.floor(Math.random()*10);
let guess=null; 

function guessNumbergame(){
    





while(guess!==anyNumber){
    guess=parseFloat(prompt("Guess a number between 1 and 10:"));

 

    if(guess<anyNumber){
        alert("Too low! Try again.");
    }else if(guess>anyNumber){
        alert("Too high! Try again.");

        
    }}

        console.log ("Congratulations! You guessed the correct number:");
alert ("Congratulations! You guessed the correct number:" + anyNumber);

};

guessNumbergame();



 








