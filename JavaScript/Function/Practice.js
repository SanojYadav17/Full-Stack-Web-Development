// print the poem "Twinkle, Twinkle, Little Star" using a function
function printPoem() {
  console.log("Twinkle, twinkle, little star,");
  console.log("How I wonder what you are!");
  console.log("Up above the world so high,");
  console.log("Like a diamond in the sky.");
  console.log("Twinkle, twinkle, little star,");
  console.log("How I wonder what you are!");
}
printPoem();

// create a function to roll a dice & always display the value of the dice(1 to 6)
function rollDice() {
let dice =Math.floor(Math.random()*6) + 1;
  console.log(dice);
}
rollDice();


// create a function that gives us the average of 3 numbers
function average(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;
  console.log(`The average of ${num1}, ${num2}, and ${num3} is: ${avg}`);
}
average(13, 19, 96);


// create a function that prints the multiplication table of a number
function printTable(num){
  for (let i = num; i <= num*10; i+=num) {
    console.log(i);
  }
}
printTable(5);