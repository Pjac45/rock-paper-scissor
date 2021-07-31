function computerPlay() {
    const number = Math.floor(Math.random() * 10);
    if (number  >= 7) {
        return "Rock";
    } else if (number >= 4) {
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper, or scissor?").toLowerCase();
    if (playerSelection === null) {
        return "Please make a selection";
    } else if (computerSelection === "Rock" && playerSelection === "scissor") {
        return "You lose, rock beats scissor!";
    } else if (computerSelection === "Paper" && playerSelection === "rock") {
        return "You lose, paper beats rock!";
    } else if (computerSelection === "Scissors" && playerSelection === "paper") {
        return "You lose, scissors beat paper!"
    } else if (computerSelection === "Scissors" && playerSelection === "rock") {
        return "You win, rock beats scissors!";
    } else if (computerSelection === "Scissors" && playerSelection === "scissors") {
        return "It's a tie!";
    } else if (computerSelection === "Rock" && playerSelection === "rock") {
        return "It's a tie, theyre the same!";
    } else if (computerSelection === "Paper" && playerSelection === "paper") {
        return "It's a tie, theyre both paper!";
    } else if (computerSelection === "Paper" && playerSelection === "scissor") {
        return "You win, scissor beats paper!";
    } else if (computerSelection === "Rock" && playerSelection === "paper") {
        return "You win, paper beats rock!";
    }
}   


function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(playRound()); 
    }
}

game();
