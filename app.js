let playerSelection = "";
const computerSelection = getComputerChoice();
let computerScore = document.getElementById('computer-score');
let playerScore = document.getElementById('player-score');
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
let result = document.querySelector('#result-el')

btnRock.addEventListener('click', function() {
    playerSelection = "ROCK"
    result.textContent = playRound(playerSelection, getComputerChoice())
})
btnPaper.addEventListener('click', function() {
    playerSelection = "PAPER"
    result.textContent = playRound(playerSelection, getComputerChoice())
})
btnScissors.addEventListener('click', function() {
    playerSelection = "SCISSORS"
    result.textContent = playRound(playerSelection, getComputerChoice())
})
console.log(computerScore)

function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber <= 1) {
        return "ROCK"
    } else if (randomNumber <= 2) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "SCISSORS" || playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore += 1
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        playerScore += 1
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}


console.log(playRound(playerSelection, computerSelection));

