// 1. Rounding Methods
console.log("Round:", Math.round(4.6));   // 5
console.log("Floor:", Math.floor(4.9));    // 4
console.log("Ceil:", Math.ceil(4.1));      // 5
console.log("Trunc:", Math.trunc(4.9));    // 4

// 2. Absolute Value and Sign
console.log("Absolute:", Math.abs(-10));   // 10

// 3. Square Root, Cube Root and Power
console.log("Square Root:", Math.sqrt(64)); // 8
console.log("Cube Root:", Math.cbrt(27));   // 3
console.log("Power:", Math.pow(3, 2));      // 9
console.log("Exponentiation:", 3 ** 2);     // 9

// 4. Maximum and Minimum
console.log("Maximum:", Math.max(10, 20, 5)); // 20
console.log("Minimum:", Math.min(10, 20, 5)); // 5

// 5. Random Numbers
console.log("Random:", Math.random()); // 0 inclusive, 1 exclusive

// Random integer between 1 and 10
console.log(
  "Random Integer:",
  Math.floor(Math.random() * 10) + 1
);

// 6. Mathematical Constants
console.log("PI:", Math.PI);
console.log("Euler's Number:", Math.E);
console.log("Square Root of 2:", Math.SQRT2);
console.log("Natural Log of 2:", Math.LN2);

// 7. Logarithms
console.log("Natural Log:", Math.log(1)); // 0

// 8. Trigonometric Methods (angles in radians)
console.log("Sin:", Math.sin(0)); // 0
console.log("Cos:", Math.cos(0)); // 1

// 9. Other Useful Examples
console.log("Round 4.3:", Math.round(4.3)); // 4
console.log("Round 4.5:", Math.round(4.5)); // 5
console.log("Absolute -50:", Math.abs(-50)); // 50
console.log("Sqrt 81:", Math.sqrt(81)); // 9
console.log("Max:", Math.max(4, 12, 7)); // 12
console.log("Min:", Math.min(4, 12, 7)); // 4
