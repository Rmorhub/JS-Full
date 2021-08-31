// to do
// 1 создать ф-цию setButton принимает 1аргумент (butttonText) 'стринг'
// которая ищет на странице эл body
// установить в body строку ('<button>button text</button>) Где button text  параметр с аргумента ф-ции
// содержамое body устанавливать с помощью .innerHTML

// поиск с помощью метода document.querySelector()
// использовать .innerHTML;                               <--------------------
// buttontext.innerHTML = 'button text';             <--------------------
// не забыть экспортировать под своими именами

// ДОП. попробовать с помощью textContent   -----> вставляет строкой

export const setButton = text => {
  const result = document.querySelector('body');
  result.innerHTML = `<button>${text}</button>`;
};

setButton('Click this button');

// const setButton = text => {
//   const result = document.querySelector('body');
//   result.textContent = `<button>${text}</button>`;
// };

// setButton('Click this button');
