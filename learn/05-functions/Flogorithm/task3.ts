/**
 * Activity 3: Sum of Two Numbers
 * 
 * Flowgorithm Concept:
 * - Function with multiple parameters and return value.
 * 
 * Description:
 * Create a function named `AddNumbers` that takes two number parameters
 * and returns their sum. Call the function with two arguments and print the result.
 */

// Function Definition
function AddNumbers(a: number, b: number): number {
  return a + b;
}

// Main Program
console.log("=== Activity 3: Sum of Two Numbers ===");

const num1: number = 15;
const num2: number = 27;
const sumResult: number = AddNumbers(num1, num2);

console.log(`The sum of ${num1} and ${num2} is: ${sumResult}`);

// Additional demonstration call
console.log(`AddNumbers(100, 250) = ${AddNumbers(100, 250)}`);
