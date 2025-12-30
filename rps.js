// Global Score Variables
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// UI Element References
const roundResultDisplay = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score-display");
const finalWinnerDisplay = document.querySelector("#final-winner");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(humanChoice) {
    if (gameOver) return; // Stop the game if someone already reached 5 points

    const computerChoice = getComputerChoice();
    let message = "";

    if (humanChoice === computerChoice) {
        message = `It's a tie! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        message = `You win this round! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        message = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }

    updateUI(message);
    checkWinner();
}

function updateUI(roundMessage) {
    roundResultDisplay.textContent = roundMessage;
    scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;
        if (humanScore === 5) {
            finalWinnerDisplay.textContent = "🏆 Congratulations! You reached 5 points first!";
            finalWinnerDisplay.style.color = "green";
        } else {
            finalWinnerDisplay.textContent = "😢 Game Over. The computer reached 5 points first.";
            finalWinnerDisplay.style.color = "red";
        }
    }
}

// Event Listeners for Buttons
document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));