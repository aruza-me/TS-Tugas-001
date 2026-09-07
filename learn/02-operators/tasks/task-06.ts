/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const ratePerHour: number = 8000
const playedHours: number = 7
const playedMinutes: number = 35
const totalMinutes: number = (playedHours * 60) + playedMinutes
const remainingMinutes: number = totalMinutes % 60
const totalBilledHours: number = Math.floor(totalMinutes / 60) + (remainingMinutes > 0 ? 1 : 0)
const totalBeforeDiscount: number = totalBilledHours * ratePerHour
const discountAmount: number = totalMinutes > 300 ? totalBeforeDiscount * 0.15 : 0

const finalPayment: number = totalBeforeDiscount - discountAmount
console.log("Total playing time: " + totalMinutes + " minutes")
console.log("Remaining minutes after full hours: " + remainingMinutes + " minutes")
console.log("Total billed hours: " + totalBilledHours + " hours")
console.log("Total payment before discount: Rp" + totalBeforeDiscount)
console.log("Discount amount (15%): Rp" + discountAmount)
console.log("Final payment: Rp" + finalPayment)