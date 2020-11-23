/*

VARIABLE NAMES

userChoice = the choice that the user inputs, be it rock, paper or scissors

compChoice = the choice that the computer makes based on the compResponse function

compResponse() = the function that is run in order to generate a choice for the computer

gameResult = variable used to store the result of the current game

*/

/*
results are added outside of any scope so that they
don't get reset every time we call the function
*/
let userScore= "";
let compScore = "";


function computerPlay(userChoice = prompt(`What's your pick?`)) {


    /* compChoice stored ousite of the function so that
     it doesn't get reset to 0 every time we iterate
    */
    let compChoice="";
    
    compResponse();

    function compResponse() {
        let numGenerator = Math.random();

        switch (true) { 
            case numGenerator <= 0.33: compChoice += "rock"; break;
            case numGenerator <= 0.66: compChoice += "paper"; break;
            case numGenerator <= 0.99: compChoice += "scissors"; break;
        }
    }


    let gameResult = ""


    // switch statements that contain all 7 possible outcomes
    //formated as such to increase readability
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


    // switch statements could be implemented but are not absolutely necessary
    console.log(gameResult);
    if (gameResult.includes("win")) {
        ++userScore;
        console.log(`Your score is: ${userScore} \n The computer's score is: ${compScore}`);
    }   else if (gameResult.includes("lose")) {
        ++compScore;
        console.log(`Your score is: ${userScore} \n The computer's score is: ${compScore}`);
    }   else if (gameResult.includes("draw")) {
        console.log (`Your score is: ${userScore} \n The computer's score is: ${compScore}`)
    }

    
    if (userScore === 5) {
        alert(`You won`);
    }   else if (compScore === 5) {
        alert(`The computer won`);
    }
    
}
