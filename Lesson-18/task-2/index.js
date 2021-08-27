const wallet = {
  transactions: [100, 232, 313, 444, 598],
  getMax() {
    return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());