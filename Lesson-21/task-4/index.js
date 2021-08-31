// to do
// 1 создать ф-цию getTitle
// которая ищет на странице эл с классом .title (title)
// return (текстовый контент с помощью textContent)

// 2 создать ф-цию getDesctiption
// которая ищет на странице эл с классом .about
// return (текстовый контент с помощью innerText)

// 3 создать ф-цию getPlans
// которая ищет на странице эл с классом .plans
// return (текстовый контент с помощью innerHTML)

// 4 создать ф-цию getGoal
// которая ищет на странице эл с классом .goal
// return (текстовый контент с помощью outerHTML)

// поиск с помощью метода document.querySelector()
// Считывать и задавать содержимое элементов с помощью element.textContent,  <---------
// element.innerText, element.innerHTML, element.outerHTML и т.д  <--------
// не забыть экспортировать под своими именами

export const getTitle = () => {
  const result = document.querySelector('.title');
  return result.textContent;
};

// console.log(getTitle());

export const getDesctiption = () => {
  const result = document.querySelector('.about');
  return result.innerText;
};

// console.log(getDesctiption());

export const getPlans = () => {
  const result = document.querySelector('.plans');
  return result.innerHTML;
};

// console.log(getPlans());

export const getGoal = () => {
  const result = document.querySelector('.goal');
  return result.outerHTML;
};

// console.log(getGoal());