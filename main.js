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

function getHumanChoice() {
    const choice = prompt("ENTER YOUR CHOICE ! :");
    if (choice === null) {
        return null;
    }
    const userChoice = choice.toLowerCase().trim();
    return validation(userChoice);
}
function validation(input) {
    if (input === "paper" || input === "rock" || input === "scissors") {
        return input;
    } else {
        console.log("Invalid choice! Please enter rock, paper, or scissors. \n");
        return false;
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
    
    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        if (humanSelection === null) {
            console.log('Canceled by user. Exiting game.');
            break;
        }

        if (!humanSelection) {
            i--;
            continue;
        }

        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        console.log(`Your Current Score : ${humanScore} | Your Opponent's Current Score : ${computerScore}`);
        console.log('');
    }

    console.log('');

    let lastHumanScore = `Your Final Score : ${humanScore}`
    let lastComputerScore = `Your Opponent's Final Score : ${computerScore}`
    console.log(lastHumanScore + " | " + lastComputerScore);
    if (computerScore > humanScore) {
        console.log("Maybe Next Time :(");
    }
    else if (computerScore === humanScore) {
        console.log("It's a tie!");
    }
    else {
        console.log("Congrats! You Beat Your Opponent");
    }
}
playGame();