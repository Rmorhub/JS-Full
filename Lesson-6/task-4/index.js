// /**
//  * @param {number[]} numbers
//  * @return {number[]}
//  */
// function swap(numbers) {
//   const [start, ...rest] = numbers;
//   return [...rest, start];
// }

// /**
//  * @param {number[]} numbers
//  * @return {number[]}
//  */
// function swapManual(numbers) {
//   let result = [];
//   for (let index = 1; index < numbers.length; index += 1) {
//     result.push(numbers[index]);
//   }
//   result.push(numbers[0]);
//   return result;
// }

// // examples
// console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
// console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
