// foreach, filter, reducer, map, set

const arr = [10, 20, 30, "Rohit", 93];
arr.forEach((number, index) => {
    console.log(number, index);
})


arr.forEach((number, index, arr) => {
    console.log(number, index, arr);
})

const arr1 = [10, 20, 30, 1, 93];
let sum = 0;
arr1.forEach((num) => {
    sum += num;
})

console.log(sum);

// filter
// odd & even
const arr2 = [22, 85, 6, 39, 2, 7];
const ans = arr2.filter((num) => num % 2 == 1);
console.log(ans);

arr2.filtering = function(compare){
    const ans = [];
    for(let num of this){
        if(compare(num))
            ans.push(num);
    }
    return ans;
}

const answer = arr2.filtering((num) => num % 2 == 0);
console.log(answer);

Array.prototype.filterprime = function(check) {
    const ans = [];
    for(let num of this){
        if(num < 2)
            continue;
        let isPrime = true;
        let count = 2;
        for(let i = 2; i<= Math.sqrt(num); i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
                
        }
        if(isPrime)
            ans.push(num);
    }
    return ans;
}


const arr3 = [51, 7, 62, 97, 5, 25];
console.log(arr3.filterprime()); 




// map
console.log(arr3.map((num) => num*2));


