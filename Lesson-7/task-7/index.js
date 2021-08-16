const increaseEvenEl = (arr, delta) => Array.isArray(arr) ?
arr.filter((num) => num  % 2 === 0).map((num) => num + delta) : null;

const numbers = [2,5,6,8,11,9,4];
console.log(increaseEvenEl(numbers, 20));
console.log(numbers)