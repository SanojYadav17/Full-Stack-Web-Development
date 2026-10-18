const favMovie = "Money Heist";
let guess = prompt("Guess my favorite movie: ");

while (guess !== favMovie) {
  if (guess === "quit") {
    break;
  }
  guess = prompt("Wrong Guess please try again: ");
}

if (guess === favMovie) {
  console.log("Congratulations! You guessed it right.");
} else {
  console.log("You quit the game.");
}
