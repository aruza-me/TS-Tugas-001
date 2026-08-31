/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */
const KeyboardPrice: number = 850000
const KeyboardQty: number = 1
const MousePrice: number = 275000
const MouseQty: number = 2
const MonitorStandPrice: number = 420000
const MonitorStandQty: number = 1

const VoucherValue: number = 100000
const PremiumMember: boolean = true
const DiscountPremium: number = 0.10
const VatRate: number = 0.11
const PointDivisor: number = 50000

let ProductSubtotal: number = 0
let MembershipDiscount: number = 0
let PaymentBeforeTax: number = 0
let VatAmount: number = 0
let FinalPaY: number = 0
let RewardPoints: number = 0

ProductSubtotal = (KeyboardPrice * KeyboardQty) + (MousePrice * MouseQty) + (MonitorStandPrice * MonitorStandQty)
MembershipDiscount = PremiumMember === true ? ProductSubtotal * DiscountPremium : 0
PaymentBeforeTax = ProductSubtotal - MembershipDiscount - VoucherValue
VatAmount = PaymentBeforeTax * VatRate
FinalPaY = PaymentBeforeTax + VatAmount
RewardPoints = Math.floor(PaymentBeforeTax / PointDivisor)

const FreeShipping: boolean = PremiumMember === true || PaymentBeforeTax > 1500000 ? true : false

console.log("Product subtotal: ", ProductSubtotal)
console.log("Membership discount: ", MembershipDiscount)
console.log("Voucher deduction: ", VoucherValue)
console.log("Payment before tax: ", PaymentBeforeTax)
console.log("VAT: ", VatAmount)
console.log("Final payment: ", FinalPayment)
console.log("Reward points: ", RewardPoints)
console.log("Free shipping eligibility: ", FreeShipping)