const Staffdata = [
  { name: "Rangga", salesAmount: 1200000 },
  { name: "Kirana", salesAmount: 1850000 },
  { name: "Bagas", salesAmount: 950000 },
  { name: "Amel", salesAmount: 1600000 },
];
console.log("===== SALES LEADERBOARD =====");
Staffdata.map((staff) => {
  console.log(`${staff.name.padEnd(9)}: Rp${staff.salesAmount.toLocaleString("id-ID")}`);
});
const sortedStaff = [...Staffdata].sort((a, b) => b.salesAmount - a.salesAmount);
const topPerformer = sortedStaff[0];
const lowestPerformer = sortedStaff[sortedStaff.length - 1];
console.log(`${"Top Performer".padEnd(17)}: ${topPerformer.name} (Rp${topPerformer.salesAmount.toLocaleString("id-ID")})`);
console.log(`${"Lowest Performer".padEnd(17)}: ${lowestPerformer.name} (Rp${lowestPerformer.salesAmount.toLocaleString("id-ID")})`);
export {};
