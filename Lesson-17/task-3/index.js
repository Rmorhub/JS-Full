// const defer = (func, ms) => {
//   return function () {
//     setTimeout(func, ms);
//   };
// };

// const defer = (func, ms) =>
//   function () {
//     setTimeout(() => func.apply(this,arguments), ms);
//   };

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };

// const deferredHi = defer(user.sayHi, 2000);
// deferredHi.call({ name: 'Bob' });
