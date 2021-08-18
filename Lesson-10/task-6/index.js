const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }
  const result = [];
  const min = Math.ceil(from);
  const max = Math.floor(to);

  for (let index = 1; index <= length; index += 1) {
    result.push(Math.round(Math.random() * (max - min) + min));
  }
  return result;
};

console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]

// const getRandomNumbers = (length, from, to) => {
//   if (to - from < 1) {
//     return null;
//   }
//   let min = Math.ceil(from);
//   let max = Math.ceil(to);
//   const newArr = new Array(length);

//   return newArr.fill(Math.floor(Math.random() * (max - min) + min));
// };

// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
// console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
