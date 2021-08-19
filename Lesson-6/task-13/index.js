// const clients = ['Ann', 'John', 'User'];
// const balances = [1400, 87, -6];

// function withdraw(clients, balances, client, amount) {
//   for (let index = 0; index <= clients.length; index += 1) {
//     if (clients[index] === client) {
//       if (balances[index] < amount) {
//         return -1;
//       } else {
//         let balanceAfter = balances[index] - amount;
//         balances[index] = balanceAfter;
//       return balanceAfter;
//       }
//     }
//   }
// }

// console.log(withdraw(clients, balances, 'John', 50));
// console.log(withdraw(clients, balances, 'User', 10));

// export const withdraw = (clients, balances, client, amount) => {
//   let index = clients.indexOf(client);
//   if (balances[index] < amount) {
//     return -1;
//   } else {
//     balances[index] = balances[index] - amount;
//   }
//   return balances[index];
// };