
function FinalPrice(price: number, discount: number = 0): number {
  // If discount is 0, fall back to default discount of 5%
  const effectiveDiscount: number = discount === 0 ? 5 : discount;
  const discountAmount: number = (price * effectiveDiscount) / 100;
  return price - discountAmount;
}

console.log("=== Activity 4: Coffee Price Calculator with Default Discount ===");

const coffeePrice: number = 30000;

const priceWithDefaultDiscount: number = FinalPrice(coffeePrice, 0);
console.log(`Original Price: Rp ${coffeePrice.toLocaleString("id-ID")}`);
console.log(`With 0% input (Default 5% applied): Rp ${priceWithDefaultDiscount.toLocaleString("id-ID")}`);

const specificDiscount: number = 15;
const priceWithSpecificDiscount: number = FinalPrice(coffeePrice, specificDiscount);
console.log(`With ${specificDiscount}% discount: Rp ${priceWithSpecificDiscount.toLocaleString("id-ID")}`);
