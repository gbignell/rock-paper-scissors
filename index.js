const choices = ["rock", "paper", "scissors"];
let compScore = 0;
let playerScore = 0;
let playerSelection = "";
let turnCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playerSelection = button.value;
    turnCount++;
    game();
    if (turnCount >= 5) {
      document.getElementById("buttons").style.display = "none";
      document.getElementById("reset").style.display = "block";
      if (button.value === "reset") {
        reset();
      }
    }
  });
});

function reset() {
  turnCount = 0;
  compScore = 0;
  playerScore = 0;
  document.getElementById("selections").textContent = "";
  document.getElementById("human").textContent = `${playerScore}`;
  document.getElementById("comp").textContent = `${compScore}`;
  document.getElementById("turnCount").textContent = `${turnCount}`;
  document.getElementById("winner").textContent = "";
  document.getElementById("buttons").style.display = "flex";
  document.getElementById("reset").style.display = "none";
}

function getComputerChoice() {
  num = Math.floor(Math.random() * 3);
  let choice = choices[num];
  return choice;
}

function winner() {
  if (compScore > playerScore) {
    return "Computer";
  } else if (compScore < playerScore) {
    return "Human";
  } else {
    return "Draw!";
  }
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
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  document.getElementById(
    "selections"
  ).textContent = `Human: ${playerSelection}, Computer: ${computerSelection}`;
  document.getElementById("human").textContent = `${playerScore}`;
  document.getElementById("comp").textContent = `${compScore}`;
  document.getElementById("turnCount").textContent = `${turnCount}`;

  if (turnCount === 5) {
    let champ = winner();
    document.getElementById("winner").textContent = `Winner is: ${champ}`;
  }
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
