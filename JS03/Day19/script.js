// console.log("Hello World Start");

// const p1 = fetch("https://api.github.com/users");
// console.log(p1);


// const p2 = p1.then((response) => {
//     console.log(response);
//     return response.json();
// });

// console.log(p2);

// p2.then((response) => {
//     console.log(response);
// })


// const p1 = new Promise((resolve, reject) => {
//     resolve = {
//         name: "Manish",
//         age: 22
//     }
// });

// p1.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })
// console.log(p1);




// Promise chaining
// fetch("http://api.github.com/users")
// .then((response) => {
//     if(!response.ok){
//         throw new Error("Data is not present");
//     }
//     return response.json()
// }).then((data) => {
//     // console.log(data);
//     // data[0].avatar_url
//     const parent = document.getElementById("first");
    
//     for(let i=0; i<data.length; i++){
//         const image = document.createElement('img');
//         image.src = data[i].avatar_url;
//         image.style.height = "250px";
//         image.style.height = "25 0px";

//         parent.append(image);
//     }
// }).catch((error) => {
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// }) 


// console.log("Hello World End");



// const j1 = {
//     name: "Manish",
//     age: 22,
//     address: "Ghaziabad",
//     c: undefined
// }

// // convert to json

// const jsonFormate = JSON.stringify(j1);
// console.log(jsonFormate);



// const jsonFomate = `{
//     "name": "Manish",
//     "age": 30,
//     "address": "Ghaziabad"
// }`;
// console.log(typeof(jsonFomate));

// // JavaScript to Object

// const jsObject = JSON.parse(jsonFomate);
// console.log(jsObject);
// console.log(typeof(jsObject));





































