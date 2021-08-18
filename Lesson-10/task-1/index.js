const arrList = [1, 2, 3, '4', 'five', 'six', NaN, undefined, -Infinity, null];

const getFiniteNumbers = (arr) => arr.filter((el) => Number.isFinite(el));
console.log(getFiniteNumbers(arrList));

const getFiniteNumbersV2 = (arr) => arr.filter((el) => isFinite(el));
console.log(getFiniteNumbersV2(arrList));

const getNaN = (arr) => arr.filter((el) => Number.isNaN(el));
console.log(getNaN(arrList));

const getNaNV2 = (arr) => arr.filter((el) => isNaN(el));
console.log(getNaNV2(arrList));

const getIntegers = (arr) => arr.filter((el) => Number.isInteger(el));
console.log(getIntegers(arrList));

console.log(arrList)
