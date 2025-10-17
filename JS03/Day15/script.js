// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Introduction to Kubernetes";
// }


// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     // element.textContent = "Introduction to Kubenertes";
//     element.style.backgroundColor = "pink"
// }


// element.onclick = function handleClick(){
//     element.textContent = "Introdution to Docker"
// }


// element.addEventListener('click', () => {
//     element.textContent = "Introduction to Kubernetes";
// });

// element.addEventListener('click', () => {
//     element.style.backgroundColor = "brown";
// })


// let a = {
//     b : 25,
//     greet:function(value) {
//         console.log("Hello", value);
//     }
// }

// a.b = 53;
// a.b = 33;
// a.greet(10);
// a.greet(30);



// const child1 = document.getElementById("child1");
// child1.addEventListener('click', () => {
//     child1.textContent = "I am clicked"
// });


const parent = document.getElementById("parent");
// console.log(parent);
// console.log(parent.children);

// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click', () => {
//         child.textContent = "I am clicked";
//     })
// }

// parent.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.textContent = "I am clicked";
// })

function handleEvent(e) {
    e.target.textContent = "I am clicked";
    parent.removeEventListener('click', handleEvent);
}

parent.addEventListener('click', handleEvent);
// parent.removeEventListener('click', handleEvent);

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click', (e) => {
//     console.log(e);
//     console.log("Target: ", e.target);
//     console.log("GrandParent is Clciked");
// })


// const parent = document.getElementById("parent");
// parent.addEventListener('click', (e) => {
//     console.log(e);
//     console.log("Parent is Clciked");
// })

// const child = document.getElementById("child");
// child.addEventListener('click', (e) => {
//     // e.stopPropagation();   // to stop bublling
//     console.log(e);
//     console.log("Child is Clciked");
// })






