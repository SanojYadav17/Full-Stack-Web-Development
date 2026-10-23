function funcName(){
  console.log("Hello, World!");
}
funcName();

function printName(){
  console.log("Sanoj Yadav");
}
printName();

function print1to5(){
  for(let i=1; i<=5; i++){
    console.log(i);
  }
}
print1to5();

function isAdult(){
  let age = 20;
  if(age>=18){
    console.log("You are an adult.");
  } else {
    console.log("You are not an adult.");
  }
}
isAdult();

// Function with Arguments
function argFunction(name, age){
  console.log(`${name} is ${age} years old.`);
}
argFunction("Sanoj", 21);

// Sum of these numbers with function with arguments
function sum (num1, num2){
  console.log(num1 + num2);
}
sum(17, 16);
sum(13, 69);
sum(1, 190);

// create a function that gives us the average of 3 numbers
function average(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;
  console.log(`The average of ${num1}, ${num2}, and ${num3} is: ${avg}`);
}
average(13, 19, 96);

// Return Keyword
function add(num1, num2) {
  return num1 + num2;
}
// method 1:
console.log(add(17, 16, 190)); //ya to hum variable bana ke store kar sakte hai ya direct console.log me print kar sakte hai

// method 2:
let result = add(17, 16, 190);
console.log(result);

// Method 3:
console.log(add(add(17, 16), 190));

// Example of function with return keyword:
// create a function that returns the sum of numbers from 1 to n
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++){
    sum += i;
  }
  return sum;
}

// Create a function that returns the concatenation of all strings in an array
let stringArray = ["Hello", " ", "World", "!"];
function concatenateStrings(stringArray) {
  let result = "";
  for (let i = 0; i < stringArray.length; i++) {
    result += stringArray[i];
  }
  return result;
}

// Scope: (1: Function Scope)(2: Block Scope)(3: Lexical Scope)
// 1: Function Scope
let sum = 54; //Global Scope
function calSum(a, b) {
  let sum = a + b; // Function Scope
  console.log(sum); // If function variable not write then they take global variable
}
// let sum = a + b; not executable outside the function
calSum(1, 2);
console.log(sum); // they print Global variable

// 2: Block Scope
// Example 1:
{
  let a = 25;
  console.log(a) // Block Scope
}
// console.log(a) not execute outside the curly braces {}

// Example 2:
for (let i = 1; i <= 5; i++){
  console.log(i) // Block Scope
}
// console.log(i) not execute outside the curly braces {}

// Example 3:
let age = 25;
if(age >= 18){
  let str = "adult";
  console.log(str); // Block Scope
}

// 3: Lexical Scope
function outerFunc() {
  let x = 6;
  let y = 5;
  function innerFunc(){ // function scope
    let a = 3;
    console.log(x);
    console.log(y);
    console.log(a);
  }
  // console.log(a);
  innerFunc();
}
outerFunc();

// Example:
let greeting = "hello";
function changeGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreen() {
    console.log(greet);
  }
  innerGreen();
}
console.log(greeting);
changeGreet();

//  Function Expressions
let name = "Sanoj Yadav";
let Sum = function() {
  return a + b;
}
let hello = function() {
  console.log("hello");
}

// Higher Order Functions (Argument functions)
function multipleGreet(func, count){
  for(let i=0; i<=count; i++){
    func();
  }
}
let greet  = function() {
  console.log("Hello, World!");
}
multipleGreet(greet, 5);

// Higher Order Functions (Return functions)
function oddOrEvenFactory(request) {
  if (request == "odd") {
    return function (n) {
      console.log(`${n} is odd: ${n % 2 !== 0}`);
    };
  } else if (request == "even") {
    return function (n) {
      console.log(`${n} is even: ${n % 2 === 0}`);
    };
  } else {
    console.log("Invalid request. Please choose 'odd' or 'even'.");
  }
}
let request = "odd";


// Method 
const calculator ={
  num: 55,
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  }
}