# Rock, Paper, Scissors Project

This project is a simple, console-based implementation of the classic game "Rock, Paper, Scissors" using JavaScript. The user plays against the computer, and all interactions and results are displayed in the browser's developer console.

## Game Logic and Algorithm

The core logic is contained within the `main.js` file and is broken down into several key functions:

### 1. `getComputerChoice()`
This function determines the computer's move.
- It generates a random integer between 0 and 2.
- Based on the number, it returns either `"rock"`, `"paper"`, or `"scissors"`.

### 2. `getHumanChoice()` and `validation()`
The `getHumanChoice` function is responsible for getting the user's input.
- It uses a `prompt()` to ask the user to enter their choice.
- The input is converted to lowercase to ensure consistency.
- The `validation()` function is then used to check if the input is one of the three valid options ("rock", "paper", or "scissors").

### 3. `playRound(humanChoice, computerChoice)`
This function contains the logic for a single round of the game.
- It takes the human and computer choices as arguments.
- It logs both choices to the console.
- Using a series of `if/else if` statements, it compares the two choices to determine the winner according to the game's rules (Rock beats Scissors, Scissors beats Paper, Paper beats Rock).
- It prints the outcome of the round (e.g., "You lose! Paper beats Rock").
- If the player wins, `humanScore` is incremented. If the computer wins, `computerScore` is incremented. No score changes on a draw.

### 4. `playGame()`
This is the main function that orchestrates the entire game flow.
- It uses a `for` loop to run the game for a fixed number of rounds (in this case, 6 rounds).
- Inside the loop, it calls `getHumanChoice()` and `getComputerChoice()` to get the moves for the current round.
- It then calls `playRound()` to execute the round's logic.
- After each round, the current scores are logged to the console.
- Once the loop finishes, it displays the final scores and declares an overall winner based on which player has the higher score.