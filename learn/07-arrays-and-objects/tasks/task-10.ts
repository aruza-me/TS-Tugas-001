/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentResults = submissions.map((sub) => {
    let correct = 0;
    for (let i = 0; i < sub.answers.length; i++) {
        const q = questions.find((q) => q.id === sub.answers[i].questionId);
        if (q && q.correctAnswer === sub.answers[i].answer) {
            correct++;
        }
    }
    return {
        student: sub.student,
        score: correct * 25,
        correct: correct,
        wrong: questions.length - correct,
    };
});

const scores = studentResults.map((r) => ({ student: r.student, score: r.score }));
const answerSummary = studentResults.map((r) => ({
    student: r.student,
    correct: r.correct,
    wrong: r.wrong,
}));

const categories: string[] = [];
for (let i = 0; i < questions.length; i++) {
    if (!categories.includes(questions[i].category)) {
        categories.push(questions[i].category);
    }
}

const categoryAverages = categories.map((cat) => {
    const catQuestions = questions.filter((q) => q.category === cat);
    let correctCount = 0;
    const totalAttempts = catQuestions.length * submissions.length;

    for (let i = 0; i < submissions.length; i++) {
        for (let j = 0; j < catQuestions.length; j++) {
            const ans = submissions[i].answers.find(
                (a) => a.questionId === catQuestions[j].id
            );
            if (ans && ans.answer === catQuestions[j].correctAnswer) {
                correctCount++;
            }
        }
    }

    return {
        category: cat,
        averageScore: Number(((correctCount / totalAttempts) * 100).toFixed(2)),
    };
});

const totalStudents = studentResults.length;
const totalScore = studentResults.reduce((sum, r) => sum + r.score, 0);
const avgScore = Number((totalScore / totalStudents).toFixed(2));
const sortedScores = [...studentResults].sort((a, b) => b.score - a.score);
const highestScore = sortedScores[0].score;
const lowestScore = sortedScores[sortedScores.length - 1].score;
const passed = studentResults.filter((r) => r.score >= 75).length;
const failed = totalStudents - passed;
const passRate = Number(((passed / totalStudents) * 100).toFixed(2));

const finalAnalytics = {
    totalStudents: totalStudents,
    averageScore: avgScore,
    highestScore: highestScore,
    lowestScore: lowestScore,
    passedStudents: passed,
    failedStudents: failed,
    passRate: passRate,
};

console.log("1. Student Scores:", scores);
console.log("2. Correct & Wrong Summary:", answerSummary);
console.log("3. Category Averages:", categoryAverages);
console.log("4. Final Exam Analytics:", finalAnalytics);
const as: string = "apel"
console.log(`${as}.toUpperCase`)
export { };
