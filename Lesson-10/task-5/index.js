const prices = [1, 4, 1.87, 2, 40, 8.13, 3.56];

const getTotalPrice = (arr) => {
  const sum = arr.reduce((acc, el) => acc + el);
  const result = Math.floor(sum * 100) / 100;
  return '$' + result
};
console.log(getTotalPrice(prices));
