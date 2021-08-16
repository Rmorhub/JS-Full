const reverseArray = (arr) => Array.isArray(arr) ?
arr.slice().reverse(): null;

const numbers = [1,5,6,9,10,12,15];
console.log(reverseArray(numbers));
console.log(numbers)