// Array
let fruits = ["apple", "banana", "orange"];
let marks = [23,34,56,78,98];
let info = ["Sanoj", 21, "Male", 5.8];
console.log(fruits[0]);
console.log(marks[2]);
console.log(info[1]);


// Array mutable
let colors = ["red", "green", "blue"];
colors[1] = "yellow";
console.log(colors);


 // Array Methods
push() - add element at the end of array
let ArrMethods=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
console.log(ArrMethods.push("reverse"));
console.log(ArrMethods);


// pop() - remove element from the end of array
let ArrMethod=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
console.log(ArrMethod.pop());
console.log(ArrMethod);


// shift() - remove element from the start of array
let ShiftMethod=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
console.log(ShiftMethod.shift());
console.log(ShiftMethod);


// unshift() - add element at the start of array
let UnshiftMethod=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
console.log(UnshiftMethod.unshift("reverse"));
console.log(UnshiftMethod);


// IndexOf() - return the index of the element
let IndexOfMethod=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
console.log(IndexOfMethod.indexOf("splice"));
console.log(IndexOfMethod.indexOf("Splice"));


// includes() - return true if the element is present in the array otherwise false
let IncludesMethod=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
console.log(IncludesMethod.includes("splice"));
console.log(IncludesMethod.includes("Splice"));
