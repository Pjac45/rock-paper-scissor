function computerPlay() {
    const number = Math.floor(Math.random() * 10);
    if (number  >= 7) {
        return "Rock";
    } else if (number >= 4) {
        return "Paper";
    }
    return "Scissor";
}

let playerScore = 0
let computerScore = 0


function playRound(computerSelection, playerSelection) {
      if (computerSelection === "Rock" && playerSelection === "scissor") {
      	++computerScore;
        return `You lose, rock beats scissor! The score is now ${computerScore} for the computer and ${playerScore} for you.`
    } else if (computerSelection === "Paper" && playerSelection === "rock") {
    	++computerScore;
        return `You lose, paper beats rock! The score is now ${computerScore} for the computer and ${playerScore} for you.`;
    } else if (computerSelection === "Scissor" && playerSelection === "paper") {
    	++computerScore;
        return `You lose, scissors beat paper! The score is now ${computerScore} for the computer and ${playerScore} for you.`;
    } else if (computerSelection === "Scissor" && playerSelection === "rock") {
    	++playerScore;
        return `You win, rock beats scissors! The score is now ${computerScore} for the computer and ${playerScore} for you.`;
    } else if (computerSelection === "Scissor" && playerSelection === "scissor") {
        return `It's a tie!`;
    } else if (computerSelection === "Rock" && playerSelection === "rock") {
        return `It's a tie, theyre the same!`;
    } else if (computerSelection === "Paper" && playerSelection === "paper") {
        return `It's a tie, theyre both paper!`;
    } else if (computerSelection === "Paper" && playerSelection === "scissor") {
    	++playerScore;
        return `You win, scissor beats paper! The score is now ${computerScore} for the computer and ${playerScore} for you.`;
    } else if (computerSelection === "Rock" && playerSelection === "paper") {
    	++playerScore;
        return `You win, paper beats rock! The score is now ${computerScore} for the computer and ${playerScore} for you.`
    }
}   

function game() {
	for (let i = 0; i < 5; i++) {
	computerSelection = computerPlay();
	playerSelection = prompt("Rock, paper, or scissor?").toLowerCase();
	console.log(playRound(computerSelection, playerSelection));
   } if (playerScore > computerScore) {
       console.log("The human wins!");
       alert("The human wins!");
   } else if (playerScore < computerScore) {
       console.log("The computer wins!");
       alert("The computer wins!");
   } else if (playerScore == computerScore) {
       console.log("It's a tie! Try again!"); 
       alert("It's a tie! Try again!");
   }
}

game();