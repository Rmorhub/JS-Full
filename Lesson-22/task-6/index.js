const button = document.querySelector('.single-use-btn');

const buttonEvent = () => {
  console.log(`clicked`);
  button.removeEventListener('click', buttonEvent);
};

button.addEventListener('click', buttonEvent);
