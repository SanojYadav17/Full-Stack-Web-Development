// Trim
let msg = "   Hello World!    ";
msg = msg.trim();
let password = prompt("Set your password");
console.log(password.trim());


// Uppercase
let name = "Sanoj Yadav";
name = name.toUpperCase();
console.log(name); // SANOJ YADAV


// Lowercase
let SureName = "Sanoj Yadav";
SureName = SureName.toLowerCase();
console.log(SureName); // sanoj yadav


// IndexOf
let str = "Manoj Yadav";
str.indexOf("Manoj");
str.indexOf("Yadav");
str.indexOf("a");


// Method Chaining
let methodChaining = "   Hello World!    ";
let newMsg = methodChaining.trim();
console.log("After Trim :", newMsg);
console.log("After Uppercase :", methodChaining);
let newMassage = methodChaining.trim().toUpperCase();
console.log(newMassage); // HELLO WORLD!


// Slice Method
let Slicestr = "apnacollege";
console.log(Slicestr); // apnacollege
console.log(Slicestr.slice(5)); // college
console.log(Slicestr.slice(0, 6)); // apnace
console.log(Slicestr.slice(-6)); // college


// Replace Method
let replaceStr = "I am Sanoj Yadav";
console.log(replaceStr.replace("Sanoj", "Manoj")); // I am Manoj Yadav
console.log(replaceStr.replace( "S", "P")); // I am Panoj Yadav


// Repeat Method
let repeatStr = "Sanoj yadav ";
console.log(repeatStr.repeat(3)); // Sanoj yadav Sanoj yadav Sanoj yadav