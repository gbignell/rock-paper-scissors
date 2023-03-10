const choices = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;
game();

function getComputerChoice() {
  num = Math.floor(Math.random() * 3);
  let choice = choices[num];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw! You both selected the same";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    return "You Lose! Scissors beats Paper";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
  }
  console.clear();
  console.log(`Final Scores: Player: ${playerScore} | Computer: ${compScore}`);
}

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection != computerSelection) {
//     switch ((playerSelection, computerSelection)) {
//       case ("rock", "paper"):
//         return "You Lose! Paper beats Rock";
//         break;
//       case ("paper", "rock"):
//         return "You Win! Paper beats Rock";
//         break;
//       case ("scissors", "paper"):
//         return "You Win! Scissors beats Paper";
//         break;
//       case ("paper", "scissors"):
//         return "You Lose! Scissors beats Paper";
//         break;
//       case ("rock", "scissors"):
//         return "You Win! Scissors beats Rock";
//         break;
//       case ("scissors", "rock"):
//         return "You Lose! Rock beats Scissors";
//         break;
//       default:
//         return "Something went Wrong!";
//     }
//   } else {
//     return "Draw... You both chose the same!";
//   }
// }
