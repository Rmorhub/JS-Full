/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  for (let index = 0; index <= arr.length; index += 1)
    if (arr[index] === num) {
      return true;
    }
  return false;
};

// examples
console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false
