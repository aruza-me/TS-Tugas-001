/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter((o) => o.status === "completed");

const orderTotals = orders.map((o) => {
    const total = o.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { id: o.id, customer: o.customer, status: o.status, total };
});
const topCustomer = [...orderTotals]
    .filter((o) => o.status === "completed")
    .sort((a, b) => b.total - a.total)[0];

const totalCompletedRevenue = orderTotals
    .filter((o) => o.status === "completed")
    .reduce((sum, o) => sum + o.total, 0);
const purchasedProducts: string[] = [];
for (let i = 0; i < completedOrders.length; i++) {
    for (let j = 0; j < completedOrders[i].items.length; j++) {
        const prod = completedOrders[i].items[j].product;
        if (!purchasedProducts.includes(prod)) {
            purchasedProducts.push(prod);
        }
    }
}
console.log("1. Completed Orders:", completedOrders);
console.log("2. Order Totals:", orderTotals);
console.log("3. Top Customer:", topCustomer);
console.log("4. Total Revenue (Completed):", totalCompletedRevenue);
console.log("5. Purchased Products:", purchasedProducts);

export { };
