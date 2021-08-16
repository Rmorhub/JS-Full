const squareArray = (arr) => Array.isArray(arr) ?
arr.map((num) => num * num): null;

const numbers = [1,5,6,9,10,12,15];
console.log(squareArray(numbers));
console.log(numbers)