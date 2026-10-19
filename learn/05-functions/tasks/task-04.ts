/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: false },
  { name: "Citra", present: true },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
];

function printAttendanceReport(
  attendances: { name: string; present: boolean }[]
) {
  let totalPresent = 0;
  let totalAbsent = 0;
  let absentNames: string[] = [];

  for (let i = 0; i < attendances.length; i++) {
    if (attendances[i].present) {
      totalPresent++;
    } else {
      totalAbsent++;
      absentNames.push(attendances[i].name);
    }
  }
  console.log(`Attendance Report:`);
  console.log(`Total Present: ${totalPresent}`);
  console.log(`Total Absent: ${totalAbsent}`);
  console.log("Names of Absent Students:");
  for (let i = 0; i < absentNames.length; i++) {
    console.log(`${i+1}-${absentNames[i]}`);
  }
}
printAttendanceReport(attendances);
