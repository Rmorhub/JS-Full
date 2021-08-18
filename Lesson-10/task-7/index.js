// const superRound = (num, prec) => {
//   let numberAfterPoint = Math.pow(10, prec);

//   const result = [
//     Math.floor(num * numberAfterPoint) / numberAfterPoint,
//     Math.trunc(num * numberAfterPoint) / numberAfterPoint,
//     Math.ceil(num * numberAfterPoint) / numberAfterPoint,
//     Math.round(num * numberAfterPoint) / numberAfterPoint,
//     Number(num.toFixed(prec)),
//   ];
//   return result;
// };

// // examples
// console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
