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

// Часто бывает необходимо найти родилеля для некоторого элемента. На родителе может
// хранится некая полезная информация, или с родителем нужно что-то сделать в зависимости
// от того, что происходит с дочерними элементами. Для это есть метод
// element.closest(/* CSS selector */). Метод ищет ближайщий родительский элемент по DOM
// к element, который подходит под указанный CSS селлектор

// <!-- index.html before -->
// <div class="one">
//   <p class="two">
//     <span class="three"></span>
//   </p>
// </div>

// /* index.js */
// const spanElem = document.querySelector('.three');
// spanElem.closest('.three'); // вернет его же (span)
// spanElem.closest('.two'); // вернет параграф
// spanElem.closest('.one'); // вернет div

// to do
// 1 создать ф-цию getSection(num)
// найти span у которого атрибут data-number равно num  и вернет из ф-кции значение атрибута
// data-section у родительского для span элемента  с классом box

// ==
// чтобы найти нужный эл по дата атрибуту , `span[data-number="${num}"]`

// export const getSection = num => {
//   const element = document.querySelector(`span[data-number="${num}"]`);
//   return element.closest('.box').getAttribute('data-section');
// };

// console.log(getSection(5));

const getSection = num =>
  document.querySelector(`span[data-number="${num}"]`).closest('.box').getAttribute('data-section');

// console.log(getSection(5));
