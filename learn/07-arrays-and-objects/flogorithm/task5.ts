const members: string[] = ["Rehan", "Aida", "Azura", "Fiqri", "Nada"];
const searchTerm: string = "Azura";
console.log("===== STUDENT NAME SEARCH =====");
console.log(`Searching for: ${searchTerm}`);
const foundMember = members.find((m) => m === searchTerm);
const foundIndex: number = members.indexOf(searchTerm) + 1;
if (foundMember) {
  console.log(`Result : FOUND at index ${foundIndex}`);
} else {
  console.log("Result : NOT FOUND");
}
//saya bikin +1 karena array itu mulai dari 0 sedangkan nomor urut mulai dari 1
export {};
