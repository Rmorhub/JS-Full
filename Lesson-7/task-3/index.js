const flatArray = (arr) => arr.flat().slice().sort((a, b) => a-b);
const arr = [18, [24, 30, 99], 15, 1, [4,6,7], 5, 3];

console.log(flatArray(arr))
console.log(arr)