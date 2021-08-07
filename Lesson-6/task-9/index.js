const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrReversed = arr.slice();
  arrReversed.reverse();
  return arrReversed;
}

console.log(reverseArray(numbers));
