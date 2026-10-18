const gameForm = document.querySelector("#gameForm");
const maxNumberInput = document.querySelector("#maxNumber");
const startButton = document.querySelector("#startButton");
const guessSection = document.querySelector("#guessSection");
const guessForm = document.querySelector("#guessForm");
const guessInput = document.querySelector("#guessInput");
const gameStatus = document.querySelector("#gameStatus");
const message = document.querySelector("#message");
const restartButton = document.querySelector("#restartButton");

let randomNumber;
let maxNumber;

// Start the game when the first form is submitted.
gameForm.addEventListener("submit", function (event) {
  event.preventDefault();

  maxNumber = Number(maxNumberInput.value);

  if (!Number.isInteger(maxNumber) || maxNumber < 2) {
    message.textContent = "Please enter a whole number greater than 1.";
    message.className = "message error";
    maxNumberInput.focus();
    return;
  }

  randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  gameStatus.textContent = `Guess a number between 1 and ${maxNumber}.`;
  guessSection.hidden = false;
  startButton.textContent = "Game started";
  startButton.disabled = true;
  maxNumberInput.disabled = true;
  message.textContent = "Your game has started!";
  message.className = "message";
  guessInput.focus();
});

// Check the user's guess.
guessForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const guess = Number(guessInput.value);

  if (!Number.isInteger(guess) || guess < 1 || guess > maxNumber) {
    message.textContent = `Enter a whole number from 1 to ${maxNumber}.`;
    message.className = "message error";
    guessInput.focus();
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `Correct! The number was ${randomNumber}.`;
    message.className = "message success";
    guessInput.disabled = true;
    guessForm.querySelector("button").disabled = true;
    restartButton.hidden = false;
    return;
  }

  if (guess < randomNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }

  message.className = "message";
  guessInput.value = "";
  guessInput.focus();
});

// Reset all fields and start a new game.
restartButton.addEventListener("click", function () {
  gameForm.reset();
  guessForm.reset();
  guessSection.hidden = true;
  restartButton.hidden = true;
  startButton.textContent = "Start game";
  startButton.disabled = false;
  maxNumberInput.disabled = false;
  guessInput.disabled = false;
  guessForm.querySelector("button").disabled = false;
  gameStatus.textContent = "";
  message.textContent = "";
  message.className = "message";
  maxNumberInput.focus();
});
