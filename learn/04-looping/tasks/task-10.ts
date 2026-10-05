/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 *
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
  { student: "Alya", submitted: true, score: 92 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 78 },
  { student: "Dimas", submitted: true, score: 65 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 84 },
  { student: "Gita", submitted: true, score: 90 },
  { student: "Hana", submitted: true, score: 73 },
];
let YesSubmit: number = 0;
let NoSubmit: number = 0;
let Pass: number = 0;
let Revise: number = 0;
let NoSubmitNames: string[] = [];
let ReviseNames: string[] = [];
let TotalScore: number = 0;
for (let i = 0; i < submissions.length; i++) {
  TotalScore += submissions[i].score;
  if (submissions[i].submitted) {
    YesSubmit++;
    if (submissions[i].score >= 75) {
      Pass++;
    } else {
      Revise++;
      ReviseNames.push(submissions[i].student);
    }
  } else {
    NoSubmit++;
    NoSubmitNames.push(submissions[i].student);
  }
}
const ClassAverage = TotalScore / submissions.length;
console.log(`Number of Students Who Submitted: ${YesSubmit}`);
console.log(`Number of Students Who Did Not Submit: ${NoSubmit}`);
console.log(`Number of Students Who Passed: ${Pass}`);
console.log(`Number of Students Who Must Revise: ${Revise}`);
console.log(`Class Average Score: ${ClassAverage.toFixed(2)}`);
console.log(`Names of Students Who Did Not Submit: ${NoSubmitNames.join(", ")}`);
console.log(`Names of Students Who Must Revise: ${ReviseNames.join(", ")}`);
