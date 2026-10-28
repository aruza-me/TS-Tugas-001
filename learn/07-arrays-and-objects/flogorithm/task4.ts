const products: string[] = ["Notebook", "Pen", "Eraser", "Ruler", "Pencil"];
const prices: number[] = [8000, 3000, 2500, 5000, 2000];

console.log("===== CHEAPEST ITEM FINDER =====");

for (let i: number = 0; i < products.length; i++) {
  console.log(`${products[i].padEnd(9)}: Rp${prices[i].toLocaleString("en-US")}`);
}

let minIndex: number = 0;
for (let i: number = 1; i < prices.length; i++) {
  if (prices[i] < prices[minIndex]) {
    minIndex = i;
  }
}

console.log(`Cheapest Item : ${products[minIndex]} (Rp${prices[minIndex].toLocaleString("en-US")})`);
