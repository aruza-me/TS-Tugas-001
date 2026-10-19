
function Factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }

  let result: number = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log("=== Activity 5: Factorial Calculator ===");

const numbersToTest: number[] = [0, 1, 4, 5, 7];

for (const num of numbersToTest) {
  const result: number = Factorial(num);
  console.log(`${num}! = ${result}`);
}
