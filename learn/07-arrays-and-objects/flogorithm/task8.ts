const originalScores: number[] = [88, 72, 95, 60, 81];
const sortedScores: number[] = [...originalScores].sort((a, b) => a - b);
console.log("===== SCORE RANKING =====");
console.log(`Original Scores : ${originalScores.join(", ")}`);
console.log(`Sorted Scores   : ${sortedScores.join(", ")}`);