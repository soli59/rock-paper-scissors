// --- Section 1: Helper Functions ---

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Round Start! Enter rock, paper, or scissors:");
    if (choice === null) return "";
    return choice;
}

// --- Section 2: Main Game Logic ---

function playGame() {
    // Score Variables
    let humanScore = 0;
    let computerScore = 0;

    // Single Round Logic
    function playRound(humanChoice, computerChoice) {
        let humanChoiceLower = humanChoice.toLowerCase();

        if (humanChoiceLower === computerChoice) {
            console.log(`It's a tie! You both chose ${humanChoiceLower}`);
        } else if (
            (humanChoiceLower === "rock" && computerChoice === "scissors") ||
            (humanChoiceLower === "paper" && computerChoice === "rock") ||
            (humanChoiceLower === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoiceLower} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoiceLower}`);
        }
    }

    // Play 5 Rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Final Results
    console.log("-------------------------------");
    console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("🏆 Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("😢 Game Over. The computer won.");
    } else {
        console.log("🤝 It's a draw match!");
    }
}

// --- Section 3: Start the Game ---
playGame();