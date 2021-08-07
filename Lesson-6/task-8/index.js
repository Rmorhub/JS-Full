const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    result.push(arr[index])
    if (result[index] % 2 === 0) {
      result[index] += delta;
    }
  }

  return result;
}

console.log(increaseEvenEl(numbers, 10));
