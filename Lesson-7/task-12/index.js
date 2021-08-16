const arrAverage = (arr) =>
  !Array.isArray() ? arr.reduce((acc, num) => acc + num) / arr.length : null;

console.log(arrAverage([2, 5, 6, 3]));
