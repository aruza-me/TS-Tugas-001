/**
 * Activity 2: Square Calculator
 * 
 * Flowgorithm Concept:
 * - Function with parameter and return value.
 * 
 * Description:
 * Create a function named `Square` that takes a number as a parameter and returns
 * the squared value. Call the function and print the result.
 */

// Function Definition
function Square(num: number): number {
  return num * num;
}

// Main Program
console.log("=== Activity 2: Square Calculator ===");

const number1: number = 5;
const result1: number = Square(number1);
console.log(`Square of ${number1} = ${result1}`);

const number2: number = 12;
const result2: number = Square(number2);
console.log(`Square of ${number2} = ${result2}`);

const number3: number = -7;
const result3: number = Square(number3);
console.log(`Square of ${number3} = ${result3}`);
