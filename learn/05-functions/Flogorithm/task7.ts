
function PrintReceiptLine(itemName: string, quantity: number, price: number): void {

  const subtotal: number = quantity * price;

  const formattedItem: string = itemName.padEnd(20);
  const formattedQty: string = quantity.toString().padStart(4);
  const formattedPrice: string = `Rp ${price.toLocaleString("id-ID")}`.padStart(12);
  const formattedSubtotal: string = `Rp ${subtotal.toLocaleString("id-ID")}`.padStart(14);

  console.log(`| ${formattedItem} | ${formattedQty} | ${formattedPrice} | ${formattedSubtotal} |`);
}

// Main Program
console.log("=== Activity 7: Formatted Receipt Printer ===");
console.log("-".repeat(60));
console.log(`| ${"Item Name".padEnd(20)} | ${"Qty".padStart(4)} | ${"Price".padStart(12)} | ${"Subtotal".padStart(14)} |`);
console.log("-".repeat(60));

PrintReceiptLine("Caramel Macchiato", 2, 35000);
PrintReceiptLine("Butter Croissant", 3, 22000);
PrintReceiptLine("Mineral Water", 1, 10000);
PrintReceiptLine("Espresso Single", 2, 18000);

console.log("-".repeat(60));
