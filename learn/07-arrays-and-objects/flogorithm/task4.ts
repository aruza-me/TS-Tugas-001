const catalog = [
  { name: "Notebook", price: 8000 },
  { name: "Pen", price: 3000 },
  { name: "Eraser", price: 2500 },
  { name: "Ruler", price: 5000 },
  { name: "Pencil", price: 2000 },
];
console.log("===== CHEAPEST AND MOST EXPENSIVE ITEM FINDER =====");
catalog.map((item) => {
  console.log(`${item.name.padEnd(9)}: Rp${item.price.toLocaleString("id-ID")}`);
});
const sortedByPrice = [...catalog].sort((a, b) => a.price - b.price);
const cheapest = sortedByPrice[0];
const mostExpensive = sortedByPrice[sortedByPrice.length - 1];
console.log(`Most Cheapest Item : ${cheapest.name} (Rp${cheapest.price.toLocaleString("id-ID")})`);
console.log(`Most Expensive Item : ${mostExpensive.name} (Rp${mostExpensive.price.toLocaleString("id-ID")})`);
export {};
