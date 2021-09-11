const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below

// const sumOfPromises = (...promiseNumbers) => Promise.allSettled(promiseNumbers).then(num => console.log(num));
// ;

// sumOfPromises(promiseNumber1, promiseNumber2, promiseNumber3);

export const resultPromise = new Promise (resolve => {
  const arrayOfPromises = [];
  promiseNumber1.then(value => arrayOfPromises.push(value))
  promiseNumber2.then(value => arrayOfPromises.push(value));
  promiseNumber3.then(value => arrayOfPromises.push(value));
  // console.log(arrayOfPromises)
  resolve(arrayOfPromises);
  return arrayOfPromises
})


resultPromise
  .then(numbersList => {
    console.log(numbersList);
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then(result => {
    console.log(result); // 98
  });
