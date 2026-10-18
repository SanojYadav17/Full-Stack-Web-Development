const students ={
  name : "sharadha",
  age : 22,
  marks : 90,
  city : "Lucknow" 
} 
// update
console.log(students.city);
students.city = "Mumbai";
console.log(students.city);

// Add
console.log(students.gender);
students.gender = "female";
console.log(students.gender);

// Update
console.log(students.marks);
students.marks = "A";
console.log(students.marks);

// Adding array
students.marks =[90, 85, 95];
console.log(students.marks)
console.log(students);

// Delete
console.log(delete students.name);