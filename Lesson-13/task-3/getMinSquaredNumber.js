export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const squaredArr = arr.map((num) => num * num);
  return Math.min(...squaredArr);
};

const numbers = [-777, 3, -2, 6, 45, -20];

console.log(getMinSquaredNumber(4));
console.log(getMinSquaredNumber('2'));
