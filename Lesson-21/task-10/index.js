// to do  добавить DOM элемент  и добавить его на страницу

// 1 создать ф-цию finishForm
// ф-кция должна вставить  в начало формы инпут  текстового типа
// ф-кция должна изменить атрибут type  с text на password

// создать DOM эл с помощью document.createElement
// поиск с помощью метода document.querySelector()
// Вставлять элементы с помощью
// element.append,                     всавить эл в конец
// element.prepend,                    вставить эл в начало
// element.after,                      вставить эл после
// element.before                      вставить эл перед
// Управлять атрибутами HTML элементов с помощью element.setAttribute и element.getAttribute
// element.setAttribute('attribute-name', 'attribute-value')
// не забыть экспортировать под своими именем

export const finishForm = () => {
  const loginForm = document.querySelector('.login-form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'login';
  loginForm.prepend(input);

  const inputToChange = document.querySelector('[name = password]');
  // console.log(inputToChange);
  inputToChange.type = 'password';
};

// finishForm();
