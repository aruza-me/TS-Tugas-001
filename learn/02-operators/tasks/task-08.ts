/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const PreviousMeter: number = 25640
const CurrentMeter: number = 25892
const PricePerKwh: number = 1650
const SolarPanelInstalled: boolean = true
const EnergySavingMode: boolean = false
const DiscountSolar: number = 0.20
const DiscountSaving: number = 0.05

let TotalConsumption: number = 0
let ElectricityBill: number = 0
let Sub1Discount: number = 0
let Sub2Discount: number = 0
let FinalBill: number = 0

TotalConsumption = CurrentMeter - PreviousMeter
ElectricityBill = TotalConsumption * PricePerKwh

Sub1Discount = SolarPanelInstalled === true ? ElectricityBill * DiscountSolar : 0
Sub2Discount = EnergySavingMode === false ? 0 : ElectricityBill * DiscountSaving
FinalBill = ElectricityBill - Sub1Discount - Sub2Discount

const GreenEnergyProgram: boolean = SolarPanelInstalled === true && TotalConsumption < 300 && EnergySavingMode === false ? false : true

console.log("Total energy consumption: ", TotalConsumption)
console.log("Electricity bill: ", ElectricityBill)
console.log("Final bill: ", FinalBill)
console.log("Green Energy Program eligibility: ", GreenEnergyProgram)