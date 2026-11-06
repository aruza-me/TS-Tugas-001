const Studentscores = [
  { name: "asep", score: 80 },
  { name: "budi", score: 65 },
  { name: "cecep", score: 90 },
  { name: "doni", score: 72 },
  { name: "edi", score: 88 },
  { name: "fajar", score: 55 },
  { name: "gopal", score: 95 },
];
const allScores: number[] = Studentscores.map((s) => s.score);
const passedStudents = Studentscores.filter((s) => s.score >= 75);
const passedStudentNames: string[] = passedStudents.map((s) => s.name);
const totalScore: number = Studentscores.reduce((sum, s) => sum + s.score, 0);
console.log("===== PASSING GRADE COUNTER =====");
console.log(`Scores : ${allScores.join(", ")}`);
console.log(`Students Passed : ${passedStudents.length} out of ${Studentscores.length}`);
console.log(`The average score is : ${(totalScore / Studentscores.length).toFixed(2)}`);
console.log(`The students that pass are : ${passedStudentNames.join(", ")}`);
export {};
