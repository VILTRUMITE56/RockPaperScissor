function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
}

function hasPlayerWonTheRound(player, computer) {
  if (
    (player == "Rock" && computer == "Scissors") ||
    (player == "Scissors" && computer == "Paper") ||
    (player == "Paper" && computer == "Rock")
  ) {
    return true;
  } else if (
    (player == "Scissors" && computer == "Rock") ||
    (player == "Paper" && computer == "Scissors") ||
    (player == "Rock" && computer == "Paper")
  ) {
    return false;
  } else {
    return false;
  }
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
