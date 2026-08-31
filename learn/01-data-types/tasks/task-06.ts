/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    ProductCode: string
    ProductName: string
    SellingPrice: number
    StockQuantity: number
    ProductWeight: string
    AverageCustomerRating: number
    IsDiscounted: boolean
}

const product1: Product = {
    ProductCode: "735-001",
    ProductName: "Wireless Noise-Canceling Headphones",
    SellingPrice: 199,
    StockQuantity: 45,
    ProductWeight: "0.25 Kg",
    AverageCustomerRating: 4.8,
    IsDiscounted: true
}

const product2: Product = {
    ProductCode: "342-042",
    ProductName: "Smart Coffee Maker",
    SellingPrice: 89.5,
    StockQuantity: 120,
    ProductWeight: "1.8 Kg",
    AverageCustomerRating: 4.2,
    IsDiscounted: false
}

const product3: Product = {
    ProductCode: "542-993",
    ProductName: "Office Chair",
    SellingPrice: 249,
    StockQuantity: 15,
    ProductWeight: "12.5 Kg",
    AverageCustomerRating: 4.9,
    IsDiscounted: true
}

console.log(product1)
console.log(product2)
console.log(product3)