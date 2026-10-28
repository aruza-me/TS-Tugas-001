function CalculateAverage(score1: number, score2: number, score3: number): number {
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
console.log("Student Grade Report System");
const students = [
  { name: "Ratu Amelia", score1: 85, score2: 90, score3: 88 },
  { name: "Bimo Prasetyo", score1: 60, score2: 55, score3: 58 },
];
console.log("Student Name | Average | Grade");
students.forEach((student, i) => {
  const avg: number = CalculateAverage(student.score1, student.score2, student.score3);
  const grade: string = DetermineGrade(avg);
  console.log(`${i + 1}. ${student.name} | ${avg.toFixed(2)} | ${grade}`);
});