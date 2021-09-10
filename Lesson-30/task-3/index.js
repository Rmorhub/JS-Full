/* ===> 1 <=== */

/*
 * successPromise должен зарезолвить число 67
 * Ответьте себе на вопрос, какой тип данных имеет переменная successPromise
 */

const successPromise = new Promise(resolve => {
  resolve(67)
});

console.log(typeof successPromise);
console.log(successPromise);
// Объект
// ключом выступает fulfilled
// значением - значение передающее в resolve

/*
 * допишите обработчик успешного промиса (аргументы и тело ф-ции onSuccess)
 * чтобы в консоль вывелся квадрат числа, которое резолвиться из successPromise
 */

// eslint-disable-next-line prefer-arrow-callback
successPromise.then(function onSuccess(number) {
  const squareNumber = number * number
  console.log(squareNumber);
});

/*
 * в обработчике ошибок промиса (ф-ция onError внутри .catch()) выведите в консоль текст 'I am an error'
 * текст вывелся в консоль?
 * подумайте почему
 */
// eslint-disable-next-line prefer-arrow-callback
successPromise.catch(function onError() {
  console.log('I am an error')
});

// нет , потому что результат выполнения fulfilled , аргумент resolve удовлетворяет функцию onSuccess