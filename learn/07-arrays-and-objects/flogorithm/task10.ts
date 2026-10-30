const scoreMatrix: number[][] = [
  [85, 90, 88],
  [70, 65, 72],
  [95, 92, 98],
];
console.log("===== EXAM SCORE MATRIX =====");
for (let i = 0; i < scoreMatrix.length; i++) {
  let total: number = 0;
  const examScores: number[] = scoreMatrix[i];
  for (let j = 0; j < examScores.length; j++) {
    total += examScores[j];
  }
  const average: number = total / examScores.length;
  console.log(`Student ${i + 1} : ${examScores.join(", ")} -> Total: ${total}, Average: ${average.toFixed(2)}`);
}
