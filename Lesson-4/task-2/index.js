const m = 10;
const n = 20;
let result = 1;

for (let m = 10; m <= n; m += 1) {
    if (m % 2 === 1)
    result *= m
}

console.log(result)