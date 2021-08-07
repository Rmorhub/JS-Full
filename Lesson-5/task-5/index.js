function getSum (firstNum , secondNum) {
  let result = 0;
  for (let index = firstNum; index <= secondNum; index += 1) {
    if (index % 2 === 0) {
      result += index;
    }
  }
  return result;
}

console.log(getSum(1,100))
