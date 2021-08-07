const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19];

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let max = 0;
  for (let index = 0; index <= arr.length; index += 1) {
    if (max < arr[index]) {
      max = arr[index];
    }
  }
  let min = 1;
  for (let index = 0; index <= arr.length; index += 1) {
    if (min > arr[index]) {
      min = arr[index];
    }
  }
  return max + min > 1000
}

console.log(checker(numbers));
