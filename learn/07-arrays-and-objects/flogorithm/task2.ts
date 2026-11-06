const temperatures: number[] = [29, 31, 28, 30, 32, 27, 29];
console.log("===== WEEKLY TEMPERATURE LOG =====");
temperatures.map((temp, i) => {
  console.log(`Day ${i + 1} : ${temp} C`);
});
const total: number = temperatures.reduce((sum, temp) => sum + temp, 0);
const average: number = total / temperatures.length;
console.log(`Total Temperature   : ${total} C`);
console.log(`Average Temperature : ${average.toFixed(2)} C`);
export {};
