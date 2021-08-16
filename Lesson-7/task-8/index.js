// const cloneArr = (arr) => (Array.isArray(arr) ? arr.slice() : null);

// const numbers = [2, 5, 6, 8, 11, 9, 4];
// console.log(cloneArr(numbers));
// console.log(numbers);

const cloneArr = (arr) => (Array.isArray(arr) ? [...arr] : null);

const numbers = [2, 5, 6, 8, 11, 9, 4];
console.log(cloneArr(numbers));
console.log(numbers);

