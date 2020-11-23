/*
first we create a function
this function generates a number randombly 
the odds are split in equal 0.33 parts
if the number is between 0 and 0.33 we print rock
if the number is between 0.34 and 0.66 we print paper
if the number is between 0.67 and 1 we print scissors
*/
// this addresses the issue raised on lines 19 - 20
function computerPlay( userChoice = prompt(`What do you want to play?`)) {
    console.log(`You chose ${userChoice.toLowerCase()}`);
    // we initialize the function and ask the user for its choice

    // we generate the computer's choice and store it in compChoice
    let compResponse="";

    compChoice();
    
    console.log(`The computer chose ${compResponse}`);
    function compChoice() {
        let numGenerator = Math.random();
        switch (true) {
            case numGenerator < 0.34: compResponse += "rock"; break;
            case numGenerator < 0.76: compResponse += "paper"; break;
            case numGenerator < 1: compResponse += "scissors"; break;
        }
    }






    // if else statements that contain all 6 possible outcomes
    if(userChoice == compResponse) {
        console.log(`It's a draw`);
    } else if (compResponse == `scissors` && userChoice == `paper`) {
        console.log(`scissors beats paper, you lose`)
    } else if (compResponse == `rock` && userChoice == `scissors`) {
        console.log(`rock beats scissors, you lose`)
    } else if (compResponse == `paper` && userChoice == `rock`) {
        console.log(`paper beats rock, you lose`)
    } else if (userChoice == `scissors` && compResponse == `paper`) {
        console.log(`scissors beats paper, you win`)
    } else if (userChoice == `rock` && compResponse == `scissors`) {
        console.log(`rock beats scissors, you win`)
    } else if (userChoice == `paper` && compResponse == `rock`) {
        console.log(`paper beats rock, you win`)
    }

}
