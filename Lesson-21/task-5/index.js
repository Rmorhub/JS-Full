// to do
// 1 создать ф-цию setTitle принимает 1аргумент (text) 'стринг'
// которая ищет на странице эл с классом .title
// и устанавливает в него заданный текст (text)

// поиск с помощью метода document.querySelector()
// использовать textContent;                               <--------------------
// newProductElem.textContent = 'New Product';             <--------------------
// не забыть экспортировать под своими именами

export const setTitle = (text) => {
  const result = document.querySelector('.title');
  result.textContent = text;
};

// setTitle('new-title');
