const getSubArray = (arr, numberOfElements) => {
  const result = [];
  for (let index = 0; index < numberOfElements; index += 1) {
    result.push(arr[index]);
  }
  return result;
};

console.log(getSubArray([11, 4, 8, 3], 2));
console.log(getSubArray([1, 2, 3, 4, 5], 2));
