/**
 * Activity 9: Global vs Local Counter
 * 
 * Flowgorithm Concept:
 * - Variable Scope: Understanding Global Variables vs Local Variables.
 * 
 * Description:
 * Demonstrate scope by creating a global variable named `TotalCalls` initialized to 0.
 * Create a function `LogCall` that increments `TotalCalls` by 1 and uses a local
 * variable to display the current call number. Call it 3 times and print the final global total.
 */

// Global Variable (accessible throughout the file)
let TotalCalls: number = 0;

// Function Definition
function LogCall(): void {
  // Increment the global counter
  TotalCalls++;

  // Local Variable (accessible only within this function's scope)
  const currentCallNumber: number = TotalCalls;

  console.log(`[Function LogCall] Local variable (currentCallNumber) = ${currentCallNumber}`);
}

// Main Program
console.log("=== Activity 9: Global vs Local Counter ===");
console.log(`Initial Global TotalCalls = ${TotalCalls}`);
console.log("--- Calling LogCall() 3 Times ---");

LogCall();
LogCall();
LogCall();

console.log("--- Finished Calls ---");
console.log(`Final Global TotalCalls = ${TotalCalls}`);
