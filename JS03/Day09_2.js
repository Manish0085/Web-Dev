// callback function

function greeting() {
    console.log("Hello Dosto, Kaise ho?")
}

function meet(callback){
    console.log("I am going to meet someone");
    callback();
    console.log("I have finished work");
}

function dance(){
    console.log("I am dancing");
}

// meet(greeting());
meet(greeting);
meet(dance);


console.log("\n")

function app2(){
    console.log("We have started packing your order")
}

function app1(){
    console.log("We have started preparing your order")
}

function payment(amount, callback){
    console.log(`${amount} payment has initialized`);
    console.log("Payment is received");
    // app1();
    callback();
    // other instructions need to be executed
}


payment(550, app1);
console.log("\n")
payment(550, app2);



