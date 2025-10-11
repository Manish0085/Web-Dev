// Scope and closuer
// Global Scope --> Accessible to everyone
// Functional Scope --> accessible only to that function 
// Block Scope --> accessible only to that block
// the variable created using "var" keyyword doesn't respect the Block scope which means the variable created using "vsr" keyword in a block can be accessed outside the block
let a = 10;
const b = 20;

if(true){
    let d = 25; // d has block scope 
    console.log(a);
}
function greet(){
    let c = 30;
    console.log("a: ", a);
    console.log("c: ", c);
}

//console.log(c);  //  Cannot access'coz c var has functional scope within the greet function
greet();



let global = 38;

function fun1(){
    let global = 33; // valid'coz this "global" var has functional scope
    console.log("functional global var: ", global);
}

fun1();


// function createCounter(){

//     function increament(){
//         console.log("I am increamenting function...")
//     }
//     return increament;
// }

// // createCounter(); // I am increamenting function... (this is when the function doesn't return anything)

// const count = createCounter();
// // console.log(count);
// count();




function createCounter1(){

    let count = 0;
    function increament(){
        count++;
        return count;
    }
    return increament;
}


const counter= createCounter1();
console.log(counter());
console.log(counter());
console.log(counter());



let user = {
    balance: 50,
    deposite: function(amount){
        if(typeof amount === "number" && amount > 0){
            this.balance += amount;
            return this.balance;
        }
    },
    withdraw: function(amount){
        if(typeof amount === "number" && amount > 0 && this.balance >= amount){
            this.balance -= amount;
            return this.balance;
        }
    },
    getBalance: function(){
        return this.balance;
    }
}


// user.balance = "Rohit";
// console.log(user.getBalance());
// console.log(user.deposite("2sa00"));
// console.log(user.deposite(500));

// User can access methods only
// balance: he/she doesn't has the direct access of property

function createBankAccount(){
    let balance = 500;

    let user = {
       deposite: function(amount){
        if(typeof amount === "number" && amount > 0){
            balance += amount;
            return balance;
        }
        },
        withdraw: function(amount){
            if(typeof amount === "number" && amount > 0 && balance >= amount){
                balance -= amount;
                return balance;
            }
        },
        getBalance: function(){
            return balance;
        }
    }
    return user;
}


const customer = createBankAccount();
console.log(customer.deposite(200));


// Heigher order function
// A function is returned from another function is called heigher order function
// A function is passed as an argument to another function like callback function


function double(){
    function execute(){
        console.log("Hello");
    }

    return execute;
}

const n = double();
n();

function fun2(value){
    function exec(num){
        return num*value;
    }

    return exec;
}

const f = fun2(20);
console.log(f(5));
console.log(fun2(15)(8));