
function BMICategory(weight: number, height: number): string {

  const heightInMeters: number = height > 3 ? height / 100 : height;

  if (heightInMeters <= 0 || weight <= 0) {
    throw new Error("Weight and height must be positive numbers.");
  }

  const bmi: number = weight / (heightInMeters * heightInMeters);


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
