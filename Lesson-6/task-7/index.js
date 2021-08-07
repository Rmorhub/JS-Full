const numbers  = [1,3,4,5,6,7,8,10,40,50]

function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sumOfElements = 0;
  for (let index = 0; index < arr.length; index += 1) {
    sumOfElements += arr[index]
  }
  return sumOfElements > 100;
}

console.log(checkSum(numbers))