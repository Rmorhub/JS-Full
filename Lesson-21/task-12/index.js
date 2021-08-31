/* eslint-disable no-param-reassign */
// создать DOM эл с помощью document.createElement
// поиск с помощью метода document.querySelector()

// Для работы с атрибутом class есть специальные удобные методы
// element.classList - вернет список всех классов у элемента в
// виде специального объекта - псевдо массива
// element.classList.add('class-name') - добавит элементу класс с именем class-name
// element.classList.remove('class-name') - удалит у элемента класс с именем class-name

// element.classList.toggle('class-name') - удалит у элемента класс с именем class-name,
// если такой уже есть. Или добавит, если у элемента такого класса нету

// element.classList.contains('class-name') - вернет true если у элемента есть класс
// class-name или false, если у элемента такого класса нету

// Вставлять элементы с помощью
// element.append,                     всавить эл в конец
// element.prepend,                    вставить эл в начало
// element.after,                      вставить эл после
// element.before                      вставить эл перед
// Управлять атрибутами HTML элементов с помощью element.setAttribute и element.getAttribute
// element.setAttribute('attribute-name', 'attribute-value')
// не забыть экспортировать под своими именем

// у DOM элементов есть специальное свойство element.dataset, которое позволяет работать
// с data-атрибутами как с объектом. Устанавливая и изменяя свойства в element.dataset
//  мы автоматически изменяем data-атрибуты у HTML элемента

// <!-- index.html -->
// <div data-user-id="12345" data-last-name="Johnson" class="user">Andrew</div>

// /* index.js */
// const userElem = document.querySelector('.user');
// console.log(userElem.dataset); // { userId: '12345', lastName: 'Johnson' }
// userElem.dataset.age = 21;
// userElem.dataset.lastName = 'White';

// to do
// 1 создать ф-цию squaredNumbers
// считывает число с data attribute и записывает квадрат числа в другой атрибут
// найти эл с классом .number
// считать число data-number и записать квадрат этого числа в data-squared-number
// использовать dataset

export const squaredNumbers = () => {
  const numbers = document.querySelectorAll('.number');
  const array = Array.from(numbers);
  // eslint-disable-next-line array-callback-return
  array.map(element => {
    element.dataset.squaredNumber = element.dataset.number ** 2;
  });
};

// squaredNumbers();

// const squaredNumbers = () => {
//   [...document.querySelectorAll('.number')].map(
//     // eslint-disable-next-line no-return-assign
//     element => (element.dataset.squaredNumber = element.dataset.number ** 2),
//   );
// };

// squaredNumbers();
