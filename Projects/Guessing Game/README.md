# Guessing Game

## About

Guessing Game is a small browser game in which the player tries to find a
random number. The player first chooses the maximum possible number and then
submits guesses until the hidden number is found.

The game gives a helpful message after every valid guess:

- **Too low** - the guess is smaller than the hidden number
- **Too high** - the guess is larger than the hidden number
- **Correct** - the hidden number has been found

## How to Play

1. Enter a whole number greater than `1` as the maximum number.
2. Click **Start game**.
3. Enter a number between `1` and the selected maximum.
4. Click **Check guess**.
5. Use the hint to improve the next guess.
6. Click **Play again** after winning to restart.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Project Structure

```text
Guessing Game/
├── guessingGame.html
├── guessingGame.css
├── guessingGame.js
└── README.md
```

- `guessingGame.html` creates the game form and message areas.
- `guessingGame.css` styles the card, forms, buttons and game messages.
- `guessingGame.js` generates the random number and controls the game.

## JavaScript Concepts Practised

- Selecting HTML elements with `querySelector`
- Handling form submissions with event listeners
- Converting input text into numbers
- Creating a random number with `Math.random`
- Using `if...else` conditions
- Validating user input
- Updating page content with `textContent`

## How to Run

Open `guessingGame.html` in a web browser. No installation is required.
