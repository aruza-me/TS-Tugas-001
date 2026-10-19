/**
 * Activity 4: Coffee Price Calculator with Default Discount
 * 
 * Flowgorithm Concept:
 * - Function with default parameter handling / fallback conditions.
 * 
 * Description:
 * Create a function named `FinalPrice` that takes a `price` and a `discount` percentage.
 * If the discount parameter is 0, fall back to a default of 5. Return the final price
 * after the discount and call it twice (once with 0, once with a specific discount).
 */

// Function Definition
function FinalPrice(price: number, discount: number = 0): number {
  // If discount is 0, fall back to default discount of 5%
  const effectiveDiscount: number = discount === 0 ? 5 : discount;
  const discountAmount: number = (price * effectiveDiscount) / 100;
  return price - discountAmount;
}

// Main Program
console.log("=== Activity 4: Coffee Price Calculator with Default Discount ===");

const coffeePrice: number = 30000;

// Call 1: With 0 discount (falls back to default 5%)
const priceWithDefaultDiscount: number = FinalPrice(coffeePrice, 0);
console.log(`Original Price: Rp ${coffeePrice.toLocaleString("id-ID")}`);
console.log(`With 0% input (Default 5% applied): Rp ${priceWithDefaultDiscount.toLocaleString("id-ID")}`);

// Call 2: With a specific discount (e.g., 15%)
const specificDiscount: number = 15;
const priceWithSpecificDiscount: number = FinalPrice(coffeePrice, specificDiscount);
console.log(`With ${specificDiscount}% discount: Rp ${priceWithSpecificDiscount.toLocaleString("id-ID")}`);
