class Wallet {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Not enough funds`);
      return;
    }
    this.balance -= amount;
  }
}

const wallet1 = new Wallet();
console.log(wallet1);

console.log(wallet1.getBalance());

wallet1.deposit(1000);
console.log(wallet1)

wallet1.withdraw(1001)
console.log(wallet1)

wallet1.deposit(1000);
console.log(wallet1);

wallet1.withdraw(1000);
console.log(wallet1);

wallet1.withdraw(999);
console.log(wallet1);
