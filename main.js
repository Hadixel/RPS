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
    const userChoice = prompt("ENTER YOUR CHIOCE !");
    return userChoice.toLocaleLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
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

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    for (let i = 0; i <= 5; i++) {
        playRound(humanSelection, computerSelection);
        console.log(`Your Current Score : ${humanScore} | The Opponent's Score : ${computerScore}`);
    }
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