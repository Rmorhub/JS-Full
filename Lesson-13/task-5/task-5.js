// reverseArray
const numbers = [1, 5, 6, 9, 10, 12, 15];

export const reverseArray = (arr) =>
  Array.isArray(arr) ? arr.slice().reverse() : null;

console.log(reverseArray(numbers));
console.log(reverseArray());
console.log(reverseArray('Test'));
console.log(numbers);

// withdraw

const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];

export const withdraw = (clients, balances, client, amount) => {
  let index = clients.indexOf(client);
  if (balances[index] < amount) {
    return -1;
  } else {
    balances[index] = balances[index] - amount;
  }
  return balances[index];
};

console.log(withdraw(clients, balances, 'John', 50));
console.log(withdraw(clients, balances, 'User', 10));
console.log(withdraw(clients, balances, 'John', )); 

// getAdults

export const getAdults = (obj) => {
  let result = {};

  for (let key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }
  return result;
};


console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(getAdults({ Ann: 56, Andrey: 7 }));
console.log(getAdults());
