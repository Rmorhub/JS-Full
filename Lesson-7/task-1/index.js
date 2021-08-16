const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(getSpecialNumbers(array));
console.log(array)
