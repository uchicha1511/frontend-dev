let restaurant ="Venkatesh Bhattu";
let customerName="Dinesh Notla";
let foodItem ="Mutton Biryani" ;
let price = 280;
let quantity =2 ;
let isDeliveryNeeded = "Yes,Mama";
let totalPrice;
let deliveryAdress=" MVP Colony - beach side area";
let deliveryCharges= 40;
let estimatedTime= "45 minutes - traffic batti depend chesthundhi";

function orderSummery(totalPrice) {
    console.log("=== ORDER SUMMARY - ANDHRA STYLE ===");
    console.log("Restarent:",restaurant);
    console.log("Customer:",customerName);
    console.log("Food Item:",foodItem);
    console.log("Quantity:",quantity);
    console.log("Price per Item:",price);
    console.log("SubTotal:",totalPrice);
    console.log("Delivery To:",deliveryAdress);
    console.log("Deliery Charges:",deliveryCharges);
    console.log("Total:",totalPrice+deliveryCharges,"-kunchum ekkuva ayyindi kaani taste ki worth it!");
    console.log("Delivery Kavala?:",isDeliveryNeeded);
    console.log("Estmated Time:",estimatedTime);     
}
function calculateTotalPrice(Price,quantity) {
    totalPrice=Price*quantity;

    orderSummery(totalPrice);
}

calculateTotalPrice(price,quantity);