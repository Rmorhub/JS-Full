// to do
// создать ф-цию 1
// которая ищет на странице эл с классом .title
// вывести найденный эл в консоль console.dir(titleElem)
// return el

// создать ф-цию 2
// которая найдет на странице input с типом text
// выведет найденный эл в консоль с помощью console.dir(inputElem)
// return el

// поиск с помощью метода document.querySelector()
// не забыть экспортировать

export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

console.log(getTitleElement());

export const getInputElement = () => {
  const inputElem = document.querySelector('input');
  console.dir(inputElem);
  return inputElem;
};

console.log(getInputElement());
