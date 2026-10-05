console.log("Task 1: ");
let starAmount: number = 0;
for (let d = 5; d >= 1; d--) {
  console.log("*".repeat(d));
  starAmount += d;
}
console.log(`Star amount for task 1: ${starAmount}`);
console.log("Task 2: ");
let starAmount2: number = 0;
for (let d = 1; d <= 3; d++) {
  console.log("*".repeat(d));
  starAmount2 += d;
}
for (let d = 2; d >= 1; d--) {
  console.log("*".repeat(d));
  starAmount2 += d;
}
console.log(`Star amount for task 2: ${starAmount2}`);
console.log("Task 3: ");
let starAmount3: number = 0;
for (let d = 1; d <= 2; d++) {
  console.log("*".repeat(d));
  starAmount3 += d;
}
for (let d = 2; d >= 1; d--) {
  console.log(" ".repeat(3 - d) + "*".repeat(d));
  starAmount3 += d;
}
console.log(`Star amount for task 3: ${starAmount3}`);
