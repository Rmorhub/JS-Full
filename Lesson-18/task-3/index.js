function sumOfSquares() {
  // eslint-disable-next-line prefer-rest-params
  return [...arguments].map(el => el * el).reduce((acc, elem) => acc + elem);
}
console.log(sumOfSquares(4, 4, 4, 5, 10));
