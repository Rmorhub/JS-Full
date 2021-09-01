// to do  добавить DOM элемент  и добавить его на страницу

// 1 создать ф-цию finishList
// найти list через document.querySelector('.list')
// использовать  document.createElement для создание эл списка li
// текст в созданные эл вставлять с помощью textContent;
// использовать append,prepend,before,after для вставки эл на страницу
// outpu: list from 1 to 8

// создать DOM эл с помощью document.createElement
// поиск с помощью метода document.querySelector()
// использовать .textContent;                               <--------------------
// element.textContent = 'text';             <--------------------
// Вставлять элементы с помощью
// element.append,                     всавить эл в конец
// element.prepend,                    вставить эл в начало
// element.after,                      вставить эл после
// element.before                      вставить эл перед
// не забыть экспортировать под своими именем

export const finishList = () => {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  const first = document.createElement('li');
  first.textContent = 1;
  list.prepend(first);

  const four = document.createElement('li');
  four.textContent = 4;
  special.before(four);

  const six = document.createElement('li');
  six.textContent = 6;
  special.after(six);
  
  const eight = document.createElement('li');
  eight.textContent = 8;
  list.append(eight);
};

// finishList();
