
let TotalCalls: number = 0;

function LogCall(): void {

  TotalCalls++;

  const currentCallNumber: number = TotalCalls;

  console.log(`[Function LogCall] Local variable (currentCallNumber) = ${currentCallNumber}`);
}

console.log("=== Activity 9: Global vs Local Counter ===");
console.log(`Initial Global TotalCalls = ${TotalCalls}`);
console.log("--- Calling LogCall() 3 Times ---");

LogCall();
LogCall();
LogCall();

console.log("--- Finished Calls ---");
console.log(`Final Global TotalCalls = ${TotalCalls}`);
