/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */
const FinalScore : number = 82
const Attendance :number = 94
const TuitionPaid : boolean = true 
const isEligible : boolean = (FinalScore >= 75) && (Attendance >= 90) && (TuitionPaid === true)

console.log("Final Score:",FinalScore)
console.log(`Attendance: ${Attendance}%`)
if (TuitionPaid === true ){console.log("Tuition Paid: Yes");}
else {console.log("Tuition Paid: No");}
if (isEligible === true ){console.log("Is the student eligible for graduation? Yes");}
else{console.log("Is the student eligible for graduation? No");}

