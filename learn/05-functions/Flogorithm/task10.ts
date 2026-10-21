function CalculateAverage(
  score1: number,
  score2: number,
  score3: number,
): number {
  return (score1 + score2 + score3) / 3;
}
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
function PrintReport(name: string, average: number, grade: string): void {
  const formattedName: string = name.padEnd(16);
  const formattedAverage: string = average.toFixed(2).padStart(8);
  const formattedGrade: string = grade.padStart(6);
  console.log(`| ${formattedName} | ${formattedAverage} | ${formattedGrade} |`);
}
console.log("=== Activity 10: Student Grade Report System ===");
const students = [
  { name: "Ahmad Rizky", score1: 92, score2: 88, score3: 96 },
  { name: "Siti Rahma", score1: 78, score2: 82, score3: 74 },
];
console.log("-".repeat(38));
console.log(
  `| ${"Student Name".padEnd(16)} | ${"Average".padStart(8)} | ${"Grade".padStart(6)} |`,
);
console.log("-".repeat(38));
for (let i = 0; i < students.length; i++) {
  const currentStudent = students[i];
  const avg: number = CalculateAverage(
    currentStudent.score1,
    currentStudent.score2,
    currentStudent.score3,
  );
  const grade: string = DetermineGrade(avg);
  PrintReport(currentStudent.name, avg, grade);
}
