let restaurant ="Domino's Pizza";
let customerName="Dinesh Notla";
let foodItem ="Margherita Pizza";

let price = 500;
let quantity =8 ;
let isDeliveryNeeded = true;
let totalPrice;



function orderSummery(totalPrice) {
    console.log("=== ORDER SUMMARY ===");
    console.log("Restarent:",restaurant);
    console.log("Customer:",customerName);
    console.log("Food Item:",foodItem);
    console.log("Quantity:",quantity);
    console.log("Price per Item:",price);
    console.log("Total Price:",totalPrice);
    console.log("Delivery Needed:",isDeliveryNeeded);
    
    
}
function calculateTotalPrice(price,quantity) {
    totalPrice=price*quantity;

    orderSummery(totalPrice);
}

calculateTotalPrice(price,quantity);