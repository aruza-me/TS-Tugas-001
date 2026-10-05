/**
 * The homeroom teacher receives attendance data for one class at following array.
 *
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];
let presentCount: number = 0;
let absentCount: number = 0;
const absentStudents: string[] = [];
for (let i = 0; i < attendances.length; i++) {
  if (attendances[i].present) {
    presentCount++;
  } else {
    absentCount++;
    absentStudents.push(attendances[i].name);
  }
}
const attendancePercentage: number = (presentCount / attendances.length) * 100;
console.log(`Number of Present Students: ${presentCount}`);
console.log(`Number of Absent Students: ${absentCount}`);
console.log(`Names of Absent Students: ${absentStudents.join(", ")}`);
console.log(`Attendance Percentage: ${attendancePercentage.toFixed(2)}%`);
