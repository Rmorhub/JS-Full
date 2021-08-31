// to do
// 1 создать ф-цию getItemsList
// которая ищет на странице ВСЕ эл с классом .technology
// вывести найденные эл в консоль console.dir(elementsList)
// return список из фкци (создать переменную в которой храняться данные и вернуть его)

// 2 создать ф-цию  getItemsArray
// которая найдет на странице ВСЕ эл с классом .tool
// преобразовать полученный список в массив 
// (полученный список  (NodeList) преобразовать с помощью Array.from(); )
// вывести полученный список в консоль console.dir(elementsArray)
// return массив из ф-кции 

// поиск с помощью метода document.querySelectorAll()
// не забыть экспортировать под своими именами 

export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

console.log(getItemsList());

export const getItemsArray = () => {
  const classFinder = document.querySelectorAll('.tool');
  const elementsArray = Array.from(classFinder);
  console.dir(elementsArray);
  return elementsArray;
};

console.log(getItemsArray());
