const input = document.querySelector('.search__input');
const button = document.querySelector('.search__btn');

const inputEvent = () => {
  const text = input.value;
  console.log(`${text}`);
};

button.addEventListener('click', inputEvent);
