// Declare choices for ROCK, PAPER & SCISSORS
// Assign a random choice to computer
const generateRandomComputerChoice = () => {
  const choices = [1, 2, 3];
  const computerChoice = Math.floor(Math.random() * 3);
  return computerChoice;
};

// checkWhoWinsTheGame
const checkWinnerOfGame = (computerChoice, userChoice) => {
  console.log(`Computer Choice:${computerChoice}`);
  console.log(`User Choice:${userChoice}`);
};

// Accept User Choice to be called when a button is clicked
const acceptUserChoiceHandler = (event) => {
  let userChoice;
  const userInputChoice = event.target.innerText;

  if (userInputChoice === "ROCK") userChoice = 1;
  else if (userInputChoice === "PAPER") userChoice = 2;
  else userChoice = 3;

  let computerChoice = generateRandomComputerChoice();
  checkWinnerOfGame(computerChoice, userChoice);
};

// Event Handler on Button
document
  .getElementById("btn-rock")
  .addEventListener("click", acceptUserChoiceHandler);
document
  .getElementById("btn-paper")
  .addEventListener("click", acceptUserChoiceHandler);
document
  .getElementById("btn-scissors")
  .addEventListener("click", acceptUserChoiceHandler);
