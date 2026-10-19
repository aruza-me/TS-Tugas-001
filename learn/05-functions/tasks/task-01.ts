/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */
type StudentScore = {
  Name: string;
  MidTerm: number;
  Assigment: number;
  Final: number;
};
const Students: StudentScore[] = [
  { Name: "Alya", Assigment: 85, MidTerm: 80, Final: 92 },
  { Name: "Budi", Assigment: 78, MidTerm: 75, Final: 81 },
  { Name: "Citra", Assigment: 90, MidTerm: 88, Final: 95 },
];
function calculateFinalGrade(
  Assigment: number,
  MidTerm: number,
  Final: number,
): number {
  return Assigment * 0.3 + MidTerm * 0.3 + Final * 0.4;
}
Students.forEach((s, i) => {
  console.log(
    `${i + 1}. ${s.Name} = ${calculateFinalGrade(s.Assigment, s.MidTerm, s.Final).toFixed(2)}`,
  );
});
