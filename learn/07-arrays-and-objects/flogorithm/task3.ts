const scores: number[] = [78, 92, 85, 67, 90];
let highestScore: number = scores[0];
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > highestScore) {
    highestScore = scores[i];
  }
}
console.log("===== HIGHEST SCORE FINDER =====");
console.log(`Scores : ${scores.join(", ")}`);
console.log(`Highest Score : ${highestScore}`);
