function Square(num: number): number {
  return num * num;
}
console.log("=== SQUARE CALCULATOR ===");
const number: number = 6;
const result: number = Square(number);
console.log(`Square of ${number} is ${result}`);