// zomato application

const orderDetails = {
    orderId: 12321,
    food: ["Pizza", "Biryani", "Coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}



function placeOrder(orderDetails, Callback){
    console.log(`${orderDetails.cost} Paymnet is in progress`);

    setTimeout(() => {
        console.log("Payment is received and order get placed");
        orderDetails.status = true;
        Callback(orderDetails);
    }, 3000);

}

function preparingOrder(orderDetails, Callback){
    console.log(`Your food preparation started ${orderDetails.food}`);

    setTimeout(() => {
        console.log("You order is now prepared");
        orderDetails.token = 123;
        Callback(orderDetails);
    }, 3000);
}


function pickupOrder(orderDetails, Callback){
    console.log(`Delivery boy is on way to pickup order from ${orderDetails.restaurant_location}`);

    setTimeout(() => {
        console.log("I have picked up the order");
        orderDetails.received = true;
        Callback(orderDetails);
    }, 3000);
}

function deliverOrder(orderDetails){
    console.log(`I am on my way to deliver order to ${orderDetails.customer_location}`);

    setTimeout(() => {
        console.log("Order delivered succcessfully");
        orderDetails.deliver = true;
    }, 3000)
}

// placeOrder(preparingOrder);
// preparingOrder();


placeOrder(orderDetails, (orderDetails) => {
    preparingOrder(orderDetails, (orderDetails) => {
        pickupOrder(orderDetails, (orderDetails) => {
            deliverOrder(orderDetails);
        });
    });
});














