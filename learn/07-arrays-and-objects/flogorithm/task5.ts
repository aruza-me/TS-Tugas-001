const members: string[] = ["Rehan", "Aida", "Azura", "Fiqri", "Nada"];
const searchTerm: string = "Azura";
console.log("===== STUDENT NAME SEARCH =====");
console.log(`Searching for: ${searchTerm}`);
let foundIndex: number = 0;
for (let i = 0; i < members.length; i++) {
  if (members[i] === searchTerm) {
    foundIndex = i + 1;
    break;
  }
}
if (foundIndex !== 0) {
  console.log(`Result : FOUND at index ${foundIndex}`);
} else {
  console.log("Result : NOT FOUND");
}
//saya bikin i+1 karena array itu mulai dari 0 sedangkan nomor urut mulai dari 1