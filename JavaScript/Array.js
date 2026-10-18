// // Array
// let fruits = ["apple", "banana", "orange"];
// let marks = [23,34,56,78,98];
// let info = ["Sanoj", 21, "Male", 5.8];
// console.log(fruits[0]);
// console.log(marks[2]);
// console.log(info[1]);


// // Array mutable
// let colors = ["red", "green", "blue"];
// colors[1] = "yellow";
// console.log(colors);


//  // Array Methods
// push() - add element at the end of array
// let ArrMethods=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
// console.log(ArrMethods.push("reverse"));
// console.log(ArrMethods);


// // pop() - remove element from the end of array
// let ArrMethod=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
// console.log(ArrMethod.pop());
// console.log(ArrMethod);


// // shift() - remove element from the start of array
// let ShiftMethod=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
// console.log(ShiftMethod.shift());
// console.log(ShiftMethod);


// // unshift() - add element at the start of array
// let UnshiftMethod=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
// console.log(UnshiftMethod.unshift("reverse"));
// console.log(UnshiftMethod);


// // IndexOf() - return the index of the element
// let IndexOfMethod=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
// console.log(IndexOfMethod.indexOf("splice"));
// console.log(IndexOfMethod.indexOf("Splice"));


// // includes() - return true if the element is present in the array otherwise false
// let IncludesMethod=["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
// console.log(IncludesMethod.includes("splice"));
// console.log(IncludesMethod.includes("Splice"));


// // concatenation method - add two array
// let primary = ["Sanoj", "Manoj", "PP",];
// let secondary = ["Abhishek", "Rishi", "Aman"];
// console.log(primary.concat(secondary));
// console.log(secondary.concat(primary));


// // Reverse method - reverse the array
// let reverseArr = ["push", "pop", "shift", "unshift", "slice", "splice", "concat", "join", "indexOf", "includes"];
// console.log(reverseArr.reverse());


// Slice method - return the selected elements in an array
// let slicesArray = ["Sanoj", "Manoj", "PP", "Abhishek"];
// console.log(slicesArray.slice());
// console.log(slicesArray.slice(1, 3));
// console.log(slicesArray.slice(2));
// console.log(slicesArray.slice(-2));



// Splice method - add or remove elements from an array
// let spliceArray = ["Sanoj", "Manoj", "PP", "Abhishek"];
// console.log(spliceArray);
// console.log(spliceArray.splice(2));
// console.log(spliceArray);
// console.log(spliceArray.splice(0, 1));
// console.log(spliceArray);
// console.log(spliceArray.splice(1, 2, "Rishi", "Aman"));
// console.log(spliceArray);


// Sort method - sort the array in ascending order
// let sortArr = ["monday", "sunday", "wednessday", "thursday", "friday", "tuesday", "saturday"];
// console.log(sortArr.sort());
// let sortNum = [23, 45, 12, 67, 89, 34, 56];
// console.log(sortNum.sort());


// Array References 
// let arr = ['a', 'b', 'c'];
// let arr2 = arr;
// arr2.push('d');
// console.log(arr);
// arr == arr2;


// Constant Array
// const constantArr = ["Sanoj", "Manoj", "PP", "Abhishek"];
// console.log(constantArr.push("Rishi"));
// console.log(constantArr);
// console.log(constantArr.pop());
// console.log(constantArr);


// Nested Array
let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(nums);
console.log(nums[0][2]);

