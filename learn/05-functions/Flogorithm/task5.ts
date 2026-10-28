function Factorial(n: number): number {
  if (n < 0) {
    console.log(`Factorial is not defined for negative number`);
    return NaN;
  }
  let result: number = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("=== Factorial Calculator ===");
const number: number = 5;
const result: number = Factorial(number);
console.log(`${number}! = ${result}`);
