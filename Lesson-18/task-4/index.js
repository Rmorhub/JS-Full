function saveCalls(functionArg) {
  const calls = [];
  return function withMemory(...arg) {
    calls.push(arg);
    withMemory.calls = calls;
    return functionArg.call(this, ...arg);
  };
}

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
console.log(testWithMemory(4, 2));
console.log(testWithMemory(9, 1));

console.log(testWithMemory.calls); // [ [4, 2], [9, 1] ]

/* Поддержка функций с контекстом */

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory.apply({ name: 'Tom' })); // 'Tom'

console.log(methodWithMemory.calls); // [ [] ]
