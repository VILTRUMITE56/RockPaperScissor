let playerScore = 0;
let computerScore = 0;

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

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
  const resultest = hasPlayerWonTheRound(userOption, computerResult);
  if (!resultest && userOption == computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else if (!resultest) {
    computerScore += 1;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  } else {
    playerScore += 1;
    return `Player wins! ${userOption} beats ${computerResult}`;
  }
}

const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  if (playerScore == 3) {
    optionsContainer.style.display = "none";
    winnerMsgElement.innerText = `Player has won the game!`;
    resetGameBtn.style.display = "block";
  } else if (computerScore == 3) {
    optionsContainer.style.display = "none";
    winnerMsgElement.innerText = `Computer has won the game!`;
    resetGameBtn.style.display = "block";
  }
}

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "hidden";
  optionsContainer.style.display = "block";
  resetGameBtn.style.display = "";
  winnerMsgElement.innerHTML = "";
  roundResultsMsg.innerHTML = "";
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

resetGameBtn.addEventListener("click", resetGame);
