/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 *
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true,
  },
  {
    name: "Budi",
    major: "Networking",
    active: false,
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true,
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true,
  },
  {
    name: "Eka",
    major: "Networking",
    active: false,
  },
];

function countActiveStudents() {
  let total: number = 0;
  let countActive: number = 0;
  let countInactive: number = 0;
  for (let i = 0; i < students.length; i++) {
    total++;
    if (students[i].active) {
      countActive++;
    } else {
      countInactive++;
    }
  }
  return { total, countActive, countInactive };
}
function countStudentsByMajor() {
  let countSE: number = 0;
  let countNW: number = 0;
  let countMM: number = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].major === "Software Engineering") {
      countSE++;
    } else if (students[i].major === "Networking") {
      countNW++;
    } else if (students[i].major === "Multimedia") {
      countMM++;
    }
  }
  return { countSE, countNW, countMM };
}

function printEnrollmentReport() {
  let active = countActiveStudents();
  let major = countStudentsByMajor();
  console.log(`Total Students: ${active.total}`);
  console.log(`Active Students: ${active.countActive}`);
  console.log(`Inactive Students: ${active.countInactive}`);
  console.log(`Software Engineering Students: ${major.countSE}`);
  console.log(`Networking Students: ${major.countNW}`);
  console.log(`Multimedia Students: ${major.countMM}`);
}
printEnrollmentReport();