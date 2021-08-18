const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absoluteNumbers = arr.map((num) => Math.abs(num));
  return Math.max(...absoluteNumbers);
};

const array = [-777, 3, -1, 45, 20];
const emptyArray = [];
console.log(getMaxAbsoluteNumber());
console.log(getMaxAbsoluteNumber(array));
console.log(getMaxAbsoluteNumber(emptyArray));
