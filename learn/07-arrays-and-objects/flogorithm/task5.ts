const members: string[] = ["Budi", "Siti", "Andi", "Fikri", "Dewi"];
const searchTerm: string = "Fikri";

console.log("===== STUDENT NAME SEARCH =====");
console.log(`Searching for: ${searchTerm}`);

let foundIndex: number = -1;

for (let i: number = 0; i < members.length; i++) {
  if (members[i] === searchTerm) {
    foundIndex = i;
    break;
  }
}

if (foundIndex !== -1) {
  console.log(`Result : FOUND at index ${foundIndex}`);
} else {
  console.log("Result : NOT FOUND");
}
