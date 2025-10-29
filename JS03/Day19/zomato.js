// zomato application

const orderDetails = {
    orderId: 12321,
    food: ["Pizza", "Biryani", "Coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}



function placeOrder(orderDetails){
    console.log(`${orderDetails.cost} Paymnet is in progress`);
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(Math.random() > 0.1){    
                console.log("Payment is received and order get placed");
                orderDetails.status = true;
                // Callback(orderDetails);
                resolve(orderDetails);
            }
            else {
                reject("Payment is failed");
            }    
        }, 3000);
        
    })
    

}

function preparingOrder(orderDetails){
    console.log(`Your food preparation started ${orderDetails.food}`);

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(Math.random() > 0.1){
                console.log("You order is now prepared");
                orderDetails.token = 123;
                // Callback(orderDetails);
                resolve(orderDetails);
            } else {
                reject("Food item is not present at restaurant");
            }    
        }, 3000);
        
    }) 
}


function pickupOrder(orderDetails){
    console.log(`Delivery boy is on way to pickup order from ${orderDetails.restaurant_location}`);

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(Math.random() > 0.1){
                console.log("I have picked up the order");
                orderDetails.received = true;
                // Callback(orderDetails);
                resolve(orderDetails);
            } else {
                reject("Delivery boy unable to reach restaurant");
            }
        }, 3000);
        
    })
}

function deliverOrder(orderDetails){
    console.log(`I am on my way to deliver order to ${orderDetails.customer_location}`);

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(Math.random() > 0.1){
                console.log("Order delivered succcessfully");
                orderDetails.deliver = true;
                resolve(orderDetails);
            } else {
            reject(orderDetails);
            }    
        }, 3000)
        
    })
}

// placeOrder(preparingOrder);
// preparingOrder();


// placeOrder(orderDetails, (orderDetails) => {
//     preparingOrder(orderDetails, (orderDetails) => {
//         pickupOrder(orderDetails, (orderDetails) => {
//             deliverOrder(orderDetails);
//         });
//     });
// });


placeOrder(orderDetails).then((orderDetails) => {
    return preparingOrder(orderDetails);
}).then((orderDetails) => {
    return pickupOrder(orderDetails);
}).then((orderDetails) =>{
    return deliverOrder(orderDetails);
}).then((orderDetails) => {
    console.log(orderDetails)
}).catch((error) => {
    console.log("Error", error.message);
}).finally(() =>{
    console.log("I am doing cleanup")
})


