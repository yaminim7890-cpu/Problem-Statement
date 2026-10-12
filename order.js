let customerId = "C101";
let customerCategory = "Premium";
let orderAmount = 4500;
let deliveryLocation = "Local";

let discount = 0;
let deliveryCharge = 0;
let finalAmount = 0;


if (customerCategory === "Premium") {
    discount = orderAmount * 0.15;
} 
else if (customerCategory === "Regular") {
    discount = orderAmount * 0.05;
}
if (orderAmount > 5000) {
    discount = discount + 500;
}
if (discount > orderAmount * 0.20) {
    discount = orderAmount * 0.20;
}
if (orderAmount >= 3000) {
    deliveryCharge = 0;
}
else if (deliveryLocation === "Local") {
    deliveryCharge = 50;
}
else if (deliveryLocation === "City") {
    deliveryCharge = 100;
}
else if (deliveryLocation === "Remote") {
    deliveryCharge = 200;
}
finalAmount = orderAmount - discount + deliveryCharge;

console.log("===== ORDER SUMMARY =====");
console.log("Customer ID:", customerId);
console.log("Customer Category:", customerCategory);
console.log("Original Order Amount: Rs.", orderAmount);
console.log("Discount Amount: Rs.", discount);
console.log("Delivery Charge: Rs.", deliveryCharge);
console.log("Final Payable Amount: Rs.", finalAmount);
console.log("Order Summary: Your order has been calculated successfully.");