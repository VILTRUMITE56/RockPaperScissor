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

function showResults(userOption) {
  const toGetWin = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultsMsg.innerText = toGetWin;
}

showResults("Rock");
