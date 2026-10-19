/**
 * Activity 10: Student Grade Report System
 * 
 * Flowgorithm Concept:
 * - Modular programming with multiple functions and procedures integrated inside a loop.
 * 
 * Description:
 * Create three separate functions/procedures:
 * 1. `CalculateAverage(score1, score2, score3)` to return the average.
 * 2. `DetermineGrade(average)` to return a letter grade (A >= 90, B 80-89, C 70-79, D 60-69, F below 60).
 * 3. `PrintReport(name, average, grade)` to print a formatted report line.
 * Use a loop in the main program to process 2 students, calling these functions for each.
 */

// Function 1: Return average of 3 scores
function CalculateAverage(score1: number, score2: number, score3: number): number {
  return (score1 + score2 + score3) / 3;
}

// Function 2: Determine letter grade based on average
function DetermineGrade(average: number): string {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Procedure 3: Print a formatted report line
function PrintReport(name: string, average: number, grade: string): void {
  const formattedName: string = name.padEnd(16);
  const formattedAverage: string = average.toFixed(2).padStart(8);
  const formattedGrade: string = grade.padStart(6);

  console.log(`| ${formattedName} | ${formattedAverage} | ${formattedGrade} |`);
}

// Main Program
console.log("=== Activity 10: Student Grade Report System ===");

// Student dataset for 2 students
const students = [
  { name: "Ahmad Rizky", score1: 92, score2: 88, score3: 96 },
  { name: "Siti Rahma", score1: 78, score2: 82, score3: 74 },
];

console.log("-".repeat(38));
console.log(`| ${"Student Name".padEnd(16)} | ${"Average".padStart(8)} | ${"Grade".padStart(6)} |`);
console.log("-".repeat(38));

// Loop through the students and process each with our functions
for (let i = 0; i < students.length; i++) {
  const currentStudent = students[i];
  
  // 1. Calculate average
  const avg: number = CalculateAverage(
    currentStudent.score1,
    currentStudent.score2,
    currentStudent.score3
  );

  // 2. Determine letter grade
  const grade: string = DetermineGrade(avg);

  // 3. Print formatted report line
  PrintReport(currentStudent.name, avg, grade);
}

console.log("-".repeat(38));
