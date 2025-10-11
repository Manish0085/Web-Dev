const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];



const newProduct = products.filter((product) => product.price > 50)
                            .sort((product1, product2) => product1.price-product2.price);
console.log(newProduct);

const ans1 = products.map((product) => ({
    name: product.name,
    price: product.price
}));
console.log(ans1);

const ans2 = products
                .filter((product) => 
                    product.price > 50)
                .sort((product1, product2) => 
                    product1.price - product2.price
                )
                .map((product) => ({
                    name: product.name,
                    price: product.price
                }));

console.log(ans2);    


// reducer

const totalPrice1 = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}, 0)

console.log(totalPrice1);

const totalPrice2 = products.reduce((accumulator, currentValue) => {
    if(currentValue.inStock){
        return accumulator + currentValue.price;
    }
    else{
        return accumulator;
    }
}, 0)

console.log(totalPrice2);


// Set Data Structure in JavaScript
const arr = [10, 85, 94, 10, 32, 85, 32];
console.log("arr: ", arr);
const s1 = new Set(arr);
// const s2 = new Set(); // creates an empty set
s1.add(11); 
console.log("set s1: ", s1);
console.log("Size of s1: ", s1.size);

const email = ["ro@gm", "ra@gm", "mo@gm", "ro@gm"];
const eamilSet = new Set(email); // craetes a set of email
console.log(eamilSet);
console.log(typeof eamilSet);

for(let email of eamilSet){
    console.log(email);
}

const uniqueEmailArray = [...new Set(email)];
console.log(uniqueEmailArray);
console.log(typeof uniqueEmailArray);

// map

const map1 = new Map([
    ["Rohit", 40],
    [2, "Rohit"],
    [true, 11],
    [[10, 30, 11], "Mohit"]
])


console.log("Before making change in map1: ", map1);

map1.set({name: "Manish", age: 20}, false);
console.log("After making change in map1: ", map1);
console.log("Size of map: ", map1.size);

for(let num of map1){
    console.log(num);
}

for(let [keys, value] of map1){
    console.log(keys, value);
}