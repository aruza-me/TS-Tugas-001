const scores: number[] = [80, 65, 90, 72, 88, 55, 95];
const passingScore: number = 75;
let passedCount: number = 0;

for (let i: number = 0; i < scores.length; i++) {
  if (scores[i] >= passingScore) {
    passedCount++;
  }
}

console.log("===== PASSING GRADE COUNTER =====");
console.log(`Scores : ${scores.join(", ")}`);
console.log(`Students Passed : ${passedCount} out of ${scores.length}`);
