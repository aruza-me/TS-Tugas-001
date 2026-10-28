function BMICategory(weight: number, height: number): string {
  const bmi: number = weight / (height * height);
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
console.log("=== BMI Category Function ===");
const testPeople = [
  { name: "asep", weight: 55, height: 1.65 },
];
testPeople.forEach(person => {
  console.log(`name: ${person.name} - (${person.weight} kg, ${person.height} m) -> BMI: ${(person.weight / (person.height * person.height)).toFixed(2)} -> Category: ${BMICategory(person.weight, person.height)}`);
});