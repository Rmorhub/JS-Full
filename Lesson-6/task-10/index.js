const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1];

function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copiedArr = arr.slice();
  return copiedArr;
}

console.log(cloneArr(numbers));
