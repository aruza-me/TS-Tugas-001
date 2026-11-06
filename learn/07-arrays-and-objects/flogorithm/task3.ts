const scores: number[] = [78, 92, 85, 67, 90];
const highestScore: number = [...scores].sort((a, b) => b - a)[0];
console.log("===== HIGHEST SCORE FINDER =====");
console.log(`Scores : ${scores.join(", ")}`);
console.log(`Highest Score : ${highestScore}`);
export {};
