/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const RoomPrice: number= 162500
const NightStayed : number = 4
const ServiceCharge : number = 120000
const VIPMember : boolean = true
const Discountvip : number = 0.12
let FinalPay:number = 0
let Sub1Payment : number = 0
let Sub2Payment : number = 0
let Tax : number = 0
const freebreakfast :boolean = true ? VIPMember===true || NightStayed>=3 : false

Sub1Payment = (RoomPrice*NightStayed)*Discountvip
Sub2Payment = (RoomPrice*NightStayed)-Sub1Payment+ServiceCharge
Tax = Sub2Payment*0.11
FinalPay = Sub2Payment-Tax

console.log("Room subtotal: ",Sub2Payment)
console.log("Discount: ", Discountvip)
console.log("Tax: ",Tax)
console.log("Final payment: ",FinalPay)
console.log("Eligible for free breakfast: ",freebreakfast)