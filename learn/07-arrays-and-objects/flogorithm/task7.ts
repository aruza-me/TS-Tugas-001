const members: string[] = ["Dinda", "Arka", "Bella", "Farrel"];

console.log("===== REVERSE ORDER PRINTER =====");
console.log(`Original Order : ${members.join(", ")}`);
console.log("Reverse Order  :");

for (let i: number = members.length - 1; i >= 0; i--) {
  console.log(members[i]);
}
