const members: string[] = ["Dinda", "Arka", "Bella", "Farrel", "Dominic"];
console.log("===== REVERSE ORDER PRINTER =====");
console.log("Original Order :");
members.map((m, i) => {
  console.log(`${i + 1}. ${m}`);
});
console.log("Reverse Order  :");
const reversedMembers: string[] = [...members].reverse();
reversedMembers.map((m, i) => {
  console.log(`${i + 1}. ${m}`);
});
export {};
