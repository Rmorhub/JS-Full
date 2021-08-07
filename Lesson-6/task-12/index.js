// const numbers = [2, 4, 1, 5, 7, 9, 10, 3, 8, 0];

// function sortAsc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }

//   for (let n = 0; n < array.length - 1; n += 1) {
//     for (let i = 0; i < array.length - 1 - n; i += 1) {
//       if (array[i] > array[i + 1]) {
//         const buff = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = buff;
//       }
//     }
//   }
//   return array;
// }

// function sortDesc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   for (let n = 0; n < array.length - 1; n += 1) {
//     for (let i = 0; i < array.length - 1 - n; i += 1) {
//       if (array[i] < array[i + 1]) {
//         const buff = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = buff;
//       }
//     }
//   }
//   return array;
// }


// console.log(sortAsc(numbers));
// console.log(sortDesc(numbers));