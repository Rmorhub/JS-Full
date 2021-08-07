
/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let result = 0;
  for (let index = 0; index < arr.length; index += 1) {
    result += arr[index];
  }
  return result;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null
