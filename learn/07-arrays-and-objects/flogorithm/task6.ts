const Studentscores = [
  { name: "asep", score: 80, },
  { name: "budi", score: 65, },
  { name: "cecep", score: 90, },
  { name: "doni", score: 72, },
  { name: "edi", score: 88, },
  { name: "fajar", score: 55, },
  { name: "gopal", score: 95, }
];
let passedStudent: string[] = [];
let allScores: number[] = [];
let passedCount: number = 0;
let totalScore: number = 0;
for (let i = 0; i < Studentscores.length; i++) {
  allScores.push(Studentscores[i].score);
  totalScore += Studentscores[i].score;
  if (Studentscores[i].score >= 75) {
    passedCount++;
    passedStudent.push(Studentscores[i].name);
  }
}
console.log("===== PASSING GRADE COUNTER =====");
console.log(`Scores : ${allScores.join(", ")}`);
console.log(`Students Passed : ${passedCount} out of ${Studentscores.length}`);
console.log(`The average score is : ${(totalScore / Studentscores.length).toFixed(2)}`);
console.log(`The students that pass are : ${passedStudent.join(", ")}`);