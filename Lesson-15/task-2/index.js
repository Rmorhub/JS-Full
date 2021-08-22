export const createCalculator = () => {
  let result = 0;

  // eslint-disable-next-line no-return-assign
  const add = num => (result += num);
  // eslint-disable-next-line no-return-assign
  const decrease = num => (result -= num);
  // eslint-disable-next-line no-return-assign
  const reset = () => (result = 0);

  const getMemo = () => result;
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator1 = createCalculator();

console.log(calculator1.add(10));
console.log(calculator1.decrease(3));
console.log(calculator1.reset());
console.log(calculator1.add(10));
console.log(calculator1.getMemo());

const calculator2 = createCalculator();


console.log(calculator2.add(20));
console.log(calculator2.decrease(4));
console.log(calculator2.reset());
console.log(calculator2.add(15));
console.log(calculator2.getMemo());



console.log(calculator1.getMemo());
console.log(calculator2.getMemo());