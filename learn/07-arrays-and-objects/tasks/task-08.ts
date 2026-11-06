/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const employeeAverages = employees.map((e) => {
    const total = e.projects.reduce((sum, p) => sum + p.score, 0);
    return { name: e.name, averageScore: total / e.projects.length };
});

const above85 = employeeAverages.filter((e) => e.averageScore > 85);

const hasProjectBelow80 = employees
    .filter((e) => e.projects.some((p) => p.score < 80))
    .map((e) => e.name);

console.log("1. Employee Averages:", employeeAverages);
console.log("2. Average > 85:", above85);
console.log("3. Has Project < 80:", hasProjectBelow80);

export { };
