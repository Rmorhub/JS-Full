// to do
// 1 создать ф-цию clearList
// которая ищет на странице эл .categories
// установить его содержимое как пустую строку ''
// содержамое устанавливать с помощью .innerHTML

// поиск с помощью метода document.querySelector()
// использовать .innerHTML;                               <--------------------
// element.innerHTML = '';             <--------------------
// не забыть экспортировать под своими именем

// ДОП. попробовать с помощью textContent   -----> вставляет строкой

export const clearList = () => {
  const result = document.querySelector('.categories');
  result.innerHTML = '';
};

clearList();

