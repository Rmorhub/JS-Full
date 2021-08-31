// to do  добавить DOM элемент  и добавить его на страницу

// 1 создать ф-цию createButton принимает 1 аргумент (buttonText) 'string'
// найти body через document.querySelector('body')
// ф-ция должна создать DOM эл button с помощью document.createElement
// текст кнопки передается в аргументе ф-ции
// использовать textContent для назначния текста кнопки
// вставить эл button  с помощью append

// создать DOM эл button с помощью document.createElement
// поиск с помощью метода document.querySelector()
// использовать .textContent;                               <--------------------
// element.textContent = 'text';             <--------------------
// не забыть экспортировать под своими именем

// Пример работы createButton('Send Email') ====> <button>Send Email</button> в body документа

export const createButton = buttonText => {
  const result = document.querySelector('body');
  const button = document.createElement('button');
  button.textContent = `${buttonText}`;
  result.append(button);
};

// createButton('Text button');
