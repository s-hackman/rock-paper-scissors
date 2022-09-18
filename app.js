let playerSelection = "";
const computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;
let roundWinner = "";
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
let result = document.querySelector("#result-el");
let finalResult = document.getElementById("result-el-2");

let playerScorePara = document.getElementById("player-score");
let computerScorePara = document.getElementById("computer-score");

btnRock.addEventListener("click", function () {
  playerSelection = "ROCK";
  result.textContent = playRound(playerSelection, getComputerChoice());
  updateScore();
});
btnPaper.addEventListener("click", function () {
  playerSelection = "PAPER";
  result.textContent = playRound(playerSelection, getComputerChoice());
  updateScore();
});
btnScissors.addEventListener("click", function () {
  playerSelection = "SCISSORS";
  result.textContent = playRound(playerSelection, getComputerChoice());
  updateScore();
});
console.log(computerScore);

function getComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber <= 1) {
    return "ROCK";
  } else if (randomNumber <= 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
    computerScore++;
    result.classList.add("lose");
    result.classList.remove("win");
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    result.classList.remove("lose");
    result.classList.remove("win");
    return "It's a tie!";
  } else {
    playerScore++;
    result.classList.add("win");
    result.classList.remove("lose");
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

function updateScore() {
  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
  if (playerScore === 5) {
    finalResult.textContent = "You Win the game";
    finalResult.classList.add("win");
  } else if (computerScore === 5) {
    finalResult.textContent = "You Lose the game";
    finalResult.classList.add("lose");
  }
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  result.textContent = "";
  finalResult.textContent = "First to score 5 points wins the game";
  finalResult.classList.remove("win");
  finalResult.classList.remove("lose");
  updateScore();
});
