/*

VARIABLE NAMES

userChoice = the choice that the user inputs, be it rock, paper or scissors

compChoice = the choice that the computer makes based on the compResponse function

compResponse() = the function that is run in order to generate a choice for the computer

gameResult = variable used to store the result of the current game

*/






let userScore= "";
let compScore = "";


function computerPlay( userChoice = prompt(`What do you want to play?`)) {



    let compChoice="";
    compResponse();

    function compResponse() {
        let numGenerator = Math.random();

        switch (true) {
            case numGenerator < 0.34: compChoice += "rock"; break;
            case numGenerator < 0.76: compChoice += "paper"; break;
            case numGenerator < 1: compChoice += "scissors"; break;
        }
    }


    let gameResult = ""


    // switch statements that contain all 7 possible outcomes

    switch(true){
        case (userChoice == compChoice): 
        gameResult += `The computer chose ${compChoice}. It's a draw`; 
        break;

        case (compChoice == `scissors` && userChoice == `paper`):
            gameResult += `The computer chose ${compChoice}. You lose`; 
        break;

        case (compChoice == `rock` && userChoice == `scissors`):
            gameResult += `The computer chose ${compChoice}. You lose`; 
        break;

        case (compChoice == `paper` && userChoice == `rock`):
            gameResult += `The computer chose ${compChoice}. You lose`; 
        break;

        case (compChoice == `scissors` && userChoice == `rock`):
            gameResult += `The computer chose ${compChoice}. You win`; 
        break;

        case (compChoice == `rock` && userChoice == `paper`):
            gameResult += `The computer chose ${compChoice}. You win`; 
        break;

        case (compChoice == `paper` && userChoice == `scissors`):
            gameResult += `The computer chose ${compChoice}. You win`; 
        break;
    }
    console.log(gameResult);
}
















