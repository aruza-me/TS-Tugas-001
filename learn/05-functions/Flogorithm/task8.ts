
function CalculateSubtotal(price: number, quantity: number): number {
  return price * quantity;
}

function CalculateShipping(subtotal: number): number {
  if (subtotal >= 200000) {
    return 0; 
  } else {
    return 15000; 
  }
}

console.log("=== Activity 8: Online Store Invoice ===");

console.log("\n--- Invoice 1 (Standard Shipping) ---");
const itemPrice1: number = 85000;
const itemQty1: number = 2;

const subtotal1: number = CalculateSubtotal(itemPrice1, itemQty1);
const shipping1: number = CalculateShipping(subtotal1);
const grandTotal1: number = subtotal1 + shipping1;

console.log(`Item Price    : Rp ${itemPrice1.toLocaleString("id-ID")}`);
console.log(`Quantity      : ${itemQty1}`);
console.log(`Subtotal      : Rp ${subtotal1.toLocaleString("id-ID")}`);
console.log(`Shipping Fee  : Rp ${shipping1.toLocaleString("id-ID")}`);
console.log(`Grand Total   : Rp ${grandTotal1.toLocaleString("id-ID")}`);

console.log("\n--- Invoice 2 (Free Shipping Promotion) ---");
const itemPrice2: number = 125000;
const itemQty2: number = 2;

const subtotal2: number = CalculateSubtotal(itemPrice2, itemQty2);
const shipping2: number = CalculateShipping(subtotal2);
const grandTotal2: number = subtotal2 + shipping2;

console.log(`Item Price    : Rp ${itemPrice2.toLocaleString("id-ID")}`);
console.log(`Quantity      : ${itemQty2}`);
console.log(`Subtotal      : Rp ${subtotal2.toLocaleString("id-ID")}`);
console.log(`Shipping Fee  : Rp ${shipping2.toLocaleString("id-ID")} (FREE SHIPPING!)`);
console.log(`Grand Total   : Rp ${grandTotal2.toLocaleString("id-ID")}`);
