const staffNames: string[] = ["Rangga", "Kirana", "Bagas", "Amel"];
const salesAmounts: number[] = [1200000, 1850000, 950000, 1600000];

console.log("===== SALES LEADERBOARD =====");

for (let i: number = 0; i < staffNames.length; i++) {
  console.log(`${staffNames[i].padEnd(9)}: Rp${salesAmounts[i].toLocaleString("en-US")}`);
}

let highestIndex: number = 0;
let lowestIndex: number = 0;

for (let i: number = 1; i < salesAmounts.length; i++) {
  if (salesAmounts[i] > salesAmounts[highestIndex]) {
    highestIndex = i;
  }
  if (salesAmounts[i] < salesAmounts[lowestIndex]) {
    lowestIndex = i;
  }
}

console.log(`${"Top Performer".padEnd(17)}: ${staffNames[highestIndex]} (Rp${salesAmounts[highestIndex].toLocaleString("en-US")})`);
console.log(`${"Lowest Performer".padEnd(17)}: ${staffNames[lowestIndex]} (Rp${salesAmounts[lowestIndex].toLocaleString("en-US")})`);
