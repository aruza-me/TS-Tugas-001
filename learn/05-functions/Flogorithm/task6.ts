/**
 * Activity 6: BMI Category Function
 * 
 * Flowgorithm Concept:
 * - Decision / Conditional statements (If-Else) inside a function.
 * 
 * Description:
 * Create a function named `BMICategory` that takes `weight` and `height` as parameters,
 * calculates the BMI, and returns the category as text (Underweight, Normal, Overweight, Obese)
 * using conditional statements.
 */

// Function Definition
function BMICategory(weight: number, height: number): string {
  // If height is provided in centimeters (e.g. 175), convert to meters (1.75)
  const heightInMeters: number = height > 3 ? height / 100 : height;

  if (heightInMeters <= 0 || weight <= 0) {
    throw new Error("Weight and height must be positive numbers.");
  }

  // Formula: BMI = weight (kg) / (height (m) ^ 2)
  const bmi: number = weight / (heightInMeters * heightInMeters);

  // Conditional categorization based on standard BMI thresholds
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25.0) {
    return "Normal";
  } else if (bmi < 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Main Program
console.log("=== Activity 6: BMI Category Function ===");

const testPeople = [
  { name: "Andi", weight: 48, height: 1.70 },
  { name: "Budi", weight: 65, height: 1.72 },
  { name: "Citra", weight: 80, height: 1.68 },
  { name: "Dewi", weight: 95, height: 1.65 },
];

for (const person of testPeople) {
  const category: string = BMICategory(person.weight, person.height);
  const bmiValue: number = person.weight / (person.height * person.height);
  console.log(
    `${person.name} (${person.weight} kg, ${person.height} m) -> BMI: ${bmiValue.toFixed(1)} -> Category: ${category}`
  );
}
