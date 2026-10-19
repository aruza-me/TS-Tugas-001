/**
 * Activity 5: Factorial Calculator
 * 
 * Flowgorithm Concept:
 * - Loop / Iteration inside a function to compute cumulative product.
 * 
 * Description:
 * Create a function named `Factorial` that takes a number as a parameter,
 * uses a loop to calculate the factorial (n!), and returns the result.
 * Call the function and print it.
 */

// Function Definition
function Factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }

  // 0! = 1 and 1! = 1
  let result: number = 1;

  // Using a loop to calculate factorial: n! = 1 * 2 * ... * n
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Main Program
console.log("=== Activity 5: Factorial Calculator ===");

const numbersToTest: number[] = [0, 1, 4, 5, 7];

for (const num of numbersToTest) {
  const result: number = Factorial(num);
  console.log(`${num}! = ${result}`);
}
