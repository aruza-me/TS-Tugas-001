/**
 * A programming competition stores participants' scores in the following array.
 *
 *
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 *
 *
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scoRes = [
  98, 76, 85, 62, 91, 73, 88, 59, 100, 81, 67, 79, 94, 83, 71, 96, 65, 87, 74,
  90,
];
let goldCount: number = 0;
let silverCount: number = 0;
let bronzeCount: number = 0;
let noMedalCount: number = 0;
let toTalScore: number = 0;

for (let i = 0; i < scoRes.length; i++) {
  toTalScore += scoRes[i];
  if (scoRes[i] >= 95) {
    goldCount++;
  } else if (scoRes[i] >= 85) {
    silverCount++;
  } else if (scoRes[i] >= 75) {
    bronzeCount++;
  } else {
    noMedalCount++;
  }
}
const AverageScore: number = toTalScore / scoRes.length;
console.log(`Number of Gold Medal Winners: ${goldCount}`);
console.log(`Number of Silver Medal Winners: ${silverCount}`);
console.log(`Number of Bronze Medal Winners: ${bronzeCount}`);
console.log(`Number of Students Without Medals: ${noMedalCount}`);
console.log(`Average Competition Score: ${AverageScore}`);
