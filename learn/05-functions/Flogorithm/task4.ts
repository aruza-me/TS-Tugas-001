function FinalPrice(price: number, discount: number): number {
  const finalDiscount: number = discount === 0 ? 5 : discount;
  const discountAmount: number = (price * finalDiscount) / 100;
  return price - discountAmount;
}
console.log("=== COFFEE PRICE CALCULATOR ===");
const coffeePrice: number = 50000;
const priceDefaultDiscount: number = FinalPrice(coffeePrice, 0);
const specificDiscount: number = 15;
const priceSpecificDiscount: number = FinalPrice(coffeePrice, specificDiscount);

console.log(`Original Price: Rp ${coffeePrice.toLocaleString("id-ID")}`);
console.log(`With default 5% discount: Rp ${priceDefaultDiscount.toLocaleString("id-ID")}`);
console.log(`With ${specificDiscount}% discount: Rp ${priceSpecificDiscount.toLocaleString("id-ID")}`);
