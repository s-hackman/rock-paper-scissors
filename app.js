let playerSelection = "ROCK";
const computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");

btnRock.addEventListener('click', function() {
    playerSelection = "ROCK"
    getComputerChoice()
    console.log(playRound())
})
btnPaper.addEventListener('click', function() {
    playerSelection = "PAPER"
    getComputerChoice()
    console.log(playRound())
})
btnScissors.addEventListener('click', function() {
    playerSelection = "SCISSORS"
    getComputerChoice()
    console.log(playRound())
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

