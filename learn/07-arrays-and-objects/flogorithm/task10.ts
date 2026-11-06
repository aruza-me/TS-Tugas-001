const scoreMatrix: number[][] = [
  [85, 90, 88],
  [70, 65, 72],
  [95, 92, 98],
];
console.log("===== EXAM SCORE MATRIX =====");
scoreMatrix.map((examScores, i) => {
  const total: number = examScores.reduce((sum, score) => sum + score, 0);
  const average: number = total / examScores.length;
  console.log(`Student ${i + 1} : ${examScores.join(", ")} -> Total: ${total}, Average: ${average.toFixed(2)}`);
});
export {};
