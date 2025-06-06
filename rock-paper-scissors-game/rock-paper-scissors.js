// Declare choices for ROCK, PAPER & SCISSORS
// Assign a random choice to computer
const generateRandomComputerChoice = () => {
  const choices = [1, 2, 3];
  const computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
};

const displayChoices = (computerChoice, userInputChoice) => {
  if (computerChoice === 1)
    document.getElementById(
      "computer-choice"
    ).textContent = `Computer choose:ROCK`;

  if (computerChoice === 2)
    document.getElementById(
      "computer-choice"
    ).textContent = `Computer choose:PAPER`;

  if (computerChoice === 3)
    document.getElementById(
      "computer-choice"
    ).textContent = `Computer choose:SCISSORS`;

  document.getElementById(
    "user-choice"
  ).textContent = `You choose: ${userInputChoice}`;
};
// checkWhoWinsTheGame
const checkWinnerOfGame = (computerChoice, userChoice) => {
  console.log(`Computer Choice:${computerChoice},User Choice:${userChoice} `);
  if (computerChoice === userChoice)
    document.getElementById("result").textContent = `ITS A TIE.`;

  if (Math.abs(computerChoice - userChoice) === 1) {
    if (computerChoice > userChoice)
      document.getElementById("result").textContent = `YOU LOSE! COMPUTER WINS`;
    else
      document.getElementById(
        "result"
      ).textContent = `YOU WON!. COMPUTER LOSES`;
  }
  if (Math.abs(computerChoice - userChoice) === 2) {
    if (computerChoice > userChoice)
      document.getElementById("result").textContent = `YOU WON! COMPUTER LOSES`;
    else
      document.getElementById("result").textContent = `YOU LOSE! COMPUTER WINS`;
  }
};

// Accept User Choice to be called when a button is clicked
const acceptUserChoiceHandler = (event) => {
  let userChoice;
  const userInputChoice = event.target.innerText;

  if (userInputChoice === "ROCK") userChoice = 1;
  else if (userInputChoice === "PAPER") userChoice = 2;
  else userChoice = 3;

  let computerChoice = generateRandomComputerChoice();
  displayChoices(computerChoice, userInputChoice);
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
