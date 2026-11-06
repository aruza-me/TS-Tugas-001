/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2, },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const andiBorrowings = borrowings.filter((b) => b.student === "Andi");

const borrowingDetails = borrowings.map((b) => {
    const book = books.find((bk) => bk.id === b.bookId);
    return {
        student: b.student,
        title: book ? book.title : "",
        category: book ? book.category : "",
        days: b.days,
    };
});

const programmingBorrowers = borrowingDetails
    .filter((b) => b.category === "Programming")
    .map((b) => b.student);

const totalTransactions = borrowings.length;
const averageDuration =
    borrowings.reduce((sum, b) => sum + b.days, 0) / borrowings.length;

const borrowedMoreThan7Days = borrowings
    .filter((b) => b.days > 7)
    .map((b) => b.student);

console.log("1. Andi's Borrowings:", andiBorrowings);
console.log("2. Borrowing Details:", borrowingDetails);
console.log("3. Borrowed Programming Book:", programmingBorrowers);
console.log("4. Total Transactions:", totalTransactions);
console.log("5. Average Duration:", averageDuration);
console.log("6. Borrowed > 7 Days:", borrowedMoreThan7Days);

export { };
