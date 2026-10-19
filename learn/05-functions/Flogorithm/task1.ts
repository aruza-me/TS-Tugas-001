/**
 * Activity 1: Welcome Message Printer
 * 
 * Flowgorithm Concept:
 * - Void Function (Procedure) with parameter.
 * 
 * Description:
 * Create a void function named `PrintWelcome` that takes a `name` as a string parameter
 * and prints a personalized welcome message. Call it from the main program.
 */

// Procedure Definition
function PrintWelcome(name: string): void {
  console.log(`Hello, ${name}! Welcome to the TypeScript programming worksheet.`);
}

// Main Program
console.log("=== Activity 1: Welcome Message Printer ===");
PrintWelcome("Alice");
PrintWelcome("Bob");
