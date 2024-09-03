const result = document.getElementById("result");

// The buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Function to get a random choice for the computer
function getComputerPick() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the result of the game
function RockPaperScissors(playerPick) {
    const computerPick = getComputerPick();

    if (playerPick === computerPick) {
        result.textContent = `It's a tie! You both picked ${playerPick}.`;
        return;
    }

    if (
        (playerPick === 'rock' && computerPick === 'scissors') ||
        (playerPick === 'scissors' && computerPick === 'paper') ||
        (playerPick === 'paper' && computerPick === 'rock')
    ) {
        result.textContent = `You Win! You picked ${playerPick} and the computer picked ${computerPick}.`;
    } else {
        result.textContent = `You Lose! You picked ${playerPick} and the computer picked ${computerPick}.`;
    }
}

// Add event listeners to buttons
rock.addEventListener('click', () => RockPaperScissors('rock'));
paper.addEventListener('click', () => RockPaperScissors('paper'));
scissors.addEventListener('click', () => RockPaperScissors('scissors'));
