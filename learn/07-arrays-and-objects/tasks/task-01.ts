/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70.
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 *
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
   { name: "Andi", score: 85 },
   { name: "Citra", score: 91 },
   { name: "Deni", score: 74 },
   { name: "Raisya", score: 100 },
];
const nameOnly = students.map((s) => s.name);
const passedStudents = students.filter((s) => s.score >= 70);
const findStudents = students.filter((s) => s.name === "Citra");
const callAvg = students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log("1. Student Names:", nameOnly);
console.log("2. Passed Students:", passedStudents);
console.log("3. Find Citra:", findStudents);
console.log("4. Average Score:", callAvg);

export { };
