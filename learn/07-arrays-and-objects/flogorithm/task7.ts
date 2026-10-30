const members: string[] = ["Dinda", "Arka", "Bella", "Farrel", "Dominic"];
console.log("===== REVERSE ORDER PRINTER =====");
console.log("Original Order :");
for (let i = 0; i < members.length; i++) {
  console.log(i + 1 + ". " + members[i]);
}
console.log("Reverse Order  :");
for (let i = members.length - 1; i >= 0; i--) {
  console.log(members.length - i + ". " + members[i]);
}
