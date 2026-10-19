/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
};

const enrollments: Enrollment[] = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function getTotalEnrollments(data: Enrollment[]): number {
  return data.length;
}

function getCompletedEnrollments(data: Enrollment[]): number {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].completed) {
      count++;
    }
  }
  return count;
}

function getIncompleteEnrollments(data: Enrollment[]): number {
  return getTotalEnrollments(data) - getCompletedEnrollments(data);
}

function getCompletionPercentage(data: Enrollment[]): number {
  return (getCompletedEnrollments(data) / getTotalEnrollments(data)) * 100;
}

function findHighestScore(data: Enrollment[]): number {
  let highest = data[0].score;
  for (let i = 1; i < data.length; i++) {
    if (data[i].score > highest) {
      highest = data[i].score;
    }
  }
  return highest;
}

function findLowestScore(data: Enrollment[]): number {
  let lowest = data[0].score;
  for (let i = 1; i < data.length; i++) {
    if (data[i].score < lowest) {
      lowest = data[i].score;
    }
  }
  return lowest;
}

function calculateTotalScore(data: Enrollment[]): number {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].score;
  }
  return total;
}

function calculateAverageScore(data: Enrollment[]): number {
  return calculateTotalScore(data) / getTotalEnrollments(data);
}

function countPassingStudents(data: Enrollment[]): number {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].score >= 75) {
      count++;
    }
  }
  return count;
}

function getPassingStudentNames(data: Enrollment[]): string[] {
  let names: string[] = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].score >= 75) {
      names.push(data[i].student);
    }
  }
  return names;
}

function getEnrollmentsByCourse(
  data: Enrollment[],
  courseName: string,
): Enrollment[] {
  let filtered: Enrollment[] = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].course === courseName) {
      filtered.push(data[i]);
    }
  }
  return filtered;
}

function countStudentsByCourse(data: Enrollment[], courseName: string): number {
  return getTotalEnrollments(getEnrollmentsByCourse(data, courseName));
}

function calculateAverageScoreByCourse(
  data: Enrollment[],
  courseName: string,
): number {
  return calculateAverageScore(getEnrollmentsByCourse(data, courseName));
}

function getUniqueCourses(data: Enrollment[]): string[] {
  let courses: string[] = [];
  for (let i = 0; i < data.length; i++) {
    if (!courses.includes(data[i].course)) {
      courses.push(data[i].course);
    }
  }
  return courses;
}

function calculateTotalLearningHours(data: Enrollment[]): number {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].duration;
  }
  return total;
}

function calculateAverageLearningDuration(data: Enrollment[]): number {
  return calculateTotalLearningHours(data) / getTotalEnrollments(data);
}

function displayCompletionStats(data: Enrollment[]): void {
  console.log(`Completion Statistics:`);
  console.log(`- Total enrollments: ${getTotalEnrollments(data)}`);
  console.log(`- Completed enrollments: ${getCompletedEnrollments(data)}`);
  console.log(`- Incomplete enrollments: ${getIncompleteEnrollments(data)}`);
  console.log(
    `- Completion percentage: ${getCompletionPercentage(data).toFixed(1)}%`,
  );
}

function displayAcademicStats(data: Enrollment[]): void {
  console.log(`Academic Statistics:`);
  console.log(`- Highest score: ${findHighestScore(data)}`);
  console.log(`- Lowest score: ${findLowestScore(data)}`);
  console.log(`- Average score: ${calculateAverageScore(data).toFixed(2)}`);
  console.log(
    `- Students with passing scores (>= 75): ${countPassingStudents(data)} (${getPassingStudentNames(data).join(", ")})`,
  );
}

function displayCourseStats(data: Enrollment[]): void {
  const courses = getUniqueCourses(data);
  console.log(`Course Statistics:`);
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];
    console.log(`- Course: ${course}`);
    console.log(`  Number of students: ${countStudentsByCourse(data, course)}`);
    console.log(
      `  Average score: ${calculateAverageScoreByCourse(data, course).toFixed(2)}`,
    );
  }
}

function displayLearningStats(data: Enrollment[]): void {
  console.log(`Learning Statistics:`);
  console.log(`- Total learning hours: ${calculateTotalLearningHours(data)}`);
  console.log(
    `- Average learning duration: ${calculateAverageLearningDuration(data).toFixed(2)} hours`,
  );
}

function displayDashboard(data: Enrollment[]): void {
  console.log(`=== Online Learning Dashboard ===\n`);
  displayCompletionStats(data);
  console.log();
  displayAcademicStats(data);
  console.log();
  displayCourseStats(data);
  console.log();
  displayLearningStats(data);
}

displayDashboard(enrollments);
