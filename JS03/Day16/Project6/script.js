const result = document.getElementById("result");
setInterval(() => {
    const currentTime = Date.now();

// console.log(current);
const olympicTime = new Date(2028, 6, 14).getTime(); 
let timer = olympicTime - currentTime;


// millisecond
const day = Math.floor((timer) / (1000 * 60 * 60 * 24))
timer %= (1000 * 60 * 60 * 24);
const hour = Math.floor((timer) / (1000 * 60 * 60));
timer %= (1000 * 60 * 60);
const minute = Math.floor((timer) / (1000 * 60));
timer %= (1000 * 60);
const second = Math.floor((timer) / (1000));
timer %= (1000);

result.textContent = `${day}d : ${hour}h : ${minute}m : ${second}s`;



}, 1000);