const sum = (arr) =>
  !Array.isArray() ? arr.reduce((acc, num) => acc + num) : null;

const numbers = [2, 5, 6, 3, 0, 3, -1];
console.log(sum(numbers));
