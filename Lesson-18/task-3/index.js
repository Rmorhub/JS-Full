function sumOfSquares(...arg) {
  return [...arg].map(el => el * el).reduce((acc, elem) => acc + elem);
}
console.log(sumOfSquares(4, 4, 4, 5, 10));
