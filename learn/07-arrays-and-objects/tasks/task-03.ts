/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const studentAttendance = attendance.map((a) => {
    const student = students.find((s) => s.id === a.studentId);
    return { name: student ? student.name : "", status: a.status };
});

const presentStudents = studentAttendance
    .filter((s) => s.status === "present")
    .map((s) => s.name);
const absentStudents = studentAttendance
    .filter((s) => s.status === "absent")
    .map((s) => s.name);
const lateStudents = studentAttendance
    .filter((s) => s.status === "late")
    .map((s) => s.name);

console.log("1. Present:", presentStudents);
console.log("2. Absent:", absentStudents);
console.log("3. Late:", lateStudents);
console.log("4. Attendance List:", studentAttendance);

export { };
