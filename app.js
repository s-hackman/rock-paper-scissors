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
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        
    }
}