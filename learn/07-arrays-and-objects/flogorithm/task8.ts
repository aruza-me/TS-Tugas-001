const originalScores: number[] = [88, 72, 95, 60, 81];

const sortedScores: number[] = [...originalScores];

const n: number = sortedScores.length;
for (let i: number = 0; i < n - 1; i++) {
  for (let j: number = 0; j < n - 1 - i; j++) {
    if (sortedScores[j] > sortedScores[j + 1]) {
      const temp: number = sortedScores[j];
      sortedScores[j] = sortedScores[j + 1];
      sortedScores[j + 1] = temp;
    }
  }
}

console.log("===== SCORE RANKING =====");
console.log(`Original Scores : ${originalScores.join(", ")}`);
console.log(`Sorted Scores   : ${sortedScores.join(", ")}`);
