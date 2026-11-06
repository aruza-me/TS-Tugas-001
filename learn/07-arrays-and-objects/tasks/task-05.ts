/**
 * You are developing a simple exam analytics system.
 * Tasks:
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const studentScores = students.map((s) => {
    let score = 0;
    for (let i = 0; i < s.answers.length; i++) {
        if (s.answers[i] === correctAnswers[i]) {
            score += 20;
        }
    }
    return { name: s.name, score };
});

const passed = studentScores.filter((s) => s.score > 70);
const highestStudent = [...studentScores].sort((a, b) => b.score - a.score)[0];
const classAverage =
    studentScores.reduce((sum, s) => sum + s.score, 0) / studentScores.length;

console.log("1. Student Scores:", studentScores);
console.log("2. Passed Students:", passed);
console.log("3. Highest Score Student:", highestStudent);
console.log("4. Class Average:", classAverage);

export { };
