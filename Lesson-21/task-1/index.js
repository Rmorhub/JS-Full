const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */

const renderListItems = listItems => {
  const listElem = document.querySelector('.list'); // поиск интересующего нас  элемента на странице
  // В методы element.querySelector, element.querySelectorAll 
  // нужно передать как аргумент строку с CSS селектором 
  // (таким же, как мы используем в CSS для стилизации элементов).
  

  const listItemElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li'); // создание DOM элемента li
      listItemElem.classList.add('list__item'); // element.classList.add('class-name') - добавит элементу класс с именем class-name
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input'); // создание DOM элемента li
      checkboxElem.setAttribute('type', 'checkbox'); // задать элементу все необходимые атрибуты c помощью element.setAttribute('attribute-name', 'attribute-value')
      checkboxElem.checked = done; // задаем checked значение
      checkboxElem.classList.add('list__item-checkbox'); // element.classList.add('class-name') - добавит элементу класс с именем class-name
      listItemElem.append(checkboxElem, text); // parentElement.append(element) - вставит DOM элемент element внутрь DOM элемента parentElement. Если в parentElement есть другие дочерние элементы, то append вставит новый элемент в конец (последним)

      return listItemElem; 
    });

  listElem.append(...listItemElems); // parentElement.append(element) - вставит DOM элемент element внутрь DOM элемента parentElement. Если в parentElement есть другие дочерние элементы, то append вставит новый элемент в конец (последним)
};

renderListItems(tasks);
