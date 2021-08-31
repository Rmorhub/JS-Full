// to do

// 1 создать ф-цию manageClasses
// добавить класс selected к эл с классом one
// удалить класс selected с эл с классом two
// переключить (toggle) класс 'three_done' у эл с классом three
// добавить класс another-class для эл с классом  four если на нем есть класс some-class

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

export const manageClasses = () => {
  const addSelected = document.querySelector('.one');
  addSelected.classList.add('selected');

  const deleteSelested = document.querySelector('.two');
  deleteSelested.classList.remove('selected');

  const toggle = document.querySelector('.three');
  toggle.classList.toggle('three_done');

  const anotherClass = document.querySelector('.four');
  if (anotherClass.classList.contains('some-class')) {
    anotherClass.classList.add('another-class');
  }
};

// manageClasses();
