const newElement = document.createElement("h2");
newElement.textContent = "Kubernetes acts as a container orchastration";
newElement.id = "second";

console.log(newElement);

const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Docker is used to package the applications";
newElement2.id = "third";
// newElement2.className = "docker";
// newElement2.className = "k8s";
// this will override the class name docker to k8s
// newElement2.className = " k8s";

newElement2.classList.add("docker");
newElement2.classList.add("k8s");
newElement2.classList.remove("k8s");
console.log(newElement2);

newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "30px";

element.before(newElement2);

console.log(newElement2.getAttribute("class"));


// adding element to list
// const item1 = document.createElement("li");
// item1.textContent = "Milk";

// const item2 = document.createElement("li");
// item2.textContent = "Cake";

// const item3 = document.createElement("li");
// item3.textContent = "Bread";

// const item4 = document.createElement("li");
// item4.textContent = "Butter";

// const item5 = document.createElement("li");
// item5.textContent = "cheeze";


// const unorderedElement = document.getElementById("listing");

// unorderedElement.append(item1);
// unorderedElement.append(item2);
// unorderedElement.prepend(item3);
// item1.after(item4);

// unorderedElement.children[2].append(item5); // if we don't have access of list


const unorderedElement = document.getElementById("listing");

const arr = ["Milk", "Cheeze", "Butter", "Bread", "Cake"];

// for(let food of arr){
//     const item = document.createElement("li");
//     item.textContent = food;
//     unorderedElement.append(item);
// }

const fragment = document.createDocumentFragment();
for(let food of arr){
    const item = document.createElement("li");
    item.textContent = food;
    fragment.append(item);
}

unorderedElement.append(fragment);


const s1 = document.getElementById("first");
s1.remove(); 

const month = document.getElementById("month");
console.log(month); 

const item = document.createElement("li");
item.textContent = "Help";

// month.insertAdjacentElement("afterbegin", item);
month.insertAdjacentElement("afterend", item);
// month.insertAdjacentElement("beforebegin", item);
// month.insertAdjacentElement("beforeend", item);


