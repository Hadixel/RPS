function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let userChoice = getHumanChoice();;
function getHumanChoice() {

    userChoice = prompt("ENTER YOUR CHIOCE ! :").toLowerCase();
    validation();
}


function validation() {
        if (userChoice === "paper" || userChoice === "rock" || userChoice === "scissors") {
            return userChoice;
        }
        else {
            return "Not an Option";
        }
    }


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {


    console.log("You : " + humanChoice);
    console.log("Bot : " + computerChoice);
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper");
        computerScore += 1;
    }
    else if (humanChoice === computerChoice) {
        console.log("It's A Draw! Try Again!");
    }
    else {
        console.log("BRAVO! YOU WON!");
        humanScore += 1;
    }
}



function playGame() {
    
    for (let i = 0; i <= 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);


        console.log(`Your Current Score : ${humanScore} | The Opponent's Score : ${computerScore}`);
        console.log('');

        if (!validation()) {
            i--
        }
    }

    console.log('');

    let lastHumanScore = `Your Score : ${humanScore}`
    let lastComputerScore = `Your Opponent's Score : ${computerScore}`
    console.log(lastHumanScore + " | " + lastComputerScore);
    if (lastComputerScore > lastComputerScore) {
        console.log("Mabye Next Time :(");
    }
    else {
        console.log("Congrats! You Beat Your Opponent");
    }
}

playGame();