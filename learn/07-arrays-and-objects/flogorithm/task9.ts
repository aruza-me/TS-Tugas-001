const Staffdata = [
  { name: "Rangga", salesAmount: 1200000 },
  { name: "Kirana", salesAmount: 1850000 },
  { name: "Bagas", salesAmount: 950000 },
  { name: "Amel", salesAmount: 1600000 },
];
console.log("===== SALES LEADERBOARD =====");
for (let i = 0; i < Staffdata.length; i++) {
  console.log(`${Staffdata[i].name.padEnd(9)}: Rp${Staffdata[i].salesAmount.toLocaleString("id-ID")}`);
}
let highestIndex: number = 0;
let lowestIndex: number = 0;
for (let i = 1; i < Staffdata.length; i++) {
  if (Staffdata[i].salesAmount > Staffdata[highestIndex].salesAmount) {
    highestIndex = i;
  }
  if (Staffdata[i].salesAmount < Staffdata[lowestIndex].salesAmount) {
    lowestIndex = i;
  }
}
console.log(`${"Top Performer".padEnd(17)}: ${Staffdata[highestIndex].name} (Rp${Staffdata[highestIndex].salesAmount.toLocaleString("id-ID")})`);
console.log(`${"Lowest Performer".padEnd(17)}: ${Staffdata[lowestIndex].name} (Rp${Staffdata[lowestIndex].salesAmount.toLocaleString("id-ID")})`);
