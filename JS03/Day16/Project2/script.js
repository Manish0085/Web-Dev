const parent = document.getElementById("parent");

// parent.addEventListener('click', (e) => {
//     // console.log(e.target);
//     const child = e.target;
    
//     const body = document.querySelector('body');
//     body.style.backgroundColor = child.id;
// })

parent.addEventListener('click', (e) => {

    if(e.target.tagName === "BUTTON"){
        const color = e.target.id;
        document.body.style.background = color;
    }
});