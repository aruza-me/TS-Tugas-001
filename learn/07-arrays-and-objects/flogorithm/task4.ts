const catalog = [
  { name: "Notebook", price: 8000 },
  { name: "Pen", price: 3000 },
  { name: "Eraser", price: 2500 },
  { name: "Ruler", price: 5000 },
  { name: "Pencil", price: 2000 },
];
console.log("===== CHEAPEST AND MOST EXPENSIVE ITEM FINDER =====");
for (let i = 0; i < catalog.length; i++) {
  console.log(`${catalog[i].name.padEnd(9)}: Rp${catalog[i].price.toLocaleString("id-ID")}`);
}
let minIndex: number = 0;
for (let i = 1; i < catalog.length; i++) {
  if (catalog[i].price < catalog[minIndex].price) {
    minIndex = i;
  }
}
let maxIndex: number = 0;
for (let i = 1; i < catalog.length; i++) {
  if (catalog[i].price > catalog[maxIndex].price) {
    maxIndex = i;
  }
}
console.log(`Most Cheapest Item : ${catalog[minIndex].name} (Rp${catalog[minIndex].price.toLocaleString("id-ID")})`);
console.log(`Most Expensive Item : ${catalog[maxIndex].name} (Rp${catalog[maxIndex].price.toLocaleString("id-ID")})`);