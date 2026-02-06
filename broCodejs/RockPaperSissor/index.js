//   ROCK PAPER SCISSORS

const choice = ["rock", "paper", "scissors"];


const resultDisplay = document.querySelector(".resultDisplay");
const playerDisplay = document.querySelector(".playerDisplay");
const computerDisplay = document.querySelector(".ComputerDisplay");


function playGame(playerChoice) {
     const computerChoice = choice[Math.floor(Math.random() * 3)];

     let result = "";

     if (playerChoice === computerChoice) {
          result = "IT'S A TIE";
     }

     // else {
     //      switch (playerChoice) {
     //           case "rock":
     //                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
     //                break;
     //           case "paper":
     //                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
     //                break;
     //           case "scissors":
     //                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
     //                break;
     //      }
     // }
     else {
          if (computerChoice === "rock" && playerChoice === "paper") {
               result = "YOU WIN";
          } else if (computerChoice === "paper" && playerChoice === "scissors") {
               result = "YOU WIN";
          } else if (computerChoice === "scissors" && playerChoice === "rock") {
               result = "YOU WIN";
          } else {
               result = "YOU LOSE";
          }
     }

     resultDisplay.className = "resultDisplay"; // reset

     if (result === "YOU WIN") {
          resultDisplay.classList.add("win");
     } else if (result === "YOU LOSE") {
          resultDisplay.classList.add("lose");
     } else {
          resultDisplay.classList.add("tie");
     }

     playerDisplay.textContent = `PLAYER: - ${playerChoice}`;
     computerDisplay.textContent = `COMPUTER:  - ${computerChoice}`;
     resultDisplay.textContent = result;


}