// Increasing Order
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.push("Pineapple");
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// Decreasing Order
let fruitsDecreasing = ["apple", "banana", "cherry", "date", "elderberry"];
fruitsDecreasing.push("Pineapple");
for (let i = fruitsDecreasing.length - 1; i >= 0; i--) {
  console.log(i, fruitsDecreasing[i]);
}


// Nested Loops with nested arrays
let heroes = [
  ["Superman", "Batman", "Wonder Woman"],
  ["Iron Man", "Captain America", "Thor"],
  ["Spider-Man", "Black Panther", "Doctor Strange"]
];

for (let i = 0; i < heroes.length; i++) {
  console.log(i, heroes[i], heroes[i].length);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(`j = ${j}, ${heroes[i][j]}`);
  }
}


// For of Loop
let fruitsForOf = ["apple", "banana", "cherry", "date", "elderberry"];
fruitsForOf.push("Pineapple");
for (const fruit of fruitsForOf) {
  console.log(fruit);
}

for (const char of "Hello") {
  console.log(char);
}


// Nested For of Loop
let heroesForOf = [
  ["Superman", "Batman", "Wonder Woman"],
  ["Iron Man", "Captain America", "Thor"],
  ["Spider-Man", "Black Panther", "Doctor Strange"]
];
for (const hero of heroesForOf) {
  console.log(hero);
  for (const list of hero) {
    console.log(list);
  }
}