function Factorial(n: number): number {
  let result: number = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("=== Activity 5: Factorial Calculator ===");
const numbersToTest: number[] = [0, 1, 4, 5, 7];
for (let i = 0; i < numbersToTest.length; i++) {
  const result: number = Factorial(numbersToTest[i]);
  console.log(`${numbersToTest[i]}! = ${result}`);
}
