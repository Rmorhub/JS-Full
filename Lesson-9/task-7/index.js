const getTotalRevenue = (transactions) =>
  transactions
    .map((values) => Object.values(values))
    .map((amount) => amount[1])
    .reduce((acc, elem) => acc + elem);

const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);
