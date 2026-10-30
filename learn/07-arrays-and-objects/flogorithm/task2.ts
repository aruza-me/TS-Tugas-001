const temperatures: number[] = [29, 31, 28, 30, 32, 27, 29];
let total: number = 0;
console.log("===== WEEKLY TEMPERATURE LOG =====");
for (let i = 0; i < temperatures.length; i++) {
  console.log(`Day ${i + 1} : ${temperatures[i]} C`);
  total += temperatures[i];
}
const average: number = total / temperatures.length;
console.log(`Total Temperature   : ${total} C`);
console.log(`Average Temperature : ${average.toFixed(2)} C`);
